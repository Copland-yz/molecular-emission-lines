Algorithms
==========

Detailed explanation of the algorithms used in MELT.

Search Algorithm
----------------

Overview
~~~~~~~~

The search algorithm filters emission lines based on wavelength range and element composition using a linear scan approach.

**Complexity**: O(n) where n is the total number of emission lines in the database

**Input**:

* Wavelength/frequency range (min, max, unit)
* Included elements (array)
* Excluded elements (array)

**Output**: Array of matching emission lines sorted by wavelength

Algorithm Steps
~~~~~~~~~~~~~~~

**Step 1: Range Normalization**

Convert user input to common unit (nanometers):

.. code-block:: javascript

   function normalizeRange(min, max, unit) {
     switch(unit) {
       case 'nm': return { min, max };
       case 'A': return { min: min/10, max: max/10 };
       case 'um': return { min: min*1000, max: max*1000 };
       case 'GHz': return {
         min: 299792.458 / max,  // c/frequency
         max: 299792.458 / min
       };
       case 'cm-1': return {
         min: 10000000 / max,    // 1/wavenumber
         max: 10000000 / min
       };
     }
   }

**Step 2: Wavelength Filtering**

Filter lines within range:

.. code-block:: javascript

   function filterByWavelength(lines, min, max) {
     return lines.filter(line =>
       line.wavelength_nm >= min &&
       line.wavelength_nm <= max
     );
   }

**Step 3: Element Extraction**

Parse molecular formulas to extract constituent elements:

.. code-block:: javascript

   function parseFormula(formula) {
     // Regex to match element symbols: Capital letter + optional lowercase
     const elementRegex = /([A-Z][a-z]?)/g;
     const elements = formula.match(elementRegex);
     return [...new Set(elements)]; // Remove duplicates
   }

**Examples**:

* ``"CO"`` → ``["C", "O"]``
* ``"H2O"`` → ``["H", "O"]``
* ``"C2H4"`` → ``["C", "H"]``

**Step 4: Element Filtering**

Apply inclusion and exclusion filters:

.. code-block:: javascript

   function filterByElements(lines, included, excluded) {
     return lines.filter(line => {
       const elements = parseFormula(line.molecule);

       // If any element is excluded, reject line
       if (excluded.some(e => elements.includes(e))) {
         return false;
       }

       // If include list is empty, accept (no filter)
       if (included.length === 0) {
         return true;
       }

       // Otherwise, at least one included element must be present
       return included.some(e => elements.includes(e));
     });
   }

**Logic table**:

==============================  =============  =========
Condition                       Include List   Result
==============================  =============  =========
Contains excluded element       Any            Reject
Include list empty              Empty          Accept
Contains included element       Non-empty      Accept
No included element present     Non-empty      Reject
==============================  =============  =========

**Step 5: Sorting**

Sort results by wavelength:

.. code-block:: javascript

   function sortResults(lines) {
     return lines.sort((a, b) =>
       a.wavelength_nm - b.wavelength_nm
     );
   }

Complete Search Function
~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: javascript

   function searchEmissionLines(minVal, maxVal, unit, includedElements, excludedElements) {
     // Step 1: Normalize range
     const { min, max } = normalizeRange(minVal, maxVal, unit);

     // Step 2-4: Filter
     let results = allLines; // Cached database
     results = filterByWavelength(results, min, max);
     results = filterByElements(results, includedElements, excludedElements);

     // Step 5: Sort
     results = sortResults(results);

     return results;
   }

Spectrum Generation Algorithm
------------------------------

Overview
~~~~~~~~

Generate synthetic spectrum by modeling emission lines as Gaussian peaks.

**Input**:

* Array of emission lines
* FWHM (Full Width at Half Maximum) in wavelength units
* Optional intensity values

**Output**: Arrays of wavelength and intensity values for plotting

Gaussian Peak Model
~~~~~~~~~~~~~~~~~~~

Each emission line is modeled as a Gaussian:

.. math::

   I(\lambda) = I_0 \cdot \exp\left(-\frac{(\lambda - \lambda_0)^2}{2\sigma^2}\right)

**Parameters**:

* :math:`\lambda_0` = line center wavelength
* :math:`I_0` = peak intensity
* :math:`\sigma` = standard deviation

**Relationship to FWHM**:

.. math::

   \text{FWHM} = 2\sqrt{2\ln(2)} \cdot \sigma \approx 2.355 \sigma

   \sigma = \frac{\text{FWHM}}{2.355}

Algorithm Steps
~~~~~~~~~~~~~~~

**Step 1: Determine Wavelength Range**

.. code-block:: javascript

   function getWavelengthRange(lines, fwhm) {
     const wavelengths = lines.map(l => l.wavelength_nm);
     const min = Math.min(...wavelengths) - 5 * fwhm;
     const max = Math.max(...wavelengths) + 5 * fwhm;
     return { min, max };
   }

**Padding**: 5× FWHM on each side ensures peak wings are captured

**Step 2: Create Wavelength Array**

.. code-block:: javascript

   function createWavelengthArray(min, max, nPoints = 2000) {
     const step = (max - min) / (nPoints - 1);
     const wavelengths = [];
     for (let i = 0; i < nPoints; i++) {
       wavelengths.push(min + i * step);
     }
     return wavelengths;
   }

**Resolution**: 2000 points provides smooth curves

**Adaptive resolution**:

.. code-block:: javascript

   const range = max - min;
   const nPoints = Math.min(5000, Math.max(1000, range / fwhm * 50));

Ensures adequate sampling (50 points per FWHM)

**Step 3: Generate Gaussian for Each Line**

.. code-block:: javascript

   function generateGaussian(center, fwhm, intensity, wavelengthArray) {
     const sigma = fwhm / 2.355;
     const twoSigmaSquared = 2 * sigma * sigma;

     return wavelengthArray.map(lambda => {
       const diff = lambda - center;
       const exponent = -(diff * diff) / twoSigmaSquared;
       return intensity * Math.exp(exponent);
     });
   }

**Optimization**: Precompute :math:`2\sigma^2` to reduce operations

**Step 4: Sum All Gaussians**

.. code-block:: javascript

   function sumSpectra(wavelengthArray, lines, fwhm) {
     const spectrum = new Array(wavelengthArray.length).fill(0);

     lines.forEach(line => {
       const intensity = line.intensity || 1.0; // Default to 1 if missing
       const gaussian = generateGaussian(
         line.wavelength_nm,
         fwhm,
         intensity,
         wavelengthArray
       );

       // Add to total spectrum
       for (let i = 0; i < spectrum.length; i++) {
         spectrum[i] += gaussian[i];
       }
     });

     return spectrum;
   }

**Step 5: Normalize**

.. code-block:: javascript

   function normalize(spectrum) {
     const maxIntensity = Math.max(...spectrum);
     return spectrum.map(val => val / maxIntensity);
   }

**Purpose**: Scale tallest peak to 1.0 for consistent display

Complete Generation Function
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: javascript

   function generateSpectrum(lines, fwhm) {
     // Step 1: Determine range
     const { min, max } = getWavelengthRange(lines, fwhm);

     // Step 2: Create wavelength array
     const wavelengths = createWavelengthArray(min, max);

     // Step 3-4: Generate and sum Gaussians
     const spectrum = sumSpectra(wavelengths, lines, fwhm);

     // Step 5: Normalize
     const normalizedSpectrum = normalize(spectrum);

     return {
       wavelengths: wavelengths,
       intensities: normalizedSpectrum
     };
   }

Unit Conversion Algorithm
--------------------------

Wavelength/Frequency Conversions
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Constants**:

* :math:`c` = 299,792.458 km/s = 299,792,458 m/s
* Relationships:

  * :math:`\lambda_{\text{nm}} = \lambda_{\text{Å}} / 10`
  * :math:`\lambda_{\text{nm}} = \lambda_{\mu\text{m}} \times 1000`
  * :math:`f_{\text{GHz}} = \frac{c(\text{km/s})}{\lambda_{\text{nm}}} = \frac{299792.458}{\lambda_{\text{nm}}}`
  * :math:`\tilde{\nu}_{\text{cm}^{-1}} = \frac{10^7}{\lambda_{\text{nm}}}`

Conversion Matrix
~~~~~~~~~~~~~~~~~

.. code-block:: javascript

   const CONVERSION_FACTORS = {
     'nm': {
       'A': 10,
       'um': 0.001,
       'GHz': (nm) => 299792.458 / nm,
       'cm-1': (nm) => 10000000 / nm
     },
     'A': {
       'nm': 0.1,
       'um': 0.0001,
       'GHz': (A) => 2997924.58 / A,
       'cm-1': (A) => 100000000 / A
     },
     // ... more conversions
   };

   function convertUnits(value, fromUnit, toUnit) {
     if (fromUnit === toUnit) return value;

     const factor = CONVERSION_FACTORS[fromUnit][toUnit];
     return typeof factor === 'function' ? factor(value) : value * factor;
   }

Data Loading Algorithm
-----------------------

Asynchronous Loading
~~~~~~~~~~~~~~~~~~~~

**Strategy**: Parallel fetch with Promise.all

.. code-block:: javascript

   async function loadAllData() {
     const files = [
       'assets/data/Pearse&Gaydon/CO.json',
       'assets/data/Pearse&Gaydon/CN.json',
       // ... all data files
     ];

     try {
       // Fetch all files in parallel
       const promises = files.map(file =>
         fetch(file)
           .then(response => {
             if (!response.ok) throw new Error(`Failed to load ${file}`);
             return response.json();
           })
       );

       // Wait for all to complete
       const datasets = await Promise.all(promises);

       // Flatten arrays and cache
       const allLines = datasets.flat();
       return allLines;

     } catch (error) {
       console.error('Data loading error:', error);
       throw error;
     }
   }

Caching Strategy
~~~~~~~~~~~~~~~~

.. code-block:: javascript

   let cachedData = null;

   async function getData() {
     if (cachedData === null) {
       cachedData = await loadAllData();
     }
     return cachedData;
   }

**Benefits**:

* Load once per session
* Instant subsequent searches
* Reduced network requests

Element Parsing Algorithm
--------------------------

Regex-Based Approach
~~~~~~~~~~~~~~~~~~~~

Molecular formulas are parsed using regular expressions:

.. code-block:: javascript

   function parseFormula(formula) {
     // Match capital letter optionally followed by lowercase
     // Ignore digits and +/- charges
     const regex = /([A-Z][a-z]?)/g;
     const matches = formula.match(regex) || [];

     // Remove duplicates
     return [...new Set(matches)];
   }

**Examples**:

==================  =======================
Formula             Extracted Elements
==================  =======================
CO                  [C, O]
H2O                 [H, O]
CH4                 [C, H]
C2H5OH              [C, H, O]
Fe2O3               [Fe, O]
CO+                 [C, O]
==================  =======================

Edge Cases
~~~~~~~~~~

**Isotopes**: ``13CO`` → ``["C", "O"]`` (isotope number ignored)

**Charges**: ``CO+`` → ``["C", "O"]`` (charge ignored)

**Parentheses**: ``Ca(OH)2`` → ``["Ca", "O", "H"]``

**Complex molecules**: ``CH3COOH`` → ``["C", "H", "O"]``

Export Algorithm
----------------

TXT Export
~~~~~~~~~~

.. code-block:: javascript

   function exportToTXT(lines) {
     const headers = [
       'Molecule', 'System', 'Wavelength(nm)', 'Wavelength(A)',
       'Upper_Level', 'Lower_Level', 'Intensity', 'Source', 'Page'
     ];

     const rows = lines.map(line => [
       line.molecule,
       line.system,
       line.wavelength_nm,
       line.wavelength_angstrom,
       line.upper_level,
       line.lower_level,
       line.intensity || '',
       line.source,
       line.page || ''
     ].join('\t'));

     const content = [headers.join('\t'), ...rows].join('\n');

     downloadFile(content, 'molecular_lines.txt', 'text/plain');
   }

CSV Export
~~~~~~~~~~

.. code-block:: javascript

   function exportToCSV(lines) {
     const escapeCsvField = (field) => {
       if (field === null || field === undefined) return '';
       const str = String(field);
       if (str.includes(',') || str.includes('"') || str.includes('\n')) {
         return '"' + str.replace(/"/g, '""') + '"';
       }
       return str;
     };

     const headers = [
       'Molecule', 'System', 'Wavelength(nm)', 'Wavelength(A)',
       'Upper_Level', 'Lower_Level', 'Intensity', 'Source', 'Page'
     ];

     const rows = lines.map(line =>
       [
         line.molecule,
         line.system,
         line.wavelength_nm,
         line.wavelength_angstrom,
         line.upper_level,
         line.lower_level,
         line.intensity,
         line.source,
         line.page
       ].map(escapeCsvField).join(',')
     );

     const content = [headers.join(','), ...rows].join('\n');

     downloadFile(content, 'molecular_lines.csv', 'text/csv');
   }

PNG Export
~~~~~~~~~~

.. code-block:: javascript

   function exportToPNG(chartInstance) {
     const canvas = chartInstance.canvas;
     const url = canvas.toDataURL('image/png');

     const link = document.createElement('a');
     link.download = 'spectrum.png';
     link.href = url;
     link.click();
   }

Performance Optimizations
--------------------------

Search Optimization
~~~~~~~~~~~~~~~~~~~

* Early termination in wavelength filter
* Caching of parsed formulas
* Minimal DOM manipulation

Spectrum Generation Optimization
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* Precompute constants (sigma, 2σ²)
* Array pre-allocation
* Avoid redundant operations in loops

Memory Management
~~~~~~~~~~~~~~~~~

* Single data cache
* No circular references
* Garbage collection friendly

Computational Complexity
------------------------

Summary Table
~~~~~~~~~~~~~

========================  ===================  =================
Operation                 Time Complexity      Space Complexity
========================  ===================  =================
Search                    O(n)                 O(n)
Spectrum generation       O(m × p)             O(p)
Element parsing           O(k)                 O(k)
Sorting                   O(n log n)           O(1)
Export                    O(n)                 O(n)
========================  ===================  =================

Where:

* n = number of lines in database
* m = number of selected lines
* p = number of spectrum points
* k = length of molecular formula

Typical Values
~~~~~~~~~~~~~~

* n ≈ 10,000 (current database)
* m ≈ 10-100 (selected lines)
* p ≈ 2,000 (spectrum resolution)
* k ≈ 2-10 (formula length)

**Estimated execution times** (modern hardware):

* Search: 10-50 ms
* Spectrum generation: 50-200 ms
* Export: 5-20 ms

Next Steps
----------

* Explore :doc:`architecture` for system design
* See :doc:`data-format` for data specifications
* Learn :doc:`../development/adding-databases` for extending functionality

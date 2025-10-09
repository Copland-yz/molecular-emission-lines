API Reference
=============

JavaScript API documentation for MELT core functions.

.. note::
   MELT is currently a client-side only application. This documents the internal JavaScript API. A RESTful API for programmatic access is planned for future releases.

Core Functions
--------------

Search Functions
~~~~~~~~~~~~~~~~

searchEmissionLines()
^^^^^^^^^^^^^^^^^^^^^

Search for emission lines matching specified criteria.

**Signature**:

.. code-block:: javascript

   searchEmissionLines(minVal, maxVal, unit, includedElements, excludedElements)

**Parameters**:

* ``minVal`` (number) - Minimum wavelength/frequency value
* ``maxVal`` (number) - Maximum wavelength/frequency value
* ``unit`` (string) - Unit of measurement: ``'nm'``, ``'A'``, ``'um'``, ``'GHz'``, or ``'cm-1'``
* ``includedElements`` (array of strings) - Elements that must be present
* ``excludedElements`` (array of strings) - Elements to exclude

**Returns**: Array of emission line objects

**Example**:

.. code-block:: javascript

   const results = searchEmissionLines(
     500,      // min
     600,      // max
     'nm',     // unit
     ['C', 'O'], // included elements
     ['N']     // excluded elements
   );

filterByWavelength()
^^^^^^^^^^^^^^^^^^^^

Filter emission lines by wavelength range.

**Signature**:

.. code-block:: javascript

   filterByWavelength(lines, minNm, maxNm)

**Parameters**:

* ``lines`` (array) - Array of emission line objects
* ``minNm`` (number) - Minimum wavelength in nm
* ``maxNm`` (number) - Maximum wavelength in nm

**Returns**: Filtered array of emission lines

filterByElements()
^^^^^^^^^^^^^^^^^^

Filter emission lines by element composition.

**Signature**:

.. code-block:: javascript

   filterByElements(lines, includedElements, excludedElements)

**Parameters**:

* ``lines`` (array) - Array of emission line objects
* ``includedElements`` (array) - Elements to include
* ``excludedElements`` (array) - Elements to exclude

**Returns**: Filtered array of emission lines

Spectrum Generation
~~~~~~~~~~~~~~~~~~~

generateSpectrum()
^^^^^^^^^^^^^^^^^^

Generate synthetic spectrum from selected emission lines.

**Signature**:

.. code-block:: javascript

   generateSpectrum(lines, fwhm, unit)

**Parameters**:

* ``lines`` (array) - Array of emission line objects
* ``fwhm`` (number) - Full Width at Half Maximum
* ``unit`` (string) - Wavelength unit (default: ``'nm'``)

**Returns**: Object with ``wavelengths`` and ``intensities`` arrays

**Example**:

.. code-block:: javascript

   const spectrum = generateSpectrum(
     selectedLines,
     0.5,    // FWHM in nm
     'nm'
   );

   // spectrum.wavelengths: [500.0, 500.1, 500.2, ...]
   // spectrum.intensities: [0.05, 0.08, 0.12, ...]

createGaussianPeak()
^^^^^^^^^^^^^^^^^^^^

Create Gaussian peak for single emission line.

**Signature**:

.. code-block:: javascript

   createGaussianPeak(center, fwhm, intensity, wavelengthArray)

**Parameters**:

* ``center`` (number) - Peak center wavelength
* ``fwhm`` (number) - Full Width at Half Maximum
* ``intensity`` (number) - Peak intensity
* ``wavelengthArray`` (array) - Wavelength values to evaluate

**Returns**: Array of intensity values

Unit Conversion
~~~~~~~~~~~~~~~

convertUnits()
^^^^^^^^^^^^^^

Convert between different wavelength/frequency units.

**Signature**:

.. code-block:: javascript

   convertUnits(value, fromUnit, toUnit)

**Parameters**:

* ``value`` (number) - Value to convert
* ``fromUnit`` (string) - Source unit
* ``toUnit`` (string) - Target unit

**Supported units**:

* ``'nm'`` - nanometers
* ``'A'`` - Ångström
* ``'um'`` - micrometers
* ``'GHz'`` - gigahertz
* ``'cm-1'`` - wavenumber

**Returns**: Converted value (number)

**Example**:

.. code-block:: javascript

   const angstrom = convertUnits(500, 'nm', 'A');  // 5000
   const ghz = convertUnits(500, 'nm', 'GHz');     // 599.585

Element Parsing
~~~~~~~~~~~~~~~

parseFormula()
^^^^^^^^^^^^^^

Extract element symbols from molecular formula.

**Signature**:

.. code-block:: javascript

   parseFormula(formula)

**Parameters**:

* ``formula`` (string) - Molecular formula (e.g., ``'CO'``, ``'H2O'``)

**Returns**: Array of element symbols (strings)

**Example**:

.. code-block:: javascript

   parseFormula('CO');      // ['C', 'O']
   parseFormula('H2O');     // ['H', 'O']
   parseFormula('C2H5OH');  // ['C', 'H', 'O']

Data Loading
~~~~~~~~~~~~

loadAllData()
^^^^^^^^^^^^^

Load all emission line data from JSON files.

**Signature**:

.. code-block:: javascript

   async loadAllData()

**Returns**: Promise resolving to array of all emission lines

**Example**:

.. code-block:: javascript

   const allLines = await loadAllData();
   console.log(`Loaded ${allLines.length} emission lines`);

getData()
^^^^^^^^^

Get emission line data (with caching).

**Signature**:

.. code-block:: javascript

   async getData()

**Returns**: Promise resolving to cached or newly loaded data

Export Functions
~~~~~~~~~~~~~~~~

exportToTXT()
^^^^^^^^^^^^^

Export emission lines to tab-separated text file.

**Signature**:

.. code-block:: javascript

   exportToTXT(lines)

**Parameters**:

* ``lines`` (array) - Emission lines to export

**Side effects**: Triggers browser download

exportToCSV()
^^^^^^^^^^^^^

Export emission lines to CSV file.

**Signature**:

.. code-block:: javascript

   exportToCSV(lines)

**Parameters**:

* ``lines`` (array) - Emission lines to export

**Side effects**: Triggers browser download

exportToPNG()
^^^^^^^^^^^^^

Export spectrum chart as PNG image.

**Signature**:

.. code-block:: javascript

   exportToPNG(chartInstance)

**Parameters**:

* ``chartInstance`` - Chart.js chart object

**Side effects**: Triggers browser download

Data Structures
---------------

EmissionLine Object
~~~~~~~~~~~~~~~~~~~

Structure of emission line data:

.. code-block:: typescript

   interface EmissionLine {
     molecule: string;           // e.g., "CO"
     system: string;             // e.g., "d³Δ–a³Π"
     wavelength_nm: number;      // wavelength in nm
     wavelength_angstrom: number; // wavelength in Å
     upper_level: string;        // upper energy level
     lower_level: string;        // lower energy level
     intensity: number | null;   // relative intensity
     source: string;             // literature citation
     page: number | null;        // page number in source
   }

**Example**:

.. code-block:: javascript

   {
     "molecule": "CO",
     "system": "d³Δ–a³Π",
     "wavelength_nm": 646.46,
     "wavelength_angstrom": 6464.6,
     "upper_level": "d³Δ",
     "lower_level": "a³Π",
     "intensity": null,
     "source": "Pearse & Gaydon (1976) p.111",
     "page": 111
   }

Spectrum Object
~~~~~~~~~~~~~~~

Structure of generated spectrum:

.. code-block:: typescript

   interface Spectrum {
     wavelengths: number[];  // wavelength array
     intensities: number[];  // intensity array (normalized)
   }

**Example**:

.. code-block:: javascript

   {
     wavelengths: [500.0, 500.1, 500.2, ..., 600.0],
     intensities: [0.01, 0.02, 0.05, ..., 0.00]
   }

Constants
---------

Unit Conversion Factors
~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: javascript

   const SPEED_OF_LIGHT = 299792.458; // km/s
   const WAVENUMBER_FACTOR = 10000000; // nm to cm⁻¹

Supported Units
~~~~~~~~~~~~~~~

.. code-block:: javascript

   const WAVELENGTH_UNITS = ['nm', 'A', 'um'];
   const FREQUENCY_UNITS = ['GHz'];
   const WAVENUMBER_UNITS = ['cm-1'];

Error Handling
--------------

Common Errors
~~~~~~~~~~~~~

**Invalid unit**:

.. code-block:: javascript

   try {
     convertUnits(500, 'nm', 'invalid');
   } catch (error) {
     console.error('Unsupported unit');
   }

**Empty data**:

.. code-block:: javascript

   if (lines.length === 0) {
     console.warn('No emission lines found');
   }

**Invalid wavelength range**:

.. code-block:: javascript

   if (minVal >= maxVal) {
     throw new Error('Minimum must be less than maximum');
   }

Events
------

Custom Events
~~~~~~~~~~~~~

**search-complete**

Fired when search completes.

.. code-block:: javascript

   document.addEventListener('search-complete', (event) => {
     console.log(`Found ${event.detail.count} lines`);
   });

**spectrum-generated**

Fired when spectrum generation completes.

.. code-block:: javascript

   document.addEventListener('spectrum-generated', (event) => {
     console.log('Spectrum ready');
   });

Future API
----------

Planned RESTful API
~~~~~~~~~~~~~~~~~~~

A RESTful API is planned for programmatic access:

**Endpoints** (planned):

.. code-block:: text

   GET /api/v1/search
   Parameters:
     - min: minimum wavelength
     - max: maximum wavelength
     - unit: wavelength unit
     - elements: comma-separated element list

   GET /api/v1/molecules
   Returns: List of available molecules

   GET /api/v1/molecule/{formula}
   Returns: All lines for specified molecule

**Example usage** (planned):

.. code-block:: bash

   curl "https://api.melt.example.com/v1/search?min=500&max=600&unit=nm&elements=C,O"

This API is not yet implemented. Check project roadmap for status.

Next Steps
----------

* See :doc:`data-sources` for available databases
* Learn :doc:`citation` format for publications
* Explore :doc:`../technical/algorithms` for implementation details

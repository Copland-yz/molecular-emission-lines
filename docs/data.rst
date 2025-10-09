Data and Technical Details
==========================

Database Information
--------------------

Current Database
~~~~~~~~~~~~~~~~

**Pearse & Gaydon (1976)**

* Full citation: Pearse, R. W. B., & Gaydon, A. G. (1976). *The identification of molecular spectra* (4th ed.). Chapman and Hall.
* **Coverage**: ~10,000 emission lines
* **Wavelength range**: 200-10,000 nm (UV to near-IR)
* **Molecules**: CO, CN, OH, C2, H2, N2, NO, CH, NH, and many others
* **Precision**: Typically 0.01-0.1 nm

Data Format
-----------

Each emission line includes:

* **Molecule** - Chemical formula (e.g., CO, H2, OH)
* **System** - Spectroscopic transition notation
* **Wavelength** - In nm and Ångström
* **Upper/Lower Level** - Energy state notation
* **Intensity** - Relative intensity (when available)
* **Source** - Literature reference and page number

Technical Implementation
------------------------

Architecture
~~~~~~~~~~~~

* **Frontend**: HTML/CSS/JavaScript
* **Visualization**: Chart.js library
* **Data**: Static JSON files
* **Hosting**: GitHub Pages (Jekyll)

MELT is entirely client-side - all data processing happens in your browser. No server required.

Spectrum Generation
~~~~~~~~~~~~~~~~~~~

Emission lines are modeled as Gaussian peaks:

.. math::

   I(\\lambda) = I_0 \\cdot \\exp\\left(-\\frac{(\\lambda - \\lambda_0)^2}{2\\sigma^2}\\right)

Where:

* λ₀ = line center wavelength
* I₀ = peak intensity
* σ = standard deviation (related to FWHM by: FWHM = 2.355σ)

File Structure
--------------

.. code-block:: text

   MELT/
   ├── index.html              # Main application
   ├── assets/
   │   ├── js/
   │   │   └── molecular-lines.js   # Core logic
   │   └── data/
   │       └── Pearse&Gaydon/       # JSON data files
   └── docs/                   # This documentation

Data Files
~~~~~~~~~~

JSON format, one file per molecule:

.. code-block:: json

   [
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
   ]

Adding New Databases
--------------------

To contribute additional spectroscopic data:

1. **Format data** as JSON following the schema above
2. **Validate** JSON syntax
3. **Test** in local copy of MELT
4. **Submit** via GitHub pull request

See :doc:`development` for detailed instructions.

Limitations
-----------

* **Intensity data** not always available (shown as null)
* **Wavelength precision** varies by source (typically 0.01-0.1 nm)
* **Temperature dependence** not specified
* **Line shapes** modeled as Gaussian (real shapes may differ)

For absolute intensity measurements or high-precision work, consult original sources.

Performance
-----------

* **Database size**: ~10,000 lines
* **Search time**: <100ms on modern hardware
* **Spectrum generation**: <200ms for 100 lines
* **Browser compatibility**: Chrome, Firefox, Safari, Edge (version 90+)

References
----------

**Primary data source**:

Pearse, R. W. B., & Gaydon, A. G. (1976). *The identification of molecular spectra* (4th ed.). Chapman and Hall.

**Additional resources**:

* NIST Chemistry WebBook: https://webbook.nist.gov/chemistry/
* Atomic Line List: https://www.pa.uky.edu/~peter/atomic/

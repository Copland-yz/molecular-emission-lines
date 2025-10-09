Data Format
===========

This document describes the JSON data format used by MELT for storing spectroscopic emission line data.

JSON Structure
--------------

Database Files
~~~~~~~~~~~~~~

Each molecular species has its own JSON file containing an array of emission line objects.

**File naming convention**: ``{molecule}.json`` (e.g., ``CO.json``, ``OH.json``)

**Location**: ``assets/data/{database_name}/``

Example File Structure
~~~~~~~~~~~~~~~~~~~~~~

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
     },
     {
       "molecule": "CO",
       "system": "d³Δ–a³Π",
       "wavelength_nm": 644.39,
       "wavelength_angstrom": 6443.9,
       "upper_level": "d³Δ",
       "lower_level": "a³Π",
       "intensity": null,
       "source": "Pearse & Gaydon (1976) p.111",
       "page": 111
     }
   ]

Field Specifications
--------------------

Required Fields
~~~~~~~~~~~~~~~

All emission line entries must include these fields:

molecule
^^^^^^^^

* **Type**: String
* **Description**: Chemical formula of the emitting species
* **Format**: Standard chemical notation with element symbols
* **Examples**:

  * ``"CO"`` - Carbon monoxide
  * ``"H2"`` - Hydrogen molecule
  * ``"OH"`` - Hydroxyl radical
  * ``"C2"`` - Dicarbon
  * ``"NO"`` - Nitric oxide

* **Validation**: Must contain valid element symbols
* **Notes**:

  * Subscripts not required (use "H2" not "H₂")
  * Case-sensitive (use "CO" not "co")
  * Ions indicated with "+" or "-" (e.g., "CO+")

system
^^^^^^

* **Type**: String
* **Description**: Spectroscopic system or transition notation
* **Format**: Free-form text, typically using spectroscopic term symbols
* **Examples**:

  * ``"d³Δ–a³Π"`` - Transition between two triplet states
  * ``"A²Σ⁺–X²Π"`` - Sigma-Pi transition
  * ``"Fourth Positive System"`` - Named band system
  * ``"v'=0→v''=0"`` - Vibrational transition

* **Notes**:

  * May include Unicode characters (Greek letters, superscripts)
  * Hyphen or arrow indicates transition direction
  * Upper state listed first (conventional)

wavelength_nm
^^^^^^^^^^^^^

* **Type**: Number (float)
* **Description**: Wavelength of the emission line in nanometers
* **Units**: nm (10⁻⁹ m)
* **Precision**: Typically 2-4 decimal places
* **Range**: Typically 100-10000 nm (UV to IR)
* **Examples**:

  * ``589.0`` - Sodium D line
  * ``656.28`` - Hydrogen alpha
  * ``1083.0`` - Helium line

* **Validation**: Must be positive number
* **Notes**: Primary wavelength field used for searches

wavelength_angstrom
^^^^^^^^^^^^^^^^^^^

* **Type**: Number (float)
* **Description**: Wavelength in Ångström units
* **Units**: Å (10⁻¹⁰ m)
* **Conversion**: wavelength_nm × 10
* **Examples**:

  * ``5890.0`` - Sodium D line (589.0 nm)
  * ``6562.8`` - Hydrogen alpha (656.28 nm)

* **Validation**: Should equal wavelength_nm × 10
* **Notes**: Included for convenience and compatibility with older literature

upper_level
^^^^^^^^^^^

* **Type**: String
* **Description**: Upper energy level of the transition
* **Format**: Spectroscopic term symbol notation
* **Examples**:

  * ``"d³Δ"`` - Triplet Delta state
  * ``"A²Σ⁺"`` - Doublet Sigma-plus state
  * ``"3p ²P°"`` - Electron configuration notation

* **Notes**:

  * Uses standard spectroscopic notation
  * May include electron configuration
  * Superscripts indicate multiplicity

lower_level
^^^^^^^^^^^

* **Type**: String
* **Description**: Lower energy level of the transition
* **Format**: Same as upper_level
* **Examples**:

  * ``"a³Π"`` - Triplet Pi state
  * ``"X²Π"`` - Ground state (X denotes ground)
  * ``"3s ²S"`` - Electron configuration

* **Notes**:

  * "X" typically denotes ground electronic state
  * Lowercase letters often indicate lower-lying states

source
^^^^^^

* **Type**: String
* **Description**: Literature reference for the data
* **Format**: Citation with page number
* **Examples**:

  * ``"Pearse & Gaydon (1976) p.111"``
  * ``"NIST Atomic Spectra Database"``
  * ``"Huber & Herzberg (1979)"``

* **Notes**:

  * Should be sufficient to locate original data
  * Page number included when applicable
  * Full citation should be in database documentation

page
^^^^

* **Type**: Integer or null
* **Description**: Page number in source reference
* **Examples**:

  * ``111`` - Page 111
  * ``null`` - No page number (e.g., online database)

* **Notes**: Null for sources without page numbers

Optional Fields
~~~~~~~~~~~~~~~

intensity
^^^^^^^^^

* **Type**: Number (float) or null
* **Description**: Relative intensity of the emission line
* **Scale**: Arbitrary units, database-specific
* **Examples**:

  * ``100`` - Strong line
  * ``10`` - Medium line
  * ``1`` - Weak line
  * ``null`` - Intensity not available

* **Notes**:

  * Not always available in source data
  * Scale varies between sources
  * Generally indicates relative brightness
  * Temperature-dependent (usually unspecified)

Additional Fields (Future)
~~~~~~~~~~~~~~~~~~~~~~~~~~

Future database versions may include:

**wavelength_uncertainty**

* Type: Number
* Units: Same as wavelength
* Description: Measurement uncertainty

**frequency_ghz**

* Type: Number
* Units: GHz
* Description: Frequency corresponding to wavelength

**wavenumber_cm**

* Type: Number
* Units: cm⁻¹
* Description: Wavenumber (1/wavelength)

**transition_probability**

* Type: Number
* Units: s⁻¹
* Description: Einstein A coefficient

**temperature**

* Type: Number
* Units: K
* Description: Temperature for intensity measurement

Data Quality Standards
----------------------

Validation Rules
~~~~~~~~~~~~~~~~

All data must satisfy:

1. **Completeness**: All required fields present
2. **Type checking**: Correct data types (string, number, null)
3. **Consistency**: wavelength_angstrom = wavelength_nm × 10
4. **Physical validity**: Positive wavelengths, realistic ranges
5. **Format compliance**: JSON syntax correctness

Accuracy Requirements
~~~~~~~~~~~~~~~~~~~~~

**Wavelength Accuracy**:

* Precision: At least 0.01 nm
* Accuracy: As reported in source
* Uncertainty: Documented where available

**Intensity Values**:

* Relative scale acceptable
* Scale should be consistent within database
* Temperature conditions documented

**Spectroscopic Notation**:

* Standard term symbols
* Consistent with physics conventions
* Unicode characters allowed

Data Sources
~~~~~~~~~~~~

Current Database
^^^^^^^^^^^^^^^^

**Pearse & Gaydon (1976)**

* Full citation: Pearse, R. W. B., & Gaydon, A. G. (1976). *The identification of molecular spectra*. Chapman and Hall.
* Coverage: UV to near-IR molecular spectra
* Content: ~10,000 emission lines
* Quality: Well-established reference, moderate precision

Future Databases
^^^^^^^^^^^^^^^^

Additional databases can be added following the same JSON format:

* NIST Atomic Spectra Database
* Kurucz line lists
* HITRAN database
* VALD (Vienna Atomic Line Database)

File Organization
-----------------

Directory Structure
~~~~~~~~~~~~~~~~~~~

.. code-block:: text

   assets/data/
   ├── Pearse&Gaydon/
   │   ├── CO.json
   │   ├── CN.json
   │   ├── OH.json
   │   ├── C2.json
   │   ├── H2.json
   │   └── ... (more molecules)
   └── {future_database}/
       └── ...

**Naming conventions**:

* Database directory: Original source name
* Molecule files: ``{formula}.json``
* All lowercase or proper capitalization
* No spaces in filenames

File Size Considerations
~~~~~~~~~~~~~~~~~~~~~~~~

**Optimal size**: 10-100 KB per file

* Too small (<1 KB): Excessive HTTP requests
* Too large (>1 MB): Slow parsing

**Splitting strategies**:

* One file per molecule (current approach)
* One file per spectroscopic system (for very large molecules)
* Separate files for different wavelength ranges (if needed)

Encoding and Format
~~~~~~~~~~~~~~~~~~~

**Character encoding**: UTF-8

* Supports Unicode spectroscopic symbols
* Greek letters: α, β, γ, Δ, Π, Σ, etc.
* Superscripts and subscripts: ², ³, ⁺, ⁻, etc.

**JSON formatting**:

* Pretty-printed (indented) for human readability
* 2-space indentation
* Arrays formatted vertically for line entries

**Line endings**: LF (Unix-style)

Data Processing Pipeline
-------------------------

From Source to JSON
~~~~~~~~~~~~~~~~~~~

Typical workflow for adding new data:

1. **Source acquisition**: Obtain reference data (book, database, publication)
2. **Data extraction**: Manual entry, OCR, or digital download
3. **Format conversion**: Convert to JSON structure
4. **Validation**: Check against schema and physical constraints
5. **Testing**: Load in MELT and verify search functionality
6. **Documentation**: Update data source references

Example Conversion Script
~~~~~~~~~~~~~~~~~~~~~~~~~

Python script for converting CSV to JSON:

.. code-block:: python

   import csv
   import json

   def convert_csv_to_json(csv_file, json_file, molecule):
       data = []

       with open(csv_file, 'r', encoding='utf-8') as f:
           reader = csv.DictReader(f)
           for row in reader:
               entry = {
                   "molecule": molecule,
                   "system": row['system'],
                   "wavelength_nm": float(row['wavelength_nm']),
                   "wavelength_angstrom": float(row['wavelength_nm']) * 10,
                   "upper_level": row['upper_level'],
                   "lower_level": row['lower_level'],
                   "intensity": float(row['intensity']) if row['intensity'] else None,
                   "source": row['source'],
                   "page": int(row['page']) if row['page'] else None
               }
               data.append(entry)

       with open(json_file, 'w', encoding='utf-8') as f:
           json.dump(data, f, indent=2, ensure_ascii=False)

   # Usage
   convert_csv_to_json('CO_data.csv', 'CO.json', 'CO')

Validation Script
~~~~~~~~~~~~~~~~~

JSON schema validation:

.. code-block:: python

   import json
   from jsonschema import validate

   schema = {
       "type": "array",
       "items": {
           "type": "object",
           "required": [
               "molecule", "system", "wavelength_nm",
               "wavelength_angstrom", "upper_level",
               "lower_level", "source", "page"
           ],
           "properties": {
               "molecule": {"type": "string"},
               "system": {"type": "string"},
               "wavelength_nm": {"type": "number", "minimum": 0},
               "wavelength_angstrom": {"type": "number", "minimum": 0},
               "upper_level": {"type": "string"},
               "lower_level": {"type": "string"},
               "intensity": {"type": ["number", "null"]},
               "source": {"type": "string"},
               "page": {"type": ["integer", "null"]}
           }
       }
   }

   # Validate
   with open('CO.json', 'r') as f:
       data = json.load(f)
       validate(instance=data, schema=schema)
       print("Validation successful!")

Best Practices
--------------

For Data Contributors
~~~~~~~~~~~~~~~~~~~~~

**Accuracy**:

* Double-check wavelength values
* Preserve precision from source
* Document uncertainties

**Completeness**:

* Fill all required fields
* Use null only when data truly unavailable
* Include intensity when possible

**Attribution**:

* Cite original sources accurately
* Include page numbers
* Respect copyright and licenses

**Quality control**:

* Validate JSON syntax
* Test in MELT before submitting
* Provide sample search parameters

For Database Maintainers
~~~~~~~~~~~~~~~~~~~~~~~~~

**Organization**:

* Consistent file structure
* Clear naming conventions
* Documented sources

**Version control**:

* Git tracking for all changes
* Commit messages describe additions
* Tags for major database updates

**Documentation**:

* Maintain source bibliography
* Document conversion process
* Note any data transformations

Common Issues and Solutions
---------------------------

Unicode Characters
~~~~~~~~~~~~~~~~~~

**Problem**: Special characters not displaying

**Solution**:

* Ensure UTF-8 encoding
* Use proper Unicode code points
* Test display in browser

**Example**:

.. code-block:: json

   {
     "system": "A²Σ⁺–X²Π",
     "upper_level": "3p ²P°"
   }

Numerical Precision
~~~~~~~~~~~~~~~~~~~

**Problem**: Floating point rounding errors

**Solution**:

* Store as strings for exact preservation (if needed)
* Or accept IEEE 754 floating point precision
* Document precision in source

Large Files
~~~~~~~~~~~

**Problem**: File too large to load efficiently

**Solution**:

* Split by wavelength range
* Split by spectroscopic system
* Use pagination in search results

Missing Data
~~~~~~~~~~~~

**Problem**: Intensity or other fields unavailable

**Solution**:

* Use ``null`` for missing values
* Document which fields are incomplete
* Consider multiple data sources

Next Steps
----------

* Learn about :doc:`file-structure` organization
* Explore :doc:`algorithms` for data processing
* See :doc:`../development/adding-databases` for contribution guide

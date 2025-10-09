Adding Databases
================

This guide explains how to add new spectroscopic databases to MELT.

Overview
--------

Adding a new database involves:

1. Converting spectroscopic data to JSON format
2. Validating data structure
3. Adding files to the project
4. Updating loader code
5. Testing functionality
6. Documenting the source

Data Preparation
----------------

Source Data Formats
~~~~~~~~~~~~~~~~~~~

Spectroscopic data comes in various formats:

* **Published tables** (books, papers) - Requires manual entry or OCR
* **Digital databases** - May need format conversion
* **CSV/Excel files** - Can be programmatically converted
* **Text files** - Requires parsing

Recommended Workflow
~~~~~~~~~~~~~~~~~~~~

1. **Acquire data** from authoritative source
2. **Organize** into spreadsheet or CSV
3. **Convert** to JSON format
4. **Validate** against schema
5. **Add** to repository

JSON Format Requirements
------------------------

Required Structure
~~~~~~~~~~~~~~~~~~

Each molecule needs a separate JSON file:

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

**Required fields**:

* ``molecule`` - Chemical formula (string)
* ``system`` - Transition notation (string)
* ``wavelength_nm`` - Wavelength in nm (number)
* ``wavelength_angstrom`` - Wavelength in Å (number)
* ``upper_level`` - Upper state (string)
* ``lower_level`` - Lower state (string)
* ``source`` - Citation (string)
* ``page`` - Page number (integer or null)

**Optional fields**:

* ``intensity`` - Relative intensity (number or null)

For detailed specifications, see :doc:`../technical/data-format`.

Conversion Tools
----------------

From CSV to JSON
~~~~~~~~~~~~~~~~

Python script to convert CSV files:

.. code-block:: python

   import csv
   import json

   def csv_to_json(csv_file, json_file, molecule_name):
       """
       Convert CSV spectroscopic data to MELT JSON format.

       CSV should have columns:
       system, wavelength_nm, upper_level, lower_level,
       intensity, source, page
       """
       data = []

       with open(csv_file, 'r', encoding='utf-8') as f:
           reader = csv.DictReader(f)

           for row in reader:
               # Convert wavelength to Ångström
               wl_nm = float(row['wavelength_nm'])
               wl_a = wl_nm * 10

               # Handle optional intensity
               intensity = None
               if row.get('intensity') and row['intensity'].strip():
                   try:
                       intensity = float(row['intensity'])
                   except ValueError:
                       pass

               # Handle optional page
               page = None
               if row.get('page') and row['page'].strip():
                   try:
                       page = int(row['page'])
                   except ValueError:
                       pass

               entry = {
                   "molecule": molecule_name,
                   "system": row['system'],
                   "wavelength_nm": wl_nm,
                   "wavelength_angstrom": wl_a,
                   "upper_level": row['upper_level'],
                   "lower_level": row['lower_level'],
                   "intensity": intensity,
                   "source": row['source'],
                   "page": page
               }

               data.append(entry)

       # Write JSON
       with open(json_file, 'w', encoding='utf-8') as f:
           json.dump(data, f, indent=2, ensure_ascii=False)

       print(f"Converted {len(data)} lines to {json_file}")

   # Example usage
   csv_to_json('data/CO_lines.csv', 'CO.json', 'CO')

From Excel to JSON
~~~~~~~~~~~~~~~~~~

Using pandas:

.. code-block:: python

   import pandas as pd
   import json

   def excel_to_json(excel_file, json_file, molecule_name, sheet_name=0):
       # Read Excel
       df = pd.read_excel(excel_file, sheet_name=sheet_name)

       # Convert to records
       data = []
       for _, row in df.iterrows():
           entry = {
               "molecule": molecule_name,
               "system": row['system'],
               "wavelength_nm": float(row['wavelength_nm']),
               "wavelength_angstrom": float(row['wavelength_nm']) * 10,
               "upper_level": row['upper_level'],
               "lower_level": row['lower_level'],
               "intensity": float(row['intensity']) if pd.notna(row['intensity']) else None,
               "source": row['source'],
               "page": int(row['page']) if pd.notna(row['page']) else None
           }
           data.append(entry)

       # Write JSON
       with open(json_file, 'w', encoding='utf-8') as f:
           json.dump(data, f, indent=2, ensure_ascii=False)

   # Usage
   excel_to_json('data/CO_lines.xlsx', 'CO.json', 'CO')

Manual Entry Template
~~~~~~~~~~~~~~~~~~~~~

For small datasets, manual JSON entry:

.. code-block:: json

   [
     {
       "molecule": "MOLECULE_NAME",
       "system": "TRANSITION_NOTATION",
       "wavelength_nm": 0.0,
       "wavelength_angstrom": 0.0,
       "upper_level": "UPPER_STATE",
       "lower_level": "LOWER_STATE",
       "intensity": null,
       "source": "CITATION",
       "page": null
     }
   ]

Copy and modify for each emission line.

Data Validation
---------------

JSON Syntax Validation
~~~~~~~~~~~~~~~~~~~~~~

Use online validators or command-line tools:

.. code-block:: bash

   # Using Python
   python -m json.tool CO.json > /dev/null && echo "Valid JSON"

   # Using jq (if installed)
   jq empty CO.json && echo "Valid JSON"

Schema Validation
~~~~~~~~~~~~~~~~~

Python script with jsonschema:

.. code-block:: python

   import json
   from jsonschema import validate, ValidationError

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
               "molecule": {"type": "string", "minLength": 1},
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

   def validate_json_file(filename):
       with open(filename, 'r', encoding='utf-8') as f:
           data = json.load(f)

       try:
           validate(instance=data, schema=schema)
           print(f"✓ {filename} is valid")
           return True
       except ValidationError as e:
           print(f"✗ {filename} validation error:")
           print(e.message)
           return False

   # Validate all JSON files
   import glob
   for file in glob.glob('*.json'):
       validate_json_file(file)

Physical Consistency Checks
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: python

   import json

   def check_consistency(filename):
       with open(filename, 'r') as f:
           data = json.load(f)

       issues = []

       for i, entry in enumerate(data):
           # Check wavelength conversion
           expected_angstrom = entry['wavelength_nm'] * 10
           actual_angstrom = entry['wavelength_angstrom']

           if abs(expected_angstrom - actual_angstrom) > 0.01:
               issues.append(f"Line {i}: Wavelength mismatch")

           # Check reasonable wavelength range (100-10000 nm)
           if not (100 <= entry['wavelength_nm'] <= 10000):
               issues.append(f"Line {i}: Wavelength out of range")

           # Check molecule format
           if not entry['molecule'].replace('+', '').replace('-', '').isalnum():
               issues.append(f"Line {i}: Invalid molecule format")

       if issues:
           print(f"Issues in {filename}:")
           for issue in issues:
               print(f"  - {issue}")
       else:
           print(f"✓ {filename} passed consistency checks")

       return len(issues) == 0

Adding to Project
-----------------

File Organization
~~~~~~~~~~~~~~~~~

Create database directory:

.. code-block:: bash

   mkdir -p assets/data/YourDatabaseName

Add JSON files:

.. code-block:: bash

   cp molecule1.json assets/data/YourDatabaseName/
   cp molecule2.json assets/data/YourDatabaseName/

File naming:

* Use molecule formula: ``CO.json``, ``OH.json``
* Match capitalization in data
* No spaces in filenames

Updating Loader Code
~~~~~~~~~~~~~~~~~~~~

Edit ``assets/js/molecular-lines.js``:

**Find the data loading section**:

.. code-block:: javascript

   async function loadDatabase() {
     const files = [
       'assets/data/Pearse&Gaydon/CO.json',
       'assets/data/Pearse&Gaydon/CN.json',
       // ... existing files
     ];

**Add your new files**:

.. code-block:: javascript

   async function loadDatabase() {
     const files = [
       // Existing files
       'assets/data/Pearse&Gaydon/CO.json',
       'assets/data/Pearse&Gaydon/CN.json',
       // ... more existing files

       // Your new database
       'assets/data/YourDatabaseName/CO.json',
       'assets/data/YourDatabaseName/OH.json',
       // ... your files
     ];

Alternatively, use automatic file discovery (future enhancement):

.. code-block:: javascript

   // Automatically load all JSON files from directory
   const databases = ['Pearse&Gaydon', 'YourDatabaseName'];
   const molecules = ['CO', 'CN', 'OH', /* ... */];

   const files = databases.flatMap(db =>
     molecules.map(mol => `assets/data/${db}/${mol}.json`)
   );

Testing
-------

Local Testing
~~~~~~~~~~~~~

1. **Start development server**:

   .. code-block:: bash

      bundle exec jekyll serve -l

2. **Access MELT**: http://localhost:4000/MELT/

3. **Test search**:

   * Search for wavelength range covering your new data
   * Verify results appear
   * Check all fields display correctly

4. **Test spectrum generation**:

   * Select some lines
   * Generate spectrum
   * Verify peaks appear at correct wavelengths

5. **Test export**:

   * Download CSV/TXT
   * Open and verify formatting
   * Check all data fields present

Browser Console Testing
~~~~~~~~~~~~~~~~~~~~~~~

Open browser DevTools (F12):

**Check for errors**:

.. code-block:: javascript

   // Should show no errors
   console

**Verify data loading**:

.. code-block:: javascript

   // Network tab should show all JSON files loaded successfully

**Manual data inspection**:

.. code-block:: javascript

   // In console, after search:
   console.log(allLines); // Should include your data

Unit Testing (Optional)
~~~~~~~~~~~~~~~~~~~~~~~~

Create test file ``test-data.html``:

.. code-block:: html

   <!DOCTYPE html>
   <html>
   <head>
     <title>Data Test</title>
   </head>
   <body>
     <h1>Database Test</h1>
     <div id="results"></div>

     <script>
       async function testDatabase() {
         const files = ['assets/data/YourDatabaseName/CO.json'];

         for (const file of files) {
           const response = await fetch(file);
           const data = await response.json();

           console.log(`${file}: ${data.length} lines`);

           // Validate each entry
           data.forEach((entry, i) => {
             if (!entry.molecule) console.error(`Line ${i}: missing molecule`);
             if (!entry.wavelength_nm) console.error(`Line ${i}: missing wavelength`);
             // ... more checks
           });
         }

         document.getElementById('results').textContent = 'Check console for results';
       }

       testDatabase();
     </script>
   </body>
   </html>

Documentation
-------------

Update README
~~~~~~~~~~~~~

Edit ``README.md`` to mention new database:

.. code-block:: markdown

   ## Data Sources

   - Pearse & Gaydon (1976) - UV to NIR molecular spectra
   - [Your Database Name] - [Description]

Create Attribution File
~~~~~~~~~~~~~~~~~~~~~~~

Create ``assets/data/YourDatabaseName/README.md``:

.. code-block:: markdown

   # [Database Name] Data

   ## Source

   [Full citation]

   ## Coverage

   - Wavelength range: [range] nm
   - Molecules: [list]
   - Number of lines: [count]

   ## License

   [Data license information]

   ## Processing Notes

   - Conversion method: [how data was converted]
   - Date added: [date]
   - Contributor: [name]

Update Documentation Site
~~~~~~~~~~~~~~~~~~~~~~~~~~

If maintaining documentation:

* Add entry to data sources page
* Update statistics
* Add examples using new data

Best Practices
--------------

Data Quality
~~~~~~~~~~~~

* **Accuracy**: Double-check wavelength values
* **Precision**: Preserve significant figures from source
* **Completeness**: Fill all required fields
* **Attribution**: Cite sources accurately

Organization
~~~~~~~~~~~~

* One file per molecule
* Consistent naming
* Logical directory structure
* UTF-8 encoding

Version Control
~~~~~~~~~~~~~~~

* Commit data separately from code
* Descriptive commit messages
* Document sources in commits

Example commit message:

.. code-block:: text

   Add NIST ASD data for CO molecule

   - Converted NIST Atomic Spectra Database data to JSON
   - Added 234 emission lines for CO
   - Wavelength range: 200-2000 nm
   - Source: NIST ASD, accessed 2025-01-15

Common Issues
-------------

Unicode Characters
~~~~~~~~~~~~~~~~~~

**Problem**: Special characters not displaying

**Solution**:

* Ensure UTF-8 encoding
* Save with ``ensure_ascii=False`` in Python
* Test in browser

Large Files
~~~~~~~~~~~

**Problem**: File too large (>1 MB)

**Solution**:

* Split by wavelength range
* Split by spectroscopic system
* Compress if needed (but keep JSON readable)

Duplicate Lines
~~~~~~~~~~~~~~~

**Problem**: Same line appears multiple times

**Solution**:

.. code-block:: python

   import json

   def remove_duplicates(filename):
       with open(filename, 'r') as f:
           data = json.load(f)

       # Create set of unique lines (by wavelength)
       unique = {entry['wavelength_nm']: entry for entry in data}

       # Convert back to list
       cleaned = list(unique.values())

       with open(filename, 'w') as f:
           json.dump(cleaned, f, indent=2, ensure_ascii=False)

Contributing
------------

For external contributors:

1. **Fork** repository
2. **Create branch**: ``git checkout -b add-database-name``
3. **Add data** following this guide
4. **Test thoroughly**
5. **Commit with good messages**
6. **Push**: ``git push origin add-database-name``
7. **Create Pull Request** on GitHub

Include in PR description:

* Database source and citation
* Number of lines added
* Molecules covered
* Wavelength range
* Any limitations or notes

Next Steps
----------

* Review :doc:`contributing` guidelines
* See :doc:`../technical/data-format` for detailed specifications
* Learn :doc:`setup` for development environment

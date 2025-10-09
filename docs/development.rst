Development
===========

This page explains how to contribute to MELT or run it locally.

Local Development
-----------------

Prerequisites
~~~~~~~~~~~~~

For local Jekyll development:

* Ruby 2.5+ and ruby-dev
* Node.js 12+
* Bundler gem

Installation
~~~~~~~~~~~~

**Linux/WSL**:

.. code-block:: bash

   sudo apt install ruby-dev ruby-bundler nodejs

**macOS**:

.. code-block:: bash

   brew install ruby node
   gem install bundler

Setup
~~~~~

.. code-block:: bash

   # Clone repository
   git clone https://github.com/Copland-yz/MELT.git
   cd MELT

   # Install dependencies locally
   bundle config set --local path 'vendor/bundle'
   bundle install

   # Run development server
   bundle exec jekyll serve -l

Visit http://localhost:4000/MELT/

The ``-l`` flag enables live reload - changes auto-refresh in browser.

Contributing
------------

Ways to Contribute
~~~~~~~~~~~~~~~~~~

* **Add spectroscopic databases** - New emission line data
* **Report bugs** - Issues or unexpected behavior
* **Improve documentation** - Clarifications or corrections
* **Suggest features** - New functionality ideas

Workflow
~~~~~~~~

1. **Fork** the repository on GitHub
2. **Clone** your fork locally
3. **Create branch**: ``git checkout -b feature-name``
4. **Make changes** and test
5. **Commit**: ``git commit -m "Description"``
6. **Push**: ``git push origin feature-name``
7. **Create Pull Request** on GitHub

Adding New Data
---------------

Data Format
~~~~~~~~~~~

Create JSON file for each molecule:

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

**Required fields**: molecule, system, wavelength_nm, wavelength_angstrom, upper_level, lower_level, source, page

**Optional fields**: intensity

Conversion Script
~~~~~~~~~~~~~~~~~

Python script to convert CSV to JSON:

.. code-block:: python

   import csv
   import json

   def csv_to_json(csv_file, json_file, molecule):
       data = []
       with open(csv_file, 'r') as f:
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

       with open(json_file, 'w') as f:
           json.dump(data, f, indent=2, ensure_ascii=False)

   # Usage
   csv_to_json('CO_data.csv', 'CO.json', 'CO')

Adding to MELT
~~~~~~~~~~~~~~

1. Place JSON file in ``assets/data/YourDatabase/``
2. Edit ``assets/js/molecular-lines.js``
3. Add file path to loading array:

.. code-block:: javascript

   const files = [
     'assets/data/Pearse&Gaydon/CO.json',
     // ... existing files
     'assets/data/YourDatabase/CO.json',  // Add here
   ];

4. Test locally
5. Submit pull request

Code Style
----------

JavaScript
~~~~~~~~~~

* 2-space indentation
* Semicolons required
* Descriptive variable names
* Comments for complex logic

JSON Data
~~~~~~~~~

* 2-space indentation
* UTF-8 encoding
* Validate syntax before committing

Commit Messages
~~~~~~~~~~~~~~~

.. code-block:: text

   Short summary (50 chars max)

   Optional detailed explanation.
   - Use bullet points if needed
   - Explain what and why, not how

Good examples:

* "Add OH molecule data from NIST database"
* "Fix spectrum generation for missing intensity values"
* "Update README with new citation format"

Testing
-------

Before submitting changes:

1. **Build locally** - Verify no errors
2. **Test search** - Search for wavelength range with new data
3. **Test spectrum** - Generate spectrum from new lines
4. **Test export** - Download CSV/TXT/PNG
5. **Validate JSON** - Use ``python -m json.tool file.json``

Documentation
-------------

Building Docs
~~~~~~~~~~~~~

.. code-block:: bash

   cd docs
   pip install -r ../docs-requirements.txt
   make html

View at ``docs/_build/html/index.html``

Updating Docs
~~~~~~~~~~~~~

Documentation uses reStructuredText (.rst) format. Edit files in ``docs/`` directory and build locally to preview.

Support
-------

* **GitHub Issues**: https://github.com/Copland-yz/MELT/issues
* **Email**: chengzheng@wustl.edu

License
-------

MELT is released under the MIT License. Contributions are welcome!

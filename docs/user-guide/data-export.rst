Data Export
===========

This guide covers exporting search results and generated spectra from MELT.

Export Formats
--------------

MELT provides three export formats:

1. **TXT** - Plain text, tab-separated
2. **CSV** - Comma-separated values
3. **PNG** - Spectrum image

Each format serves different purposes and is compatible with different tools.

Exporting Search Results
-------------------------

TXT Format
~~~~~~~~~~

**Description**:

* Plain text file
* Tab-separated columns
* Header row included
* UTF-8 encoding

**File Structure**:

.. code-block:: text

   Molecule    System    Wavelength(nm)    Wavelength(A)    Upper_Level    Lower_Level    Intensity    Source    Page
   CO    d³Δ–a³Π    646.46    6464.6    d³Δ    a³Π        Pearse & Gaydon (1976) p.111    111
   CO    d³Δ–a³Π    644.39    6443.9    d³Δ    a³Π        Pearse & Gaydon (1976) p.111    111

**Best For**:

* Import into analysis software (Python, R, MATLAB)
* Quick viewing in text editors
* Version control systems
* Simple data processing scripts

**How to Export**:

1. Perform search and select desired lines
2. Click "Download TXT" button
3. File saves as ``molecular_lines.txt``

**Reading in Python**:

.. code-block:: python

   import pandas as pd

   # Read tab-separated file
   data = pd.read_csv('molecular_lines.txt', sep='\t')
   print(data.head())

**Reading in R**:

.. code-block:: r

   # Read tab-separated file
   data <- read.delim('molecular_lines.txt')
   head(data)

CSV Format
~~~~~~~~~~

**Description**:

* Comma-separated values
* Header row included
* UTF-8 encoding
* RFC 4180 compliant

**File Structure**:

.. code-block:: text

   Molecule,System,Wavelength(nm),Wavelength(A),Upper_Level,Lower_Level,Intensity,Source,Page
   CO,"d³Δ–a³Π",646.46,6464.6,d³Δ,a³Π,,Pearse & Gaydon (1976) p.111,111
   CO,"d³Δ–a³Π",644.39,6443.9,d³Δ,a³Π,,Pearse & Gaydon (1976) p.111,111

**Best For**:

* Excel and Google Sheets
* Database imports
* Universal data interchange
* Automated processing pipelines

**How to Export**:

1. Perform search and select desired lines
2. Click "Download CSV" button
3. File saves as ``molecular_lines.csv``

**Opening in Excel**:

1. Open Excel
2. File → Open → Select CSV file
3. Data imports automatically with columns

**Opening in Google Sheets**:

1. Open Google Sheets
2. File → Import → Upload → Select CSV file
3. Import settings should auto-detect

Column Descriptions
~~~~~~~~~~~~~~~~~~~

+------------------+----------------------------------------+-------------+
| Column           | Description                            | Data Type   |
+==================+========================================+=============+
| Molecule         | Chemical formula                       | String      |
| System           | Spectroscopic transition               | String      |
| Wavelength(nm)   | Wavelength in nanometers               | Float       |
| Wavelength(A)    | Wavelength in Ångström                 | Float       |
| Upper_Level      | Upper energy level                     | String      |
| Lower_Level      | Lower energy level                     | String      |
| Intensity        | Relative intensity (if available)      | Float/Null  |
| Source           | Literature reference                   | String      |
| Page             | Page number in source                  | Integer     |
+------------------+----------------------------------------+-------------+

**Notes**:

* Empty intensity values appear as blank or "null"
* Spectroscopic notation includes special characters
* Wavelength values are from original database

Exporting Spectra
-----------------

PNG Image Format
~~~~~~~~~~~~~~~~

**Description**:

* Raster image format
* Default resolution: 96 DPI
* Transparent or white background
* Includes axis labels and tick marks

**How to Export**:

1. Generate spectrum using "Generate Spectrum" button
2. Click "Download PNG" button
3. File saves as ``spectrum.png``

**Image Specifications**:

* **Width**: Matches plot display width (typically ~800-1000 px)
* **Height**: Matches plot display height (typically ~400-600 px)
* **Format**: PNG (lossless compression)
* **Color depth**: 24-bit RGB
* **DPI**: Suitable for digital display

**Best For**:

* Presentations and talks
* Reports and documentation
* Quick visual sharing
* Digital archives

Image Quality
~~~~~~~~~~~~~

The exported PNG is generated from the canvas element:

* **Advantages**: What you see is what you get
* **Limitations**: Resolution limited by display size

**For publications**:

* Maximize browser window before generating spectrum
* Use high-resolution display if available
* Consider regenerating at larger size
* For vector graphics, screenshot and trace in Illustrator/Inkscape

**For presentations**:

* Default resolution is usually sufficient
* Resize in PowerPoint/Keynote as needed
* Avoid excessive upscaling (may appear pixelated)

Editing Exported Images
~~~~~~~~~~~~~~~~~~~~~~~

The PNG can be edited with image software:

**Add annotations**:

* Use PowerPoint, Keynote, or Google Slides
* Add text boxes, arrows, highlighting
* Layer on top of spectrum image

**Adjust appearance**:

* Image editors: Photoshop, GIMP, Pixlr
* Crop, resize, adjust contrast
* Add labels or legends

**Convert to vector**:

* Trace in Illustrator or Inkscape
* For publication-quality figures
* Allows infinite scaling

Data Processing Workflows
--------------------------

Workflow 1: Spectral Analysis in Python
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: python

   import pandas as pd
   import matplotlib.pyplot as plt
   import numpy as np

   # Import search results
   lines = pd.read_csv('molecular_lines.csv')

   # Filter by molecule
   co_lines = lines[lines['Molecule'] == 'CO']

   # Extract wavelengths
   wavelengths = co_lines['Wavelength(nm)'].values

   # Generate Gaussian spectrum
   x = np.linspace(wavelengths.min()-10, wavelengths.max()+10, 1000)
   y = np.zeros_like(x)
   fwhm = 0.1  # nm
   sigma = fwhm / 2.355

   for wl in wavelengths:
       y += np.exp(-(x - wl)**2 / (2 * sigma**2))

   # Plot
   plt.plot(x, y)
   plt.xlabel('Wavelength (nm)')
   plt.ylabel('Intensity (arb. units)')
   plt.title('CO Emission Spectrum')
   plt.show()

Workflow 2: Statistical Analysis in R
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: r

   library(tidyverse)

   # Load data
   lines <- read_csv('molecular_lines.csv')

   # Analyze wavelength distribution
   summary(lines$`Wavelength(nm)`)

   # Count lines by molecule
   molecule_counts <- lines %>%
     group_by(Molecule) %>%
     summarize(count = n()) %>%
     arrange(desc(count))

   # Plot histogram
   ggplot(lines, aes(x = `Wavelength(nm)`)) +
     geom_histogram(bins = 50) +
     labs(title = "Distribution of Emission Lines",
          x = "Wavelength (nm)",
          y = "Count")

Workflow 3: Database Import
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Import to SQLite**:

.. code-block:: python

   import pandas as pd
   import sqlite3

   # Read CSV
   df = pd.read_csv('molecular_lines.csv')

   # Create database connection
   conn = sqlite3.connect('emission_lines.db')

   # Import to table
   df.to_sql('lines', conn, if_exists='replace', index=False)

   # Query example
   query = "SELECT * FROM lines WHERE Molecule = 'CO' AND `Wavelength(nm)` BETWEEN 500 AND 600"
   result = pd.read_sql_query(query, conn)

   conn.close()

**Import to PostgreSQL**:

.. code-block:: python

   from sqlalchemy import create_engine
   import pandas as pd

   # Read CSV
   df = pd.read_csv('molecular_lines.csv')

   # Create database connection
   engine = create_engine('postgresql://user:password@localhost/spectra')

   # Import to table
   df.to_sql('emission_lines', engine, if_exists='replace', index=False)

Workflow 4: Excel Analysis
~~~~~~~~~~~~~~~~~~~~~~~~~~~

After opening CSV in Excel:

**Basic Statistics**:

1. Select wavelength column
2. Use ``=AVERAGE()``, ``=MIN()``, ``=MAX()`` functions
3. Create pivot tables for molecule counts

**Filtering**:

1. Select header row
2. Data → Filter
3. Use dropdown to filter by molecule, wavelength range

**Plotting**:

1. Select wavelength and intensity columns
2. Insert → Scatter plot
3. Customize axes and labels

Best Practices
--------------

File Naming
~~~~~~~~~~~

Use descriptive filenames:

**Good examples**:

* ``CO_swan_bands_500-520nm_2025-10-08.csv``
* ``OH_A-X_system_high_res.txt``
* ``survey_UV_200-400nm.csv``

**Include**:

* Molecule or system name
* Wavelength range
* Date
* Resolution or FWHM (for spectra)

**Avoid**:

* Generic names (``data.csv``, ``spectrum.png``)
* Special characters that may cause issues
* Spaces (use underscores or hyphens)

Data Management
~~~~~~~~~~~~~~~

**Organization**:

* Create project-specific folders
* Separate raw exports from processed data
* Keep README with export parameters

**Documentation**:

* Record search parameters used
* Note FWHM values for generated spectra
* Document any data processing steps

**Version Control**:

* Date exported files
* Keep multiple exports if parameters change
* Track which export corresponds to which analysis

**Archival**:

* Store in multiple locations (backup)
* Use open formats (CSV, TXT, PNG)
* Include metadata files describing contents

Metadata Recording
~~~~~~~~~~~~~~~~~~

Create a companion metadata file:

**Example** ``metadata.txt``:

.. code-block:: text

   Export Date: 2025-10-08
   MELT Version: 1.0
   Search Parameters:
     - Elements: C, O (included)
     - Wavelength Range: 500-520 nm
     - Total Results: 45 lines
     - Selected Lines: 23 lines
   Spectrum Parameters:
     - FWHM: 0.3 nm
     - Units: nm
   Source Database: Pearse & Gaydon (1976)
   Notes: High-intensity lines only selected

Citation and Attribution
~~~~~~~~~~~~~~~~~~~~~~~~~

When using exported data in publications:

**Cite MELT**:

.. code-block:: bibtex

   @software{yong2025,
     author = {Yong, Chengzheng},
     title = {Molecular Emission Line Tool},
     url = {https://github.com/Copland-yz/MELT},
     year = {2025}
   }

**Cite Data Sources**:

Check the "Source" column in exported data and cite original references (e.g., Pearse & Gaydon, 1976).

Troubleshooting
---------------

Export Not Working
~~~~~~~~~~~~~~~~~~

**Possible causes**:

* Pop-up blocker preventing download
* Browser security settings
* No lines selected

**Solutions**:

* Allow pop-ups for the MELT site
* Check browser download settings
* Ensure at least one line is selected
* Try different browser (Chrome recommended)

File Won't Open
~~~~~~~~~~~~~~~

**Excel CSV issues**:

* Some locales use semicolons instead of commas
* Excel may not auto-detect UTF-8

**Solutions**:

* Use "Import Data" instead of "Open"
* Specify delimiter manually
* Save as Excel format after import

**Encoding issues**:

* Special characters appear garbled

**Solutions**:

* Ensure software supports UTF-8
* Use modern text editor (VS Code, Sublime)
* Convert encoding if necessary

Empty or Incomplete Export
~~~~~~~~~~~~~~~~~~~~~~~~~~

**Causes**:

* No lines were selected
* JavaScript errors in browser
* Incomplete data loading

**Solutions**:

* Verify line selection checkboxes
* Check browser console for errors
* Refresh page and try again
* Clear browser cache

Image Quality Issues
~~~~~~~~~~~~~~~~~~~~

**Low resolution**:

* Maximize browser window before export
* Use high-DPI display if available
* For publications, consider vector tracing

**Cut-off labels**:

* Resize plot area before exporting
* Adjust browser zoom level
* Capture larger canvas area

Next Steps
----------

* See :doc:`../technical/data-format` for detailed field specifications
* Learn about :doc:`../development/adding-databases` to expand available data
* Explore :doc:`../reference/api` for programmatic access (future feature)

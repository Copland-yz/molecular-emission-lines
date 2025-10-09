Interface Overview
==================

This page provides a detailed overview of MELT's user interface and its components.

Main Interface Layout
---------------------

The MELT interface consists of four main sections:

1. **Search Controls** - Periodic table and range inputs
2. **Results Table** - Display of matching emission lines
3. **Spectrum Generator** - Interactive visualization tools
4. **Export Options** - Data download controls

Search Controls Section
-----------------------

Periodic Table
~~~~~~~~~~~~~~

The interactive periodic table allows you to filter emission lines by molecular composition.

**Element States**:

* **Default (gray)**: Element is not filtered
* **Included (green)**: Only molecules containing this element will be shown
* **Excluded (red)**: Molecules containing this element will be hidden

**Interaction**:

* **First click**: Include element (turns green)
* **Second click**: Exclude element (turns red)
* **Third click**: Reset to default (turns gray)

**Example**: To find only CO molecules, include both C and O. To find all molecules except those with nitrogen, exclude N.

Range Parameters
~~~~~~~~~~~~~~~~

The range input allows you to specify the wavelength/frequency range for your search.

**Available Units**:

* **nm** (nanometers): 1 nm = 10⁻⁹ m (default)
* **Å** (Ångström): 1 Å = 0.1 nm = 10⁻¹⁰ m
* **μm** (micrometers): 1 μm = 1000 nm = 10⁻⁶ m
* **GHz** (gigahertz): Frequency in billions of cycles per second
* **cm⁻¹** (wavenumber): Number of wavelengths per centimeter

**Input Fields**:

* **Min**: Lower bound of the range
* **Max**: Upper bound of the range
* **Unit selector**: Dropdown to choose units

**Tips**:

* Wavelength units (nm, Å, μm) convert automatically between each other
* Frequency (GHz) and wavenumber (cm⁻¹) use inverse relationships
* Smaller ranges (<100 nm) provide faster search results

Search Button
~~~~~~~~~~~~~

* Click to execute the search with current parameters
* Results appear in the table below
* Previous results are cleared when a new search is performed

Results Table Section
---------------------

The results table displays all emission lines matching your search criteria.

Table Columns
~~~~~~~~~~~~~

+------------------+------------------------------------------------+
| Column           | Description                                    |
+==================+================================================+
| **Select**       | Checkbox to include line in spectrum          |
| **Molecule**     | Molecular formula (e.g., CO, H₂, OH)          |
| **System**       | Spectroscopic system/transition               |
| **λ (nm)**       | Wavelength in nanometers                       |
| **λ (Å)**        | Wavelength in Ångström                         |
| **Upper Level**  | Upper energy level notation                    |
| **Lower Level**  | Lower energy level notation                    |
| **Intensity**    | Relative intensity (if available)              |
| **Source**       | Reference to spectroscopic database            |
| **Page**         | Page number in source reference                |
+------------------+------------------------------------------------+

Table Features
~~~~~~~~~~~~~~

* **Sortable columns**: Click column headers to sort
* **Selection checkboxes**: Select individual lines for spectrum generation
* **Select all button**: Quickly select/deselect all visible results
* **Scrollable**: Table scrolls for large result sets

Interpreting Results
~~~~~~~~~~~~~~~~~~~~

**Molecule Column**

Shows the chemical formula with proper subscripts (H₂, CO₂, etc.). This indicates which elements are present in the molecule.

**System Column**

Describes the electronic transition using spectroscopic notation. For example:

* "d³Δ–a³Π" indicates a transition between two triplet states
* "A¹Π–X¹Σ" indicates a singlet Pi to singlet Sigma transition

**Energy Levels**

The upper and lower level columns show the electronic states involved in the transition using standard spectroscopic term symbols.

**Intensity**

When available, shows relative intensity. Higher values indicate stronger lines. Note that not all databases include intensity information (shown as "null" or "-").

Spectrum Generator Section
--------------------------

This section allows you to create synthetic spectra from selected emission lines.

Peak Width Control
~~~~~~~~~~~~~~~~~~

**Parameter**: FWHM (Full Width at Half Maximum)

* Controls the width of spectral peaks in the generated spectrum
* Simulates instrumental broadening and resolution
* **Units**: Same as your selected wavelength unit (nm, Å, etc.)
* **Typical values**:

  * High resolution: 0.01 - 0.1 nm
  * Medium resolution: 0.1 - 1 nm
  * Low resolution: 1 - 10 nm

**Tips**:

* Match this to your actual spectrometer's resolution
* Smaller FWHM shows sharper, more separated peaks
* Larger FWHM creates smoother, broader peaks

Generate Button
~~~~~~~~~~~~~~~

* Click to create spectrum from selected lines
* Must have at least one line selected
* Spectrum appears as an interactive plot below the button

Spectrum Plot
~~~~~~~~~~~~~

The generated spectrum plot includes:

* **X-axis**: Wavelength in your selected units
* **Y-axis**: Arbitrary intensity units
* **Interactive features**:

  * Hover to see values
  * Zoom by clicking and dragging
  * Pan by holding shift while dragging
  * Reset zoom with double-click

Export Options Section
----------------------

Data Export Formats
~~~~~~~~~~~~~~~~~~~

**Download TXT**

* Plain text format
* Tab-separated values
* Includes all table columns
* Easy to import into analysis software

**Download CSV**

* Comma-separated values
* Compatible with Excel, Google Sheets
* Includes headers
* Standard format for data processing

**Download Spectrum (PNG)**

* High-resolution image
* Suitable for publications
* Includes axis labels
* Transparent or white background

Keyboard Shortcuts
------------------

While not officially implemented, some browsers provide:

* **Ctrl/Cmd + F**: Find in results table
* **Tab**: Navigate between input fields
* **Enter**: Execute search (when focused on range inputs)

Mobile Interface
----------------

MELT is responsive and works on mobile devices:

* Periodic table adapts to smaller screens
* Tables become scrollable horizontally
* Touch interactions work for element selection
* Pinch to zoom on spectrum plots

Accessibility Features
----------------------

* High contrast color scheme for element states
* Keyboard navigation support
* Screen reader compatible table structure
* Clear visual feedback for all interactions

Next Steps
----------

* Learn advanced :doc:`searching-lines` techniques
* Explore :doc:`spectrum-generation` in detail
* Understand :doc:`data-export` options and formats

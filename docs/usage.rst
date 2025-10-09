Usage Guide
===========

This guide explains how to use MELT to search and visualize molecular emission lines.

Accessing MELT
--------------

Visit the live tool at https://copland-yz.github.io/MELT/

Works in any modern web browser (Chrome, Firefox, Safari, Edge). No installation required.

Basic Workflow
--------------

1. Filter by Elements
~~~~~~~~~~~~~~~~~~~~~

Click elements in the periodic table:

* **First click** (green) - Include this element
* **Second click** (red) - Exclude this element
* **Third click** (gray) - Reset to neutral

**Example**: To find CO molecules, click C and O once each.

2. Set Wavelength Range
~~~~~~~~~~~~~~~~~~~~~~~

Enter minimum and maximum values, then select your unit:

* **nm** (nanometers) - Most common
* **Å** (Ångström) - Traditional spectroscopy
* **μm** (micrometers) - Infrared
* **GHz** (gigahertz) - Radio/microwave
* **cm⁻¹** (wavenumber) - IR spectroscopy

**Tip**: Start with small ranges (<100 nm) for faster searches.

3. Search
~~~~~~~~~

Click the "Search" button. Results appear in the table below showing:

* Molecule formula
* Spectroscopic system
* Wavelength (nm and Å)
* Energy levels
* Intensity (when available)
* Source reference

4. Generate Spectrum
~~~~~~~~~~~~~~~~~~~~

To create a synthetic spectrum:

1. Check boxes next to lines you want
2. Set the **Peak Width (FWHM)** to match your instrument resolution
3. Click "Generate Spectrum"
4. Use mouse to zoom/pan the plot

The FWHM (Full Width at Half Maximum) controls peak broadening:

* High resolution: 0.01-0.1 nm
* Medium resolution: 0.1-1 nm
* Low resolution: 1-10 nm

5. Export Data
~~~~~~~~~~~~~~

Download your results:

* **TXT** - Tab-separated text
* **CSV** - For Excel/Sheets
* **PNG** - Spectrum image

Use Cases
---------

LIBS Research
~~~~~~~~~~~~~

Laser Induced Breakdown Spectroscopy applications:

1. Search for expected element emission lines
2. Set wavelength range to your detector
3. Generate spectrum with your instrument resolution
4. Compare with experimental data

Wavelength Calibration
~~~~~~~~~~~~~~~~~~~~~~

Find reference lines:

1. Search broad wavelength range
2. Select strong, well-known lines
3. Export line positions for calibration software

Plasma Diagnostics
~~~~~~~~~~~~~~~~~~

Identify unknown lines in plasma spectra:

1. Enter wavelength of unknown line
2. Filter by expected elements
3. Match with database lines

Troubleshooting
---------------

No Results Found
~~~~~~~~~~~~~~~~

* Try wider wavelength range
* Remove element filters (reset to gray)
* Check units are correct

Too Many Results
~~~~~~~~~~~~~~~~

* Narrow wavelength range
* Add element filters
* Focus on specific molecules

Spectrum Not Generating
~~~~~~~~~~~~~~~~~~~~~~~~

* Make sure at least one line is selected
* Check FWHM value is reasonable
* Refresh page if needed

Tips
----

* **Small ranges** (<100 nm) search faster
* **Element filters** dramatically speed up searches
* **FWHM** should match your spectrometer resolution
* **Save exports** with descriptive filenames
* **Browser zoom** (Ctrl +/-) adjusts interface size

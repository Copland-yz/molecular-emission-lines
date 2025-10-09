Getting Started
===============

Welcome to MELT! This guide will help you start using the Molecular Emission Line Tool effectively.

Accessing MELT
--------------

MELT is a web-based application that runs directly in your browser. No installation is required.

**Live Tool**: https://copland-yz.github.io/MELT/

System Requirements
-------------------

MELT works in any modern web browser:

* **Chrome** (recommended) - version 90+
* **Firefox** - version 88+
* **Safari** - version 14+
* **Edge** - version 90+

No special plugins or extensions are required.

Basic Workflow
--------------

The typical workflow for using MELT consists of five simple steps:

1. **Search for Lines**

   Use element filters and data range parameters to find relevant emission lines. For best performance, use a small wavelength range (<100 nm).

2. **Select Lines**

   Check the boxes next to lines of interest in the results table.

3. **Adjust Parameters**

   Set the peak width (FWHM) to simulate instrumental resolution effects.

4. **Generate Spectrum**

   Click "Generate Spectrum" to create an interactive visualization.

5. **Export Data**

   Download the spectrum as PNG or export selected lines as TXT/CSV.

Quick Example: Finding CO Lines
--------------------------------

Let's walk through a simple example to find carbon monoxide (CO) emission lines around 650 nm:

Step 1: Select Elements
~~~~~~~~~~~~~~~~~~~~~~~

* Click on **C** (Carbon) in the periodic table once - it should highlight
* Click on **O** (Oxygen) in the periodic table once - it should highlight

Step 2: Set Wavelength Range
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* In the range inputs, select **nm** (nanometers) as the unit
* Enter **640** as the minimum value
* Enter **660** as the maximum value

Step 3: Search
~~~~~~~~~~~~~~

* Click the **Search** button
* Results will appear in the table below

Step 4: Select Lines
~~~~~~~~~~~~~~~~~~~~~

* Check the boxes for the lines you want to include in your spectrum
* You can select all lines or just specific ones

Step 5: Generate Spectrum
~~~~~~~~~~~~~~~~~~~~~~~~~~

* Scroll down to the spectrum generation section
* Adjust the **Peak Width (FWHM)** if desired (default is usually good)
* Click **Generate Spectrum**
* An interactive plot will appear

Step 6: Export (Optional)
~~~~~~~~~~~~~~~~~~~~~~~~~~

* Click **Download PNG** to save the spectrum as an image
* Click **Download TXT** or **Download CSV** to export the selected lines data

Tips for New Users
-------------------

Element Selection
~~~~~~~~~~~~~~~~~

* **Single click** on an element to include it in your search (highlighted in green)
* **Double click** to exclude it from results (highlighted in red)
* **Triple click** to deselect it (returns to default color)

Wavelength Ranges
~~~~~~~~~~~~~~~~~

* Start with **small ranges** (<100 nm) for faster searches
* Use different units as convenient:

  * **nm** (nanometers) - common for UV-Visible-NIR
  * **Å** (Ångström) - traditional spectroscopy unit
  * **μm** (micrometers) - for infrared
  * **GHz** (gigahertz) - for radio/microwave
  * **cm⁻¹** (wavenumber) - for IR spectroscopy

Performance Tips
~~~~~~~~~~~~~~~~

* **Narrow your search**: Smaller wavelength ranges return results faster
* **Select elements**: Filtering by elements dramatically reduces search time
* **Browser choice**: Chrome typically provides the best performance

Common Use Cases
----------------

LIBS Research
~~~~~~~~~~~~~

If you're doing Laser Induced Breakdown Spectroscopy (LIBS):

1. Identify the elements you expect in your sample
2. Search for their emission lines in your detector's wavelength range
3. Generate spectra to compare with your experimental data
4. Use the peak width parameter to match your spectrometer's resolution

Wavelength Calibration
~~~~~~~~~~~~~~~~~~~~~~

For calibrating your spectrometer:

1. Search for strong, well-known emission lines
2. Select reference lines throughout your wavelength range
3. Export the line positions for use in your calibration software

Plasma Spectroscopy
~~~~~~~~~~~~~~~~~~~

For analyzing plasma emission:

1. Search broadly in your wavelength range
2. Identify unexpected lines in your experimental spectra
3. Use element filtering to determine molecular composition
4. Generate synthetic spectra for comparison

Next Steps
----------

* Learn more about the :doc:`interface-overview`
* Explore advanced :doc:`searching-lines` techniques
* Understand :doc:`spectrum-generation` parameters
* Learn about :doc:`data-export` formats

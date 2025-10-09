Spectrum Generation
===================

This guide explains how to generate synthetic spectra from selected emission lines.

Overview
--------

MELT can generate synthetic spectra by modeling selected emission lines as Gaussian peaks. This is useful for:

* Visualizing groups of lines together
* Simulating instrumental resolution effects
* Comparing with experimental spectra
* Planning spectroscopic experiments

The Gaussian Model
------------------

Physical Basis
~~~~~~~~~~~~~~

Each emission line is modeled as a Gaussian (normal distribution) peak:

.. math::

   I(\lambda) = I_0 \cdot \exp\left(-\frac{(\lambda - \lambda_0)^2}{2\sigma^2}\right)

Where:

* :math:`I(\lambda)` is the intensity at wavelength :math:`\lambda`
* :math:`I_0` is the peak intensity
* :math:`\lambda_0` is the line center wavelength
* :math:`\sigma` is related to the peak width (FWHM)

Peak Width Parameter
~~~~~~~~~~~~~~~~~~~~

The Full Width at Half Maximum (FWHM) controls peak broadening:

.. math::

   \text{FWHM} = 2\sqrt{2\ln(2)} \cdot \sigma \approx 2.355 \cdot \sigma

**Interpretation**:

* FWHM is the width of the peak at half of its maximum height
* Represents instrumental broadening
* Should match your spectrometer's resolution

Generating Spectra
-------------------

Step-by-Step Process
~~~~~~~~~~~~~~~~~~~~

**1. Select Lines**

After performing a search, check the boxes next to lines you want to include:

* Click individual checkboxes for specific lines
* Use "Select All" to include all results
* Selection persists if you generate multiple spectra

**2. Set Peak Width**

Enter the FWHM value in the "Peak Width" field:

* Units match your selected wavelength unit (nm, Å, μm, etc.)
* Smaller values → sharper peaks
* Larger values → broader, overlapping peaks

**3. Click "Generate Spectrum"**

The spectrum appears as an interactive plot below the button.

**4. Interact with Plot**

* **Hover**: See wavelength and intensity values
* **Zoom**: Click and drag to zoom in
* **Pan**: Shift + drag to move view
* **Reset**: Double-click to reset zoom

Peak Width Selection Guide
---------------------------

Matching Instrumental Resolution
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Different spectrometers have different resolutions:

**High-Resolution Spectrometers**

* Research-grade echelle: FWHM ≈ 0.01 - 0.05 nm
* High-res grating: FWHM ≈ 0.05 - 0.1 nm
* Use smaller FWHM values in MELT

**Medium-Resolution Spectrometers**

* Standard grating instruments: FWHM ≈ 0.1 - 1 nm
* Portable spectrometers: FWHM ≈ 0.5 - 2 nm
* Mid-range FWHM in MELT

**Low-Resolution Spectrometers**

* Fiber optic spectrometers: FWHM ≈ 1 - 5 nm
* Filter-based systems: FWHM ≈ 5 - 20 nm
* Use larger FWHM values

Calculating Spectrometer FWHM
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you know your spectrometer specifications:

**From Resolution (R)**:

.. math::

   \text{FWHM} = \frac{\lambda}{R}

Where :math:`R` is the resolving power and :math:`\lambda` is the wavelength.

**Example**: At 500 nm with R = 5000:

.. math::

   \text{FWHM} = \frac{500 \text{ nm}}{5000} = 0.1 \text{ nm}

**From Grating Specifications**:

.. math::

   \text{FWHM} \approx \frac{\text{pixel size} \times \text{dispersion}}{\text{magnification}}

Consult your spectrometer manual for exact values.

Effects of Peak Width
~~~~~~~~~~~~~~~~~~~~~

**Too Small (< actual resolution)**:

* Peaks appear artificially sharp
* May not represent real observations
* Good for identifying individual lines

**Well-Matched (≈ actual resolution)**:

* Best comparison with experimental data
* Realistic peak overlaps
* Accurate intensity ratios

**Too Large (> actual resolution)**:

* Peaks blend together excessively
* May hide spectral features
* Useful for low-resolution simulations

Intensity Handling
------------------

Relative Intensities
~~~~~~~~~~~~~~~~~~~~

When intensity data is available:

* Line heights reflect relative intensities from database
* Stronger lines appear taller in the spectrum
* Weak lines may be barely visible with strong lines present

When intensity is missing:

* All lines are given equal intensity
* Peak heights are uniform
* Useful for identifying line positions

Normalization
~~~~~~~~~~~~~

The generated spectrum is normalized so:

* Tallest peak has intensity = 1.0
* Other peaks are scaled proportionally
* Y-axis shows "Arbitrary Units"

**Note**: Absolute intensities depend on many factors (temperature, concentration, etc.) and are not provided.

Spectrum Interpretation
-----------------------

Reading the Plot
~~~~~~~~~~~~~~~~

**X-axis**: Wavelength

* Shows range covering all selected lines
* Units match your selection (nm, Å, μm, cm⁻¹, GHz)
* Auto-scaled to fit data

**Y-axis**: Intensity

* Arbitrary units (normalized to 1.0)
* Represents relative signal strength
* Not calibrated to physical units

Identifying Features
~~~~~~~~~~~~~~~~~~~~

**Individual Peaks**

* Each peak corresponds to one emission line
* Peak center = line wavelength
* Peak height = relative intensity

**Band Structures**

* Clusters of peaks indicate molecular bands
* Spacing reveals vibrational structure
* Overlapping peaks may blend together

**Baseline**

* Should be near zero between peaks
* Non-zero baseline indicates overlapping wings

Common Patterns
~~~~~~~~~~~~~~~

**Doublets and Multiplets**

* Closely spaced peaks from fine structure
* May require small FWHM to resolve
* Example: Na D-lines at 589.0 and 589.6 nm

**Band Heads**

* Dense accumulation of lines
* Common in molecular spectra
* May appear as sharp edge with diffuse tail

**Series**

* Regularly spaced lines
* Indicate vibrational or rotational progressions
* Spacing decreases toward series limit

Practical Examples
------------------

Example 1: C₂ Swan Bands
~~~~~~~~~~~~~~~~~~~~~~~~~

**Setup**:

* Search: C₂ lines, 510-520 nm
* Select: All d³Πg-a³Πu transitions
* FWHM: 0.3 nm (typical portable spectrometer)

**Expected Result**:

* Band head near 516.5 nm
* Multiple overlapping transitions
* Characteristic band shape

Example 2: OH A-X System
~~~~~~~~~~~~~~~~~~~~~~~~~

**Setup**:

* Search: OH lines, 306-310 nm
* Select: A²Σ-X²Π (0,0) band
* FWHM: 0.1 nm (medium resolution)

**Expected Result**:

* Rotational structure visible
* P and R branches
* Q-branch near 308 nm

Example 3: High-Resolution Atomic Lines
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Setup**:

* Search: Specific atomic transitions
* Select: A few isolated lines
* FWHM: 0.01 nm (high resolution)

**Expected Result**:

* Sharp, well-separated peaks
* Baseline returns to zero between peaks
* Clear peak identification

Interactive Features
--------------------

Zoom and Pan
~~~~~~~~~~~~

To examine specific regions:

1. **Zoom in**: Click and drag across region of interest
2. **Pan**: Hold Shift, click and drag to move view
3. **Reset**: Double-click anywhere to reset to full view

**Use cases**:

* Examine line blending in crowded regions
* Verify individual line positions
* Inspect baseline between peaks

Hover Information
~~~~~~~~~~~~~~~~~

Move cursor over spectrum to see:

* Exact wavelength at cursor position
* Intensity value at that point
* Updates in real-time as you move

**Tip**: Hover over peak maximum to confirm line wavelength.

Regenerating Spectra
--------------------

Changing Parameters
~~~~~~~~~~~~~~~~~~~

You can regenerate the spectrum with different settings:

**Change FWHM**:

1. Enter new peak width value
2. Click "Generate Spectrum" again
3. Compare different resolutions

**Change Line Selection**:

1. Check/uncheck lines in results table
2. Click "Generate Spectrum" again
3. See effect of adding/removing lines

**Change Units**:

1. Select different wavelength unit
2. Perform new search if needed
3. Regenerate spectrum in new units

Comparing Spectra
~~~~~~~~~~~~~~~~~

To compare different configurations:

1. Generate first spectrum
2. Take screenshot or export PNG
3. Change parameters
4. Generate new spectrum
5. Compare images side-by-side

**Note**: MELT doesn't overlay multiple spectra, but you can use external tools for comparison.

Limitations
-----------

Model Assumptions
~~~~~~~~~~~~~~~~~

The Gaussian model assumes:

* Symmetric line shapes (not always true)
* No Doppler or pressure broadening effects
* Instrumental broadening dominates
* Lorentzian components ignored

For most applications, this is sufficient. For precise line shape analysis, use specialized spectroscopy software.

Resolution Limits
~~~~~~~~~~~~~~~~~

* Very small FWHM may show discrete sampling artifacts
* Very large FWHM loses spectral detail
* Recommended range: 0.01 - 10 nm

Data Availability
~~~~~~~~~~~~~~~~~

* Intensity data not available for all lines
* Missing intensities default to equal weights
* Absolute intensities not provided

Best Practices
--------------

Scientific Use
~~~~~~~~~~~~~~

* Match FWHM to your actual instrument
* Document FWHM value used in publications
* Verify line positions with experimental data
* Use as qualitative comparison tool

Educational Use
~~~~~~~~~~~~~~~

* Vary FWHM to demonstrate resolution effects
* Compare different molecular systems
* Illustrate band structure concepts
* Show effect of line blending

Experimental Planning
~~~~~~~~~~~~~~~~~~~~~

* Simulate expected spectrum before experiment
* Check if lines are resolvable at your resolution
* Identify potential interferences
* Estimate required wavelength range

Next Steps
----------

* Learn about :doc:`data-export` to save spectra
* Explore :doc:`../technical/algorithms` for implementation details
* See :doc:`../reference/data-sources` for intensity data availability

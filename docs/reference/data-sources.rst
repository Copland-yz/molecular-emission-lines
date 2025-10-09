Data Sources
============

This page documents the spectroscopic databases included in MELT.

Current Databases
-----------------

Pearse & Gaydon (1976)
~~~~~~~~~~~~~~~~~~~~~~

**Full Citation**:

Pearse, R. W. B., & Gaydon, A. G. (1976). *The identification of molecular spectra* (4th ed.). Chapman and Hall.

**Coverage**:

* **Wavelength range**: ~200-10,000 nm (UV to near-IR)
* **Spectral region**: UV, Visible, near-IR
* **Number of lines**: ~10,000
* **Molecules**: CO, CN, OH, C2, H2, N2, NO, CH, NH, and many others

**Content**:

* Molecular band systems
* Diatomic and small polyatomic molecules
* Emission spectra
* Selected absorption bands

**Data Quality**:

* Well-established reference
* Moderate wavelength precision (typically 0.01-0.1 nm)
* Relative intensities not always available
* Compiled from literature through 1970s

**Use Cases**:

* General molecular spectroscopy
* LIBS and plasma diagnostics
* Combustion analysis
* Astronomical spectroscopy
* Wavelength calibration

**License**: Published work, data compilation for scientific use

**In MELT**:

* Files located in: ``assets/data/Pearse&Gaydon/``
* Molecules available: ~50 species
* Format: JSON with standard MELT schema

Future Databases
----------------

NIST Atomic Spectra Database (ASD)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Status**: Planned

**Source**: https://www.nist.gov/pml/atomic-spectra-database

**Coverage**:

* Atomic lines (not molecular)
* High precision wavelengths
* Transition probabilities
* Energy levels

**Potential addition**: Complement molecular data with atomic lines

Kurucz Line Lists
~~~~~~~~~~~~~~~~~

**Status**: Under consideration

**Coverage**:

* Extensive atomic and molecular lines
* Astrophysical applications
* High-temperature species

HITRAN Database
~~~~~~~~~~~~~~~

**Status**: Possible future addition

**Coverage**:

* Molecular absorption spectra
* Infrared region
* Atmospheric species
* High-resolution data

VALD (Vienna Atomic Line Database)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Status**: Possible future addition

**Coverage**:

* Atomic lines
* Stellar spectroscopy focus
* High precision

Database Statistics
-------------------

Current Coverage
~~~~~~~~~~~~~~~~

+------------------+----------------------+-------------------+
| Database         | Number of Lines      | Wavelength Range  |
+==================+======================+===================+
| Pearse & Gaydon  | ~10,000              | 200-10,000 nm     |
+------------------+----------------------+-------------------+
| **Total**        | **~10,000**          | **200-10,000 nm** |
+------------------+----------------------+-------------------+

Molecule Coverage
~~~~~~~~~~~~~~~~~

Currently available molecules (partial list):

* **Diatomics**: CO, CN, OH, NO, N2, O2, H2, CH, NH, AlO, BO, CaO, TiO
* **Triatomics**: H2O, CO2, NH2, CH2
* **Larger molecules**: C2H, C2H2, NH3

Data Quality Metrics
--------------------

Wavelength Accuracy
~~~~~~~~~~~~~~~~~~~

+-----------------+---------------------------+
| Source          | Typical Precision         |
+=================+===========================+
| Pearse & Gaydon | 0.01-0.1 nm               |
+-----------------+---------------------------+

Intensity Data
~~~~~~~~~~~~~~

+-----------------+---------------------------+
| Source          | Intensity Information     |
+=================+===========================+
| Pearse & Gaydon | Limited (qualitative)     |
+-----------------+---------------------------+

Completeness
~~~~~~~~~~~~

* **Band heads**: Well covered
* **Weak lines**: May be incomplete
* **High-resolution structure**: Limited
* **Temperature dependence**: Generally not specified

Using Multiple Databases
-------------------------

When multiple databases are available:

**Prioritization**:

1. Most recent data
2. Highest precision
3. Best documented source

**Cross-validation**:

* Compare values from multiple sources
* Note discrepancies
* Cite all sources used

Data Licensing
--------------

Current Databases
~~~~~~~~~~~~~~~~~

**Pearse & Gaydon (1976)**:

* Published scientific reference
* Data compilation for educational and research use
* Cite original source when publishing results

General Guidelines
~~~~~~~~~~~~~~~~~~

* **Academic use**: Generally permitted
* **Commercial use**: Check specific database licenses
* **Attribution**: Always cite original sources
* **Redistribution**: Follow source database terms

Adding New Databases
---------------------

To contribute additional databases:

1. Ensure data is from authoritative source
2. Verify licensing permits redistribution
3. Convert to MELT JSON format
4. Validate data quality
5. Document source and coverage
6. Submit via pull request

See :doc:`../development/adding-databases` for detailed instructions.

Data Limitations
----------------

General Limitations
~~~~~~~~~~~~~~~~~~~

* **Wavelength precision**: Varies by source
* **Intensity accuracy**: Often qualitative
* **Completeness**: Not all lines for all molecules
* **Temperature**: Usually unspecified
* **Line widths**: Not included

Specific Considerations
~~~~~~~~~~~~~~~~~~~~~~~

**LIBS applications**:

* High-temperature intensities may differ
* Plasma conditions affect line strengths
* Use as qualitative guide

**Astronomical applications**:

* Doppler shifts not accounted for
* Interstellar medium effects not included
* Use for line identification

**Analytical chemistry**:

* Matrix effects not considered
* Absolute intensities unavailable
* Good for wavelength identification

Data Updates
------------

Update Frequency
~~~~~~~~~~~~~~~~

* **Current**: Database updated as new sources are added
* **Goal**: Annual reviews for new databases
* **User contributions**: Accepted continuously

Requesting Additions
~~~~~~~~~~~~~~~~~~~~

To request specific data:

1. Open issue on GitHub
2. Specify desired molecule/system
3. Provide use case
4. Suggest source if known

Version History
~~~~~~~~~~~~~~~

* **v1.0 (2025)**: Initial release with Pearse & Gaydon data
* **Future**: Additional databases as contributed

Data Citations
--------------

When using MELT data in publications, cite:

**MELT tool**:

.. code-block:: bibtex

   @software{yong2025,
     author = {Yong, Chengzheng},
     title = {Molecular Emission Line Tool},
     url = {https://github.com/Copland-yz/MELT},
     year = {2025}
   }

**Pearse & Gaydon database**:

.. code-block:: bibtex

   @book{pearse1976,
     author = {Pearse, R. W. B. and Gaydon, A. G.},
     title = {The identification of molecular spectra},
     edition = {4th},
     publisher = {Chapman and Hall},
     year = {1976}
   }

Example citation text:

   "Emission line wavelengths were obtained from the Molecular Emission
   Line Tool (MELT) [1], which includes data compiled from Pearse &
   Gaydon [2]."

Data Quality Reports
--------------------

Known Issues
~~~~~~~~~~~~

* **Pearse & Gaydon**:

  * Limited intensity information
  * Some wavelengths have moderate precision
  * Not all band systems complete

**Reporting issues**:

If you find data errors:

1. Check original source
2. Report on GitHub issues
3. Include line details and correction

Validation
~~~~~~~~~~

Data validation performed:

* JSON syntax checking
* Wavelength range verification
* Unit conversion consistency
* Formula parsing validation

Continuous improvement through community feedback.

Resources
---------

Additional Spectroscopy Resources
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* **NIST Chemistry WebBook**: https://webbook.nist.gov/chemistry/
* **Atomic Line List**: https://www.pa.uky.edu/~peter/atomic/
* **HITRAN Database**: https://hitran.org/
* **Kurucz Database**: http://kurucz.harvard.edu/

Literature
~~~~~~~~~~

Recommended references:

* Herzberg, G. (1950). *Molecular Spectra and Molecular Structure*.
* Huber, K. P., & Herzberg, G. (1979). *Constants of Diatomic Molecules*.
* Bernath, P. F. (2020). *Spectra of Atoms and Molecules* (4th ed.).

Next Steps
----------

* See :doc:`citation` for how to cite MELT
* Learn :doc:`api` for programmatic access
* Explore :doc:`../development/adding-databases` to contribute

Molecular Emission Line Tool (MELT) Documentation
================================================

.. image:: https://img.shields.io/badge/Live%20Tool-MELT-blue
   :target: https://copland-yz.github.io/MELT/
   :alt: Live Tool

Welcome to the documentation for the Molecular Emission Line Tool (MELT), an interactive web-based search tool for molecular emission lines.

Overview
--------

MELT is a free, open-source web application designed to help researchers search, visualize, and analyze molecular emission lines from spectroscopic databases. The tool provides an intuitive interface with periodic table element filtering, spectrum visualization, and data export capabilities.

🔗 **Live Tool**: https://copland-yz.github.io/MELT/

Key Features
-----------

* **Interactive Search**: Filter emission lines by elements and wavelength ranges
* **Spectrum Visualization**: Generate example spectra from selected emission lines
* **Multiple Units**: Support for nanometers, Ångström, micrometers, GHz, and wavenumbers
* **Downloadable Results**: Export search results and spectra in multiple formats
* **Periodic Table Interface**: Click-based element selection with include/exclude functionality

Use Cases
---------

Laboratory Spectroscopy
~~~~~~~~~~~~~~~~~~~~~~~

* Source identification for LIBS (Laser Induced Breakdown Spectroscopy)
* Plasma science and analytical chemistry research
* Reference lines for wavelength calibration
* Understanding instrumental resolution effects

Quick Start
-----------

1. Visit the `live tool <https://copland-yz.github.io/MELT/>`_
2. Select elements from the periodic table (click once to include, twice to exclude)
3. Set wavelength/frequency range using your preferred units
4. Click "Search" to find matching emission lines
5. Select lines of interest and generate spectra
6. Download results as needed

Contents
--------

.. toctree::
   :maxdepth: 2
   :caption: User Guide

   user-guide/getting-started
   user-guide/interface-overview
   user-guide/searching-lines
   user-guide/spectrum-generation
   user-guide/data-export

.. toctree::
   :maxdepth: 2
   :caption: Technical Documentation

   technical/architecture
   technical/data-format
   technical/file-structure
   technical/algorithms

.. toctree::
   :maxdepth: 2
   :caption: Development

   development/setup
   development/adding-databases
   development/contributing

.. toctree::
   :maxdepth: 1
   :caption: Reference

   reference/api
   reference/data-sources
   reference/citation

Citation
--------

If you use this tool in your research, please cite:

.. code-block:: bibtex

   @software{yong2025,
     author = {Yong, Chengzheng},
     title = {Molecular Emission Line Tool},
     url = {https://github.com/Copland-yz/MELT},
     year = {2025}
   }

License
-------

MELT is released under the MIT License. See the `LICENSE <https://github.com/Copland-yz/MELT/blob/main/LICENSE.txt>`_ file for details.

Support and Contact
------------------

* **GitHub Issues**: `Report bugs or request features <https://github.com/Copland-yz/MELT/issues>`_
* **Author**: Chengzheng (Copland) Yong
* **Email**: chengzheng@wustl.edu
* **Institution**: Washington University in St. Louis

Indices and tables
==================

* :ref:`genindex`
* :ref:`search`

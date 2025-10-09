File Structure
==============

Complete directory tree and file descriptions for the MELT project.

Project Root
------------

.. code-block:: text

   MELT/
   ├── index.html              # Main application page
   ├── README.md               # Project documentation
   ├── LICENSE.txt             # MIT license
   ├── _config.yml             # Jekyll configuration
   ├── _config_dev.yml         # Development config
   ├── Gemfile                 # Ruby dependencies
   ├── Gemfile.lock            # Locked dependency versions
   ├── .gitignore              # Git ignore rules
   ├── _data/                  # Jekyll data files
   ├── _includes/              # Jekyll partial templates
   ├── _layouts/               # Jekyll page layouts
   ├── _sass/                  # Sass stylesheets
   ├── _site/                  # Generated static site (ignored)
   ├── assets/                 # Static assets
   └── vendor/                 # Ruby gem dependencies

Core Files
----------

index.html
~~~~~~~~~~

Main application entry point containing:

* HTML structure for search interface
* Periodic table element grid
* Search parameter inputs
* Results table
* Spectrum visualization area
* Embedded CSS styles
* Inline JavaScript integration

**Key sections**:

* Search controls
* Element periodic table
* Range inputs (wavelength/frequency)
* Results table container
* Spectrum chart canvas
* Export buttons

README.md
~~~~~~~~~

Project documentation including:

* Feature overview
* Usage instructions
* Technical details
* Development setup
* Citation information
* Contact details

Jekyll Configuration
--------------------

_config.yml
~~~~~~~~~~~

Jekyll site configuration:

* Site metadata (title, description, URL)
* Author information
* Theme settings (Minimal Mistakes)
* Plugin configuration
* Build settings
* Navigation structure

_config_dev.yml
~~~~~~~~~~~~~~~

Development-specific overrides:

* Local server settings
* Development URLs
* Debug options

Assets Directory
----------------

assets/js/
~~~~~~~~~~

.. code-block:: text

   assets/js/
   ├── molecular-lines.js      # Core application (38KB)
   ├── main.min.js             # Theme JavaScript (116KB)
   ├── _main.js                # Theme source
   └── plugins/
       ├── jquery/             # jQuery library
       ├── chart.js/           # Chart.js library
       └── ...                 # Other plugins

**molecular-lines.js**

Primary application logic (~1200 lines):

* Periodic table initialization
* Element selection handlers
* Search functionality
* Data loading and caching
* Spectrum generation
* Export functions

assets/data/
~~~~~~~~~~~~

.. code-block:: text

   assets/data/
   └── Pearse&Gaydon/
       ├── CO.json
       ├── CN.json
       ├── OH.json
       ├── C2.json
       ├── H2.json
       ├── N2.json
       ├── NO.json
       └── ... (~50 total files)

**Data organization**:

* One file per molecule
* JSON format
* UTF-8 encoding
* 1-100 KB per file

assets/css/
~~~~~~~~~~~

Compiled CSS stylesheets:

* main.css - Primary styles
* Theme-specific styles
* Responsive design rules

assets/webfonts/
~~~~~~~~~~~~~~~~

Font files for icons and text:

* Font Awesome icons
* Theme fonts

Jekyll Template Structure
--------------------------

_layouts/
~~~~~~~~~

Page layout templates:

* default.html - Base template
* single.html - Single page layout
* archive.html - Archive pages

_includes/
~~~~~~~~~~

Reusable partial templates:

* head.html - HTML head section
* header.html - Page header
* footer.html - Page footer
* scripts.html - JavaScript includes
* analytics.html - Analytics code

_sass/
~~~~~~

Sass source files:

* Minimal Mistakes theme styles
* Custom overrides
* Component styles
* Responsive breakpoints

_data/
~~~~~~

Jekyll data files:

* navigation.yml - Site navigation menu
* ui-text.yml - UI text strings

Generated Files
---------------

_site/
~~~~~~

Jekyll build output (not version controlled):

* Compiled HTML
* Processed CSS
* Copied assets
* Ready for deployment

vendor/
~~~~~~~

Ruby gem dependencies (not version controlled):

* Bundled gems
* Jekyll and plugins
* Theme dependencies

File Sizes
----------

Approximate file sizes:

============================================  ==========
File/Directory                                Size
============================================  ==========
index.html                                    ~18 KB
molecular-lines.js                            ~38 KB
main.min.js                                   ~116 KB
Chart.js library                              ~200 KB
Data files (total)                            ~2 MB
Complete repository (without vendor)          ~3 MB
============================================  ==========

Loading Performance
-------------------

Page load breakdown:

1. **Initial HTML** (~18 KB) - 50-100ms
2. **JavaScript** (~350 KB total) - 200-500ms
3. **Data files** (on first search) - 500-1000ms
4. **Fonts and images** - 200-400ms

**Total first load**: 1-2 seconds on typical connection

**Subsequent loads**: <500ms (cached assets)

File Dependencies
-----------------

Dependency Graph
~~~~~~~~~~~~~~~~

.. code-block:: text

   index.html
   ├─→ _layouts/default.html
   │   ├─→ _includes/head.html
   │   ├─→ _includes/header.html
   │   └─→ _includes/footer.html
   ├─→ assets/css/main.css
   ├─→ assets/js/main.min.js
   ├─→ assets/js/molecular-lines.js
   │   └─→ assets/data/Pearse&Gaydon/*.json
   └─→ assets/webfonts/*

Critical Path
~~~~~~~~~~~~~

Required for basic functionality:

1. index.html
2. molecular-lines.js
3. Chart.js library
4. Data JSON files

Optional resources:

* Theme CSS (degrades gracefully)
* Web fonts (system fonts fallback)
* Analytics scripts

Version Control
---------------

.gitignore
~~~~~~~~~~

Excluded from version control:

* _site/ - Generated files
* .sass-cache/ - Sass compilation cache
* .jekyll-cache/ - Jekyll cache
* vendor/ - Ruby gems
* .bundle/ - Bundler config
* Gemfile.lock - Platform-specific

Included in version control:

* Source code (HTML, JS, CSS)
* Data files (JSON)
* Configuration files
* Documentation
* License and README

File Modification Frequency
---------------------------

**Rarely changed**:

* Jekyll configuration
* Theme layouts
* License

**Occasionally changed**:

* README documentation
* Core JavaScript logic
* Styles and CSS

**Frequently changed**:

* Data files (as database grows)
* index.html (feature additions)

**Never changed after creation**:

* Historical data files
* Attribution files

Build Process
-------------

Development Build
~~~~~~~~~~~~~~~~~

.. code-block:: bash

   bundle exec jekyll serve

**Output**: _site/ directory with development site

Production Build
~~~~~~~~~~~~~~~~

.. code-block:: bash

   JEKYLL_ENV=production bundle exec jekyll build

**Output**: Optimized _site/ for deployment

**Optimizations**:

* Minified CSS
* Compressed HTML
* Removed debug code

Deployment
----------

GitHub Pages automatically builds from repository:

1. Push to main branch
2. GitHub Actions triggers Jekyll build
3. Site deployed to gh-pages branch
4. Available at copland-yz.github.io/MELT/

Next Steps
----------

* Learn about :doc:`algorithms` implementation
* Explore :doc:`architecture` overview
* See :doc:`../development/setup` for local development

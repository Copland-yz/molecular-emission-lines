Architecture
============

This document describes the technical architecture of the Molecular Emission Line Tool (MELT).

System Overview
---------------

MELT is a client-side web application built with:

* **Frontend**: Pure HTML/CSS/JavaScript (no frameworks)
* **Visualization**: Chart.js library
* **Data Storage**: Static JSON files
* **Hosting**: GitHub Pages with Jekyll

This architecture provides:

* Zero server-side dependencies
* Fast, responsive performance
* Easy deployment and maintenance
* Complete data privacy (all processing client-side)

Technology Stack
----------------

Core Technologies
~~~~~~~~~~~~~~~~~

**HTML5**

* Semantic markup
* Canvas element for spectrum rendering
* Modern form controls

**CSS3**

* Responsive design
* Flexbox and Grid layouts
* CSS variables for theming
* Integration with Minimal Mistakes Jekyll theme

**JavaScript (ES6+)**

* Modular code organization
* Async/await for data loading
* Arrow functions and modern syntax
* No transpilation required (targets modern browsers)

Libraries and Dependencies
~~~~~~~~~~~~~~~~~~~~~~~~~~

**Chart.js** (v3.x)

* Primary visualization library
* Generates interactive line plots
* Handles zoom, pan, hover interactions
* Canvas-based rendering

**Jekyll** (deployment)

* Static site generation
* Template engine for consistent styling
* Asset management
* Used only for site wrapper, not core functionality

**Minimal Mistakes Theme**

* Professional styling
* Responsive navigation
* Social media integration
* Academic-focused layout

Application Structure
---------------------

Component Architecture
~~~~~~~~~~~~~~~~~~~~~~

MELT follows a simple component-based structure:

.. code-block:: text

   ┌─────────────────────────────────────┐
   │         User Interface              │
   │  (index.html + inline styles)       │
   └──────────────┬──────────────────────┘
                  │
   ┌──────────────┴──────────────────────┐
   │      Application Logic              │
   │    (molecular-lines.js)             │
   │  ┌────────────────────────────────┐ │
   │  │  Periodic Table Manager        │ │
   │  │  Search Engine                 │ │
   │  │  Data Loader                   │ │
   │  │  Spectrum Generator            │ │
   │  │  Export Manager                │ │
   │  └────────────────────────────────┘ │
   └──────────────┬──────────────────────┘
                  │
   ┌──────────────┴──────────────────────┐
   │         Data Layer                  │
   │     (JSON files via fetch)          │
   │  ┌────────────────────────────────┐ │
   │  │  Pearse & Gaydon database      │ │
   │  │  (Future: additional databases) │ │
   │  └────────────────────────────────┘ │
   └─────────────────────────────────────┘

File Structure
~~~~~~~~~~~~~~

.. code-block:: text

   MELT/
   ├── index.html                    # Main application entry point
   ├── _config.yml                   # Jekyll configuration
   ├── _layouts/                     # Jekyll page templates
   ├── _includes/                    # Jekyll partial templates
   ├── _sass/                        # Styling source files
   ├── assets/
   │   ├── js/
   │   │   ├── molecular-lines.js    # Core application logic (38KB)
   │   │   ├── main.min.js           # Theme JavaScript
   │   │   └── plugins/              # Third-party libraries
   │   ├── data/
   │   │   └── Pearse&Gaydon/        # JSON data files (~50 files)
   │   ├── css/                      # Compiled stylesheets
   │   └── webfonts/                 # Font files
   ├── _data/
   │   └── navigation.yml            # Site navigation config
   └── README.md                     # Project documentation

Core Modules
------------

Periodic Table Manager
~~~~~~~~~~~~~~~~~~~~~~

**Purpose**: Handle element selection and filtering logic

**Key Functions**:

* ``initializePeriodicTable()`` - Set up interactive element grid
* ``toggleElement(element)`` - Cycle through include/exclude/neutral states
* ``getSelectedElements()`` - Return currently active filters
* ``parseFormula(formula)`` - Extract elements from molecular formula

**Implementation Details**:

* Element data stored as JavaScript object
* Three-state logic: neutral (gray) → include (green) → exclude (red)
* Click handlers attached to each element tile
* Regex-based formula parsing for complex molecules

Search Engine
~~~~~~~~~~~~~

**Purpose**: Filter emission lines based on user criteria

**Key Functions**:

* ``searchLines(range, unit, elements)`` - Main search function
* ``convertUnits(value, fromUnit, toUnit)`` - Wavelength/frequency conversion
* ``filterByElements(lines, included, excluded)`` - Apply element filters
* ``filterByRange(lines, min, max, unit)`` - Apply wavelength range

**Algorithm**:

1. Load all data files (cached after first load)
2. Convert range to common unit (nm)
3. Filter by wavelength range
4. Parse molecule formulas
5. Apply element inclusion/exclusion filters
6. Sort results by wavelength
7. Display in results table

**Complexity**: O(n) where n is number of lines in database

Data Loader
~~~~~~~~~~~

**Purpose**: Asynchronously load JSON data files

**Key Functions**:

* ``loadDatabase()`` - Fetch and parse JSON files
* ``cacheData()`` - Store loaded data in memory
* ``mergeDatasets()`` - Combine multiple database files

**Implementation**:

.. code-block:: javascript

   async function loadDatabase() {
     const files = [
       'assets/data/Pearse&Gaydon/CO.json',
       'assets/data/Pearse&Gaydon/CN.json',
       // ... more files
     ];

     const promises = files.map(file =>
       fetch(file).then(r => r.json())
     );

     const datasets = await Promise.all(promises);
     return datasets.flat();
   }

**Caching Strategy**:

* Data loaded once on first search
* Stored in JavaScript variable
* Persists for session duration
* Cleared on page refresh

Spectrum Generator
~~~~~~~~~~~~~~~~~~

**Purpose**: Create synthetic spectra from selected lines

**Key Functions**:

* ``generateSpectrum(lines, fwhm)`` - Main generation function
* ``createGaussianPeak(center, fwhm, intensity)`` - Model individual line
* ``renderChart(data)`` - Display using Chart.js
* ``calculateRange(lines)`` - Auto-scale axes

**Gaussian Implementation**:

.. code-block:: javascript

   function createGaussianPeak(lambda0, fwhm, intensity, lambdaArray) {
     const sigma = fwhm / 2.355;
     return lambdaArray.map(lambda => {
       const exponent = -Math.pow(lambda - lambda0, 2) / (2 * sigma * sigma);
       return intensity * Math.exp(exponent);
     });
   }

**Spectrum Composition**:

1. Determine wavelength range from selected lines
2. Create dense wavelength array (1000-5000 points)
3. Generate Gaussian for each line
4. Sum all Gaussians
5. Normalize to max = 1.0
6. Render with Chart.js

Export Manager
~~~~~~~~~~~~~~

**Purpose**: Export data in various formats

**Key Functions**:

* ``exportTXT(lines)`` - Generate tab-separated text
* ``exportCSV(lines)`` - Generate comma-separated values
* ``exportPNG(chart)`` - Save canvas as image
* ``downloadFile(content, filename)`` - Trigger browser download

**TXT Export Implementation**:

.. code-block:: javascript

   function exportTXT(lines) {
     const headers = ['Molecule', 'System', 'Wavelength(nm)', ...];
     const rows = lines.map(line => [
       line.molecule,
       line.system,
       line.wavelength_nm,
       // ... more fields
     ].join('\t'));

     const content = [headers.join('\t'), ...rows].join('\n');
     downloadFile(content, 'molecular_lines.txt', 'text/plain');
   }

**PNG Export Implementation**:

Uses HTML5 Canvas API:

.. code-block:: javascript

   function exportPNG(chart) {
     const canvas = chart.canvas;
     const url = canvas.toDataURL('image/png');

     const link = document.createElement('a');
     link.download = 'spectrum.png';
     link.href = url;
     link.click();
   }

Data Flow
---------

Search Flow
~~~~~~~~~~~

.. code-block:: text

   User Input (elements, range)
          │
          ├─ Parse inputs
          ├─ Validate range
          └─ Get element filters
          │
   Load Data (if not cached)
          │
          ├─ Fetch JSON files
          ├─ Parse JSON
          └─ Cache in memory
          │
   Filter Data
          │
          ├─ Filter by wavelength range
          ├─ Parse molecular formulas
          └─ Apply element filters
          │
   Display Results
          │
          ├─ Sort by wavelength
          ├─ Format for display
          └─ Populate results table

Spectrum Generation Flow
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: text

   User Selects Lines + FWHM
          │
          ├─ Validate selection (>0 lines)
          └─ Parse FWHM value
          │
   Calculate Parameters
          │
          ├─ Determine wavelength range
          ├─ Create dense wavelength array
          └─ Set up Gaussian parameters
          │
   Generate Spectrum
          │
          ├─ For each selected line:
          │   ├─ Generate Gaussian peak
          │   └─ Add to spectrum array
          ├─ Normalize to max = 1.0
          └─ Prepare Chart.js data
          │
   Render Chart
          │
          ├─ Create/update Chart.js instance
          ├─ Apply styling and labels
          └─ Enable interactions

Performance Considerations
--------------------------

Optimization Strategies
~~~~~~~~~~~~~~~~~~~~~~~

**Data Loading**:

* Lazy loading: Data only loaded on first search
* Promise.all(): Parallel file fetching
* In-memory caching: Avoid repeated network requests

**Search Performance**:

* Linear scan (acceptable for ~10,000 lines)
* Early termination in wavelength filter
* Minimal DOM manipulation

**Rendering**:

* Chart.js handles optimization internally
* Canvas rendering faster than SVG for large datasets
* Animation disabled for immediate display

**Memory Management**:

* Data cleared on page refresh
* No memory leaks (no circular references)
* Garbage collection handles cleanup

Scalability Limits
~~~~~~~~~~~~~~~~~~

**Current Performance**:

* Database size: ~50 JSON files, ~10,000 total lines
* Search time: <100ms on modern hardware
* Spectrum generation: <200ms for 100 lines
* Load time: <1s for initial data fetch

**Theoretical Limits**:

* Browser memory: Can handle 100,000+ lines
* Search performance: Linear scaling, O(n)
* Rendering: Chart.js handles 10,000+ points efficiently

**Bottlenecks**:

* Network latency (initial load)
* JSON parsing (for very large files)
* DOM updates (results table with >1000 rows)

Future Scalability
~~~~~~~~~~~~~~~~~~

For databases >100,000 lines, consider:

* Database indexing (IndexedDB or Web SQL)
* Virtual scrolling for results table
* Web Workers for background processing
* Compressed data transfer (gzip)

Browser Compatibility
---------------------

Minimum Requirements
~~~~~~~~~~~~~~~~~~~~

* **Chrome**: 90+ (released 2021)
* **Firefox**: 88+ (released 2021)
* **Safari**: 14+ (released 2020)
* **Edge**: 90+ (released 2021)

Required Features
~~~~~~~~~~~~~~~~~

* ES6 JavaScript (arrow functions, async/await, modules)
* Fetch API
* Canvas API
* CSS Grid and Flexbox
* HTML5 form controls

Graceful Degradation
~~~~~~~~~~~~~~~~~~~~

* No polyfills required (targets modern browsers)
* Falls back to basic table display if Chart.js fails
* Error messages for unsupported browsers

Security Considerations
-----------------------

Client-Side Security
~~~~~~~~~~~~~~~~~~~~

**Advantages**:

* No server-side attack surface
* User data never leaves browser
* No authentication/authorization needed

**Considerations**:

* All data is public (appropriate for scientific database)
* No sensitive information stored
* XSS risk minimal (no user-generated content stored)

Data Integrity
~~~~~~~~~~~~~~

* JSON files are static (no dynamic modification)
* Served over HTTPS (GitHub Pages)
* Version controlled (Git)

Deployment Architecture
-----------------------

GitHub Pages Hosting
~~~~~~~~~~~~~~~~~~~~

**Build Process**:

1. Push to GitHub repository
2. GitHub Actions runs Jekyll build
3. Static files deployed to ``gh-pages`` branch
4. Served at ``copland-yz.github.io/MELT/``

**Advantages**:

* Free hosting
* Automatic SSL/TLS
* CDN distribution
* Version control integration

**Limitations**:

* No server-side processing
* No databases (only static files)
* Build time limits (10 min)

Development vs Production
~~~~~~~~~~~~~~~~~~~~~~~~~

**Development**:

* Local Jekyll server (``bundle exec jekyll serve``)
* Live reload on file changes
* Served at ``localhost:4000``

**Production**:

* Jekyll builds optimized static site
* Minified assets
* Cached resources
* CDN delivery

Future Enhancements
-------------------

Potential Architecture Improvements
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Progressive Web App (PWA)**:

* Offline functionality
* Service worker caching
* "Install to home screen" capability

**Web Workers**:

* Background data processing
* Non-blocking search
* Improved responsiveness

**IndexedDB**:

* Persistent client-side storage
* Faster repeated searches
* Offline data access

**WebAssembly**:

* High-performance calculations
* Faster spectrum generation
* Complex mathematical models

API Considerations
~~~~~~~~~~~~~~~~~~

For programmatic access (future):

* RESTful API design
* JSON response format
* Rate limiting considerations
* CORS configuration

Next Steps
----------

* Explore :doc:`data-format` specifications
* Understand :doc:`algorithms` in detail
* Learn about :doc:`file-structure` organization

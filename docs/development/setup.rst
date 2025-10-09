Development Setup
=================

This guide will help you set up a local development environment for MELT.

Prerequisites
-------------

Required Software
~~~~~~~~~~~~~~~~~

**Ruby** (version 2.5 or higher)

* Used for Jekyll static site generation
* Install ruby-dev package for development headers

**Node.js** (version 12 or higher)

* Required by Jekyll and some dependencies
* npm comes bundled with Node.js

**Bundler** (Ruby gem)

* Manages Ruby dependencies
* Installed via RubyGems

Installation by Platform
-------------------------

Linux / WSL (Ubuntu/Debian)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

   # Install prerequisites
   sudo apt update && sudo apt upgrade -y
   sudo apt install ruby-dev ruby-bundler nodejs

   # Verify installations
   ruby --version    # Should be 2.5+
   node --version    # Should be 12+
   bundle --version  # Should be 2.0+

If you encounter "Unable to locate package" errors:

.. code-block:: bash

   sudo apt update
   sudo apt install ruby-full build-essential nodejs npm

   # Install bundler manually
   gem install bundler

macOS
~~~~~

Using Homebrew:

.. code-block:: bash

   # Install Homebrew if not already installed
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

   # Install prerequisites
   brew install ruby
   brew install node

   # Add Ruby to PATH (add to ~/.zshrc or ~/.bash_profile)
   export PATH="/usr/local/opt/ruby/bin:$PATH"

   # Install bundler
   gem install bundler

   # Verify installations
   ruby --version
   node --version
   bundle --version

Windows
~~~~~~~

**Option 1: WSL (Recommended)**

1. Install Windows Subsystem for Linux
2. Follow Linux instructions above

**Option 2: Native Windows**

1. Install Ruby using RubyInstaller: https://rubyinstaller.org/
2. Install Node.js: https://nodejs.org/
3. Open command prompt and run:

.. code-block:: bash

   gem install bundler

Getting the Code
----------------

Clone Repository
~~~~~~~~~~~~~~~~

.. code-block:: bash

   # Clone via HTTPS
   git clone https://github.com/Copland-yz/MELT.git

   # Or via SSH (if you have SSH keys configured)
   git clone git@github.com:Copland-yz/MELT.git

   # Navigate to project directory
   cd MELT

Fork Repository (for contributors)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. Go to https://github.com/Copland-yz/MELT
2. Click "Fork" button in top-right
3. Clone your fork:

.. code-block:: bash

   git clone https://github.com/YOUR-USERNAME/MELT.git
   cd MELT

   # Add upstream remote
   git remote add upstream https://github.com/Copland-yz/MELT.git

Installing Dependencies
-----------------------

Install Ruby Gems
~~~~~~~~~~~~~~~~~

.. code-block:: bash

   # Configure local installation (recommended)
   bundle config set --local path 'vendor/bundle'

   # Install dependencies
   bundle install

This creates a ``vendor/bundle`` directory with all Ruby gems.

**If you encounter permission errors**:

.. code-block:: bash

   # Install gems to local vendor directory
   bundle config set --local path 'vendor/bundle'
   bundle install

**Common issues**:

* **"Permission denied" error**: Use local path configuration above
* **Missing headers**: Install ``ruby-dev`` package
* **Build failures**: Install ``build-essential`` package

Running Development Server
--------------------------

Start Local Server
~~~~~~~~~~~~~~~~~~

.. code-block:: bash

   bundle exec jekyll serve -l -H localhost

**Flags explained**:

* ``-l`` or ``--livereload``: Auto-refresh on file changes
* ``-H localhost``: Bind to localhost
* ``--port 4000``: Default port (can override with ``--port 4001``)

**Output**:

.. code-block:: text

   Configuration file: /path/to/_config.yml
   Server address: http://localhost:4000/MELT/
   Server running... press ctrl-c to stop.

Access the site at: http://localhost:4000/MELT/

Alternative Serve Commands
~~~~~~~~~~~~~~~~~~~~~~~~~~

**Basic serve** (no live reload):

.. code-block:: bash

   bundle exec jekyll serve

**Development config** (if available):

.. code-block:: bash

   bundle exec jekyll serve --config _config.yml,_config_dev.yml

**Different port**:

.. code-block:: bash

   bundle exec jekyll serve --port 4001

**Incremental build** (faster rebuilds):

.. code-block:: bash

   bundle exec jekyll serve --incremental

Development Workflow
--------------------

Typical Development Cycle
~~~~~~~~~~~~~~~~~~~~~~~~~

1. **Start server**:

   .. code-block:: bash

      bundle exec jekyll serve -l

2. **Make changes** to source files:

   * Edit ``index.html`` for main page
   * Modify ``assets/js/molecular-lines.js`` for functionality
   * Update ``_sass/`` files for styling
   * Add data to ``assets/data/Pearse&Gaydon/``

3. **View changes**:

   * Browser auto-refreshes (with ``-l`` flag)
   * Or manually refresh: http://localhost:4000/MELT/

4. **Check for errors**:

   * Watch terminal for Jekyll build errors
   * Check browser console for JavaScript errors

5. **Commit changes**:

   .. code-block:: bash

      git add .
      git commit -m "Description of changes"

Auto-Rebuild Behavior
~~~~~~~~~~~~~~~~~~~~~

Jekyll automatically rebuilds when you modify:

* HTML files
* Markdown files
* Sass/SCSS files
* Data files (``_data/``)

**Manual rebuild required** for:

* ``_config.yml`` changes (restart server)
* New files in some directories

If changes don't appear:

1. Stop server (Ctrl+C)
2. Restart: ``bundle exec jekyll serve -l``

Directory Structure for Development
-----------------------------------

Key Files to Modify
~~~~~~~~~~~~~~~~~~~

**Frontend**:

* ``index.html`` - Main application page
* ``assets/js/molecular-lines.js`` - Core JavaScript
* ``assets/css/`` - Stylesheets

**Configuration**:

* ``_config.yml`` - Jekyll settings
* ``Gemfile`` - Ruby dependencies

**Data**:

* ``assets/data/Pearse&Gaydon/*.json`` - Emission line data

**Documentation**:

* ``README.md`` - Project documentation

Files to Avoid Modifying
~~~~~~~~~~~~~~~~~~~~~~~~~

* ``_site/`` - Generated output (deleted on rebuild)
* ``vendor/`` - Ruby gem dependencies
* ``Gemfile.lock`` - Locked dependency versions (auto-updated)
* ``_sass/minimal-mistakes/`` - Theme files (override instead)

Building for Production
------------------------

Production Build
~~~~~~~~~~~~~~~~

.. code-block:: bash

   JEKYLL_ENV=production bundle exec jekyll build

**Output**: ``_site/`` directory with optimized static files

**Differences from development**:

* Minified CSS/JS
* Compressed HTML
* Production analytics enabled
* Removed debug code

Testing Production Build Locally
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

   # Build production version
   JEKYLL_ENV=production bundle exec jekyll build

   # Serve from _site directory
   cd _site
   python3 -m http.server 8000

Access at: http://localhost:8000/MELT/

Deployment
~~~~~~~~~~

MELT is deployed via GitHub Pages:

1. Push changes to ``main`` branch
2. GitHub Actions automatically builds site
3. Deployed to ``gh-pages`` branch
4. Live at https://copland-yz.github.io/MELT/

**No manual deployment needed** - GitHub handles everything.

Testing and Debugging
---------------------

Testing Changes
~~~~~~~~~~~~~~~

**Manual testing checklist**:

* [ ] Search functionality works
* [ ] Element selection toggles correctly
* [ ] Range filters apply properly
* [ ] Spectrum generation displays chart
* [ ] Export buttons download files
* [ ] Mobile responsive layout works

Browser Developer Tools
~~~~~~~~~~~~~~~~~~~~~~~

**Open DevTools**:

* Chrome/Edge: F12 or Ctrl+Shift+I
* Firefox: F12 or Ctrl+Shift+I
* Safari: Cmd+Option+I

**Useful panels**:

* **Console**: View JavaScript errors and logs
* **Network**: Monitor data file loading
* **Elements**: Inspect HTML/CSS
* **Sources**: Debug JavaScript with breakpoints

Common Issues
~~~~~~~~~~~~~

**"Site not found" after server starts**:

* Check URL includes path: ``/MELT/``
* Verify baseurl in ``_config.yml``

**Changes not appearing**:

* Force refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
* Clear browser cache
* Restart Jekyll server

**JavaScript errors**:

* Check browser console for details
* Verify data files are loading (Network tab)
* Check for syntax errors in ``molecular-lines.js``

**Jekyll build errors**:

* Read error messages in terminal
* Check YAML frontmatter syntax
* Validate JSON data files

**Slow rebuild times**:

* Use ``--incremental`` flag
* Disable plugins temporarily
* Clear ``.jekyll-cache/``

Version Control Workflow
------------------------

Basic Git Workflow
~~~~~~~~~~~~~~~~~~

.. code-block:: bash

   # Check status
   git status

   # Stage changes
   git add <file>          # Specific file
   git add .               # All changes

   # Commit
   git commit -m "Descriptive message"

   # Push to GitHub
   git push origin main

Branching for Features
~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

   # Create feature branch
   git checkout -b feature-name

   # Make changes and commit
   git add .
   git commit -m "Add feature"

   # Push branch to GitHub
   git push origin feature-name

   # Create pull request on GitHub
   # After merge, update main
   git checkout main
   git pull origin main

Keeping Fork Updated
~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

   # Fetch upstream changes
   git fetch upstream

   # Merge into your main
   git checkout main
   git merge upstream/main

   # Push to your fork
   git push origin main

Code Formatting Standards
--------------------------

JavaScript
~~~~~~~~~~

* **Indentation**: 2 spaces
* **Semicolons**: Use consistently
* **Quotes**: Single quotes preferred
* **Functions**: Use descriptive names

HTML
~~~~

* **Indentation**: 2 spaces
* **Attributes**: Double quotes
* **Semantic tags**: Use appropriate HTML5 elements

CSS/Sass
~~~~~~~~

* **Indentation**: 2 spaces
* **Property order**: Alphabetical
* **Comments**: Explain complex styles

JSON
~~~~

* **Indentation**: 2 spaces
* **Encoding**: UTF-8
* **Validation**: Must be valid JSON

Performance Testing
-------------------

Load Time Testing
~~~~~~~~~~~~~~~~~

.. code-block:: bash

   # Using curl
   curl -w "@curl-format.txt" -o /dev/null -s "http://localhost:4000/MELT/"

Create ``curl-format.txt``:

.. code-block:: text

   time_namelookup:  %{time_namelookup}\n
   time_connect:     %{time_connect}\n
   time_total:       %{time_total}\n

Browser Performance
~~~~~~~~~~~~~~~~~~~

* **Chrome DevTools** → Performance tab
* Record page load
* Analyze bottlenecks

Lighthouse Audit
~~~~~~~~~~~~~~~~

* Chrome DevTools → Lighthouse tab
* Run audit
* Review performance metrics

Next Steps
----------

* Learn :doc:`adding-databases` to contribute data
* Read :doc:`contributing` guidelines
* Explore :doc:`../technical/architecture` for code structure

Contributing
============

We welcome contributions to MELT! This guide explains how to contribute effectively.

Ways to Contribute
-------------------

You can contribute by:

* **Adding spectroscopic databases** - New emission line data
* **Improving documentation** - Clarifications, examples, corrections
* **Reporting bugs** - Issues, errors, unexpected behavior
* **Suggesting features** - New functionality ideas
* **Improving code** - Bug fixes, optimizations, new features
* **Proofreading** - Grammar, spelling, clarity

All contributions are valuable and appreciated!

Getting Started
---------------

Before Contributing
~~~~~~~~~~~~~~~~~~~

1. **Check existing issues** - Your idea may already be discussed
2. **Read documentation** - Understand how MELT works
3. **Set up dev environment** - Follow :doc:`setup` guide
4. **Explore codebase** - Familiarize yourself with structure

Small vs. Large Contributions
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Small contributions** (typos, small bug fixes):

* Can submit PR directly
* Quick review and merge

**Large contributions** (new features, major changes):

* Open issue first to discuss
* Get feedback before implementing
* Coordinate with maintainers

Contributing Code
-----------------

Development Workflow
~~~~~~~~~~~~~~~~~~~~

1. **Fork repository**

   * Go to https://github.com/Copland-yz/MELT
   * Click "Fork" button

2. **Clone your fork**

   .. code-block:: bash

      git clone https://github.com/YOUR-USERNAME/MELT.git
      cd MELT

3. **Add upstream remote**

   .. code-block:: bash

      git remote add upstream https://github.com/Copland-yz/MELT.git

4. **Create feature branch**

   .. code-block:: bash

      git checkout -b descriptive-branch-name

5. **Make changes**

   * Edit code
   * Test thoroughly
   * Follow coding standards

6. **Commit changes**

   .. code-block:: bash

      git add .
      git commit -m "Clear, descriptive commit message"

7. **Push to your fork**

   .. code-block:: bash

      git push origin descriptive-branch-name

8. **Create Pull Request**

   * Go to your fork on GitHub
   * Click "New Pull Request"
   * Fill out PR template

Coding Standards
----------------

JavaScript
~~~~~~~~~~

**Style**:

* 2-space indentation
* Use semicolons
* Single quotes for strings
* Descriptive variable names

**Good example**:

.. code-block:: javascript

   function parseFormula(formula) {
     const elementRegex = /([A-Z][a-z]?)/g;
     const elements = formula.match(elementRegex) || [];
     return [...new Set(elements)];
   }

**Avoid**:

.. code-block:: javascript

   function parse(f) {
     var r=/([A-Z][a-z]?)/g
     return [...new Set(f.match(r)||[])]
   }

**Comments**:

.. code-block:: javascript

   // Good: Explain why, not what
   // Convert to nm for consistent internal representation
   const wavelengthNm = convertUnits(value, unit, 'nm');

   // Avoid: Obvious comments
   // Set x to 5
   const x = 5;

HTML
~~~~

* Semantic elements (``<section>``, ``<article>``, etc.)
* Proper indentation (2 spaces)
* Accessible markup (ARIA labels where needed)

CSS/Sass
~~~~~~~~

* Alphabetize properties
* Use CSS variables for colors
* Mobile-first responsive design

JSON Data
~~~~~~~~~

* 2-space indentation
* UTF-8 encoding
* Valid JSON syntax
* Follow schema (see :doc:`../technical/data-format`)

Commit Messages
---------------

Format
~~~~~~

.. code-block:: text

   Short summary (50 chars or less)

   More detailed explanation if needed. Wrap at 72 characters.
   Explain what changed and why, not how.

   - Bullet points are okay
   - Use present tense: "Add feature" not "Added feature"

**Good examples**:

.. code-block:: text

   Add OH molecule data from NIST database

   Fix spectrum generation for lines with missing intensity

   Update README with new citation format

**Avoid**:

.. code-block:: text

   fixed stuff
   Updates
   WIP

Pull Requests
-------------

PR Guidelines
~~~~~~~~~~~~~

**Title**: Clear, descriptive summary

**Description should include**:

* What changed
* Why you made the change
* Any relevant issue numbers (``Fixes #123``)
* Screenshots for UI changes
* Testing done

**Example PR description**:

.. code-block:: text

   ## Summary
   Add C2 Swan band data from Pearse & Gaydon

   ## Changes
   - Added C2.json with 156 emission lines
   - Updated data loader to include new file
   - Added test coverage for C2 searches

   ## Testing
   - [x] Lines appear in search results
   - [x] Spectrum generation works
   - [x] Export functionality tested
   - [x] JSON validates correctly

   ## Related Issues
   Addresses #42

PR Checklist
~~~~~~~~~~~~

Before submitting, ensure:

- [ ] Code follows project style guidelines
- [ ] All tests pass locally
- [ ] New code has been tested
- [ ] Documentation updated if needed
- [ ] Commit messages are clear
- [ ] No merge conflicts with main branch

Review Process
~~~~~~~~~~~~~~

1. **Automated checks** run (if configured)
2. **Maintainer review** (may request changes)
3. **Discussion** if needed
4. **Approval** and merge
5. **Deployment** (automatic via GitHub Pages)

**Be patient**: Reviews may take a few days

Contributing Data
-----------------

See detailed guide: :doc:`adding-databases`

**Quick checklist**:

- [ ] Data is from authoritative source
- [ ] Proper citation included
- [ ] JSON format validated
- [ ] Files tested in MELT
- [ ] README added for database
- [ ] No copyright violations

Reporting Bugs
--------------

Bug Report Template
~~~~~~~~~~~~~~~~~~~

When reporting bugs, include:

**Description**: Clear summary of the bug

**Steps to reproduce**:

1. Go to...
2. Click on...
3. Enter...
4. See error

**Expected behavior**: What should happen

**Actual behavior**: What actually happens

**Screenshots**: If applicable

**Environment**:

* Browser and version
* Operating system
* MELT URL (local or production)

**Additional context**: Any other relevant information

Example Bug Report
~~~~~~~~~~~~~~~~~~

.. code-block:: text

   ## Bug: Spectrum not generating for wavelengths > 1000 nm

   ### Description
   When selecting emission lines with wavelengths above 1000 nm,
   the spectrum generation fails silently.

   ### Steps to Reproduce
   1. Search for 1000-1500 nm
   2. Select CO lines
   3. Click "Generate Spectrum"
   4. No chart appears

   ### Expected
   Spectrum should display with proper scaling

   ### Actual
   Nothing happens, no error message

   ### Environment
   - Browser: Chrome 120
   - OS: Windows 11
   - URL: https://copland-yz.github.io/MELT/

   ### Screenshots
   [Attach if relevant]

Suggesting Features
-------------------

Feature Request Template
~~~~~~~~~~~~~~~~~~~~~~~~

**Feature description**: What should it do?

**Use case**: Who needs this and why?

**Examples**: How would it work?

**Alternatives**: Other ways to achieve this?

**Additional context**: Anything else?

Example Feature Request
~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: text

   ## Feature: Export spectrum data as CSV

   ### Description
   Add ability to export the generated spectrum (wavelength vs. intensity)
   as a CSV file.

   ### Use Case
   Researchers want to import synthetic spectra into other analysis
   tools for comparison with experimental data.

   ### Proposed Implementation
   Add "Download Spectrum CSV" button next to "Download PNG"

   ### Example Output
   ```
   Wavelength(nm),Intensity
   500.00,0.05
   500.25,0.08
   ...
   ```

   ### Alternatives
   Could use TXT format instead of CSV

Documentation Contributions
----------------------------

Documentation Needs
~~~~~~~~~~~~~~~~~~~

Help improve:

* Tutorials and examples
* API documentation
* Code comments
* User guides
* Screenshots and diagrams

Documentation Style
~~~~~~~~~~~~~~~~~~~

* **Clear and concise** - Avoid jargon
* **Step-by-step** - Number sequential steps
* **Examples** - Show don't just tell
* **Audience-appropriate** - Consider skill level

**Good example**:

.. code-block:: rst

   Converting CSV to JSON
   ~~~~~~~~~~~~~~~~~~~~~~

   Use this Python script to convert CSV files:

   .. code-block:: python

      import csv
      import json

      # Load CSV
      with open('data.csv') as f:
          reader = csv.DictReader(f)
          data = list(reader)

      # Save JSON
      with open('data.json', 'w') as f:
          json.dump(data, f, indent=2)

Community Guidelines
--------------------

Code of Conduct
~~~~~~~~~~~~~~~

* **Be respectful** - Treat others with kindness
* **Be constructive** - Provide helpful feedback
* **Be patient** - Remember maintainers are volunteers
* **Be inclusive** - Welcome all contributors
* **Be professional** - Keep discussions on-topic

Communication
~~~~~~~~~~~~~

* **GitHub Issues** - Bug reports, feature requests
* **Pull Requests** - Code review, discussion
* **Email** - chengzheng@wustl.edu for private matters

Response Times
~~~~~~~~~~~~~~

* **Issues**: Response within 1 week
* **Pull Requests**: Initial review within 1 week
* **Questions**: Best-effort basis

**Note**: This is a volunteer project, patience appreciated!

Recognition
-----------

Contributors are recognized:

* **Git commit history** - Permanent record
* **GitHub contributors page** - Automatic listing
* **README acknowledgments** - For significant contributions
* **Citation** - Major contributors added to citation

License
-------

By contributing, you agree:

* Your contributions will be under MIT License
* You have rights to contribute the content
* You've cited data sources appropriately

Getting Help
------------

If you need help contributing:

1. **Check documentation** - Most questions answered here
2. **Search existing issues** - May already be discussed
3. **Open new issue** - Ask your question
4. **Email maintainer** - For private inquiries

Maintainer Contact
~~~~~~~~~~~~~~~~~~

**Chengzheng (Copland) Yong**

* Email: chengzheng@wustl.edu
* GitHub: @Copland-yz
* Website: https://copland-yz.github.io

Contribution Ideas
------------------

Not sure what to work on? Try:

**Good first issues**:

* Fix typos in documentation
* Add examples to README
* Improve error messages
* Add unit tests

**Data contributions**:

* Add missing molecules from Pearse & Gaydon
* Contribute NIST ASD data
* Add Kurucz line lists

**Feature enhancements**:

* Improve mobile responsiveness
* Add keyboard shortcuts
* Enhance accessibility
* Performance optimizations

**Documentation**:

* More usage examples
* Video tutorials
* API documentation
* Troubleshooting guide

Thank You!
----------

Thank you for contributing to MELT! Your contributions help the scientific community access and analyze spectroscopic data more effectively.

Every contribution, no matter how small, is valuable and appreciated.

Next Steps
----------

* Set up :doc:`setup` development environment
* Learn about :doc:`adding-databases`
* Explore :doc:`../technical/architecture`

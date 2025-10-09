Searching Lines
===============

This guide covers advanced techniques for searching molecular emission lines effectively.

Basic Search Strategies
-----------------------

Targeted Element Search
~~~~~~~~~~~~~~~~~~~~~~~

When you know what molecules you're looking for:

1. Select only the elements in your target molecules
2. Use a broad wavelength range initially
3. Refine the range based on results

**Example**: Finding OH radicals

* Include: O, H
* Range: 200-400 nm (UV region where OH is strong)

Broad Survey Search
~~~~~~~~~~~~~~~~~~~

When exploring unknown spectra:

1. Set a moderate wavelength range (50-100 nm)
2. Don't select any elements initially (or select many)
3. Review results to identify patterns
4. Refine search based on findings

Exclusion Strategy
~~~~~~~~~~~~~~~~~~

When you want to exclude contaminants:

1. Exclude known contaminant elements (e.g., N₂ from air)
2. Include target elements
3. Search in relevant wavelength range

**Example**: Looking for metal oxides without nitrogen

* Include: Desired metal elements, O
* Exclude: N
* Range: Based on your detector range

Advanced Filtering Techniques
-----------------------------

Multi-Element Inclusion
~~~~~~~~~~~~~~~~~~~~~~~

You can combine multiple elements to find complex molecules:

* Include C, H, O → Find organic molecules (CH, CO, OH, CHO, etc.)
* Include Fe, O → Find iron oxide lines
* Include multiple metals → Survey metal-containing species

**Note**: Including elements uses OR logic - molecules need only contain at least one of the selected elements (if any of them are in include mode).

Element Exclusion
~~~~~~~~~~~~~~~~~

Exclusion is powerful for removing unwanted species:

* Exclude N → Remove N₂, NO, CN lines (air contaminants)
* Exclude H → Focus only on non-hydrogen species
* Exclude multiple → Remove all molecules containing any excluded elements

**Logic**: Excluding an element removes ANY molecule containing that element.

Wavelength Range Strategies
---------------------------

Unit Selection
~~~~~~~~~~~~~~

Choose the most convenient unit for your application:

**Nanometers (nm)**

* Best for UV-Visible-NIR work
* Range: ~200-2000 nm typically
* Most intuitive for optical spectroscopy

**Ångström (Å)**

* Traditional unit in atomic spectroscopy
* 1 nm = 10 Å
* Common in older spectroscopic literature

**Micrometers (μm)**

* Preferred for infrared spectroscopy
* Range: ~1-20 μm for mid-IR
* Convenient for larger wavelengths

**Gigahertz (GHz)**

* Used in radio/microwave spectroscopy
* Good for rotational transitions
* Direct frequency measurement

**Wavenumber (cm⁻¹)**

* Standard in IR spectroscopy and computational chemistry
* Proportional to energy
* Range: ~4000-400 cm⁻¹ for mid-IR

Optimal Range Sizing
~~~~~~~~~~~~~~~~~~~~

**For performance**:

* Small ranges (<50 nm): Fastest searches
* Medium ranges (50-100 nm): Good balance
* Large ranges (>100 nm): May be slower

**For completeness**:

* Start broad to survey available data
* Narrow down to region of interest
* Consider using multiple searches for very wide ranges

**Tips**:

* UV region: 200-400 nm (high energy, many molecular transitions)
* Visible: 400-700 nm (easy to observe)
* NIR: 700-2500 nm (overtones and combinations)
* IR: >2500 nm or <4000 cm⁻¹ (molecular vibrations)

Search Result Interpretation
----------------------------

Understanding Match Counts
~~~~~~~~~~~~~~~~~~~~~~~~~~

* **No results**: Try expanding wavelength range or removing element filters
* **Too many results**: Add element filters or narrow wavelength range
* **Expected results**: 10-100 lines is usually manageable

Identifying Strong Lines
~~~~~~~~~~~~~~~~~~~~~~~~

When intensity data is available:

* Look for high intensity values
* These are typically the easiest to observe
* Strong lines are better for calibration

When intensity is not available:

* Check spectroscopic system names
* Ground state transitions are usually strong
* Consult source references for more information

Verifying Molecules
~~~~~~~~~~~~~~~~~~~

Always verify the molecule column:

* Ensure molecules match your expected chemistry
* Check for unexpected species (may indicate contamination)
* Consider both expected and potential byproducts

Practical Search Examples
--------------------------

Example 1: LIBS Carbon Detection
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Goal**: Find C₂ Swan bands around 516 nm

**Search parameters**:

* Include: C
* Exclude: (none)
* Range: 470-570 nm
* Unit: nm

**Expected**: C₂ lines in the blue-green region, including the prominent d³Πg-a³Πu Swan system

Example 2: Plasma OH Diagnostics
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Goal**: Find OH A-X system for temperature measurement

**Search parameters**:

* Include: O, H
* Exclude: N, C
* Range: 280-320 nm
* Unit: nm

**Expected**: OH A²Σ-X²Π bands around 308 nm

Example 3: Astronomical CO Observations
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Goal**: Find CO Fourth Positive system in UV

**Search parameters**:

* Include: C, O
* Exclude: H, N
* Range: 140-200 nm
* Unit: nm

**Expected**: CO A¹Π-X¹Σ⁺ bands

Example 4: Infrared Spectroscopy
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Goal**: Survey molecular vibrations in mid-IR

**Search parameters**:

* Include: (based on sample)
* Exclude: (contaminants)
* Range: 2000-4000 cm⁻¹
* Unit: cm⁻¹

**Expected**: Fundamental vibrational transitions

Troubleshooting Searches
------------------------

Problem: No Results Found
~~~~~~~~~~~~~~~~~~~~~~~~~

**Possible causes**:

* Wavelength range too narrow
* Elements excluded by mistake
* No data available in this region

**Solutions**:

* Expand wavelength range
* Reset all element filters (click elements until gray)
* Check if you're using the correct units
* Verify range values (min < max)

Problem: Too Many Results
~~~~~~~~~~~~~~~~~~~~~~~~~~

**Solutions**:

* Narrow wavelength range (try ±25 nm around center)
* Add element filters to focus on specific molecules
* Split search into smaller wavelength chunks

Problem: Expected Lines Missing
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Possible causes**:

* Lines outside search range
* Element filtering too restrictive
* Data not in database

**Solutions**:

* Expand wavelength range
* Review element filters (check for accidental exclusions)
* Consult source references
* Consider adding database (see :doc:`../development/adding-databases`)

Problem: Unexpected Molecules
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Could indicate**:

* Contamination in sample
* Atmospheric absorption/emission
* Database includes related species

**Actions**:

* Use exclusion filters to remove unwanted species
* Document unexpected findings
* Consider physical source of these molecules

Performance Optimization
------------------------

For Large Searches
~~~~~~~~~~~~~~~~~~

* Break very wide ranges into smaller chunks
* Use element filtering to reduce search space
* Close other browser tabs to free memory

For Repeated Searches
~~~~~~~~~~~~~~~~~~~~~

* Browser may cache data for faster subsequent searches
* Keep the page open if doing multiple searches
* Refresh page if experiencing slowdowns

Best Practices
--------------

Scientific Workflow
~~~~~~~~~~~~~~~~~~~

1. **Plan**: Define your wavelength region and expected molecules
2. **Search**: Start with broad parameters
3. **Refine**: Narrow based on results
4. **Verify**: Cross-reference with source literature
5. **Document**: Export results for your records

Data Management
~~~~~~~~~~~~~~~

* Export search results for each configuration
* Name files systematically (e.g., "CO_500-520nm_2025-10-08.csv")
* Keep notes on element filters and ranges used
* Reference the database source in your work

Quality Control
~~~~~~~~~~~~~~~

* Always check molecule column for unexpected species
* Verify wavelengths match your expected range
* Compare with literature values when available
* Use multiple searches to ensure completeness

Next Steps
----------

* Learn about :doc:`spectrum-generation` from search results
* Understand :doc:`data-export` options
* Explore :doc:`../technical/data-format` for database structure

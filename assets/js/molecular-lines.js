// Periodic table data (symbol, atomic number, name)
const elements = [
    ['H', 1, 'Hydrogen'], ['He', 2, 'Helium'],
    ['Li', 3, 'Lithium'], ['Be', 4, 'Beryllium'], ['B', 5, 'Boron'], ['C', 6, 'Carbon'], ['N', 7, 'Nitrogen'], ['O', 8, 'Oxygen'], ['F', 9, 'Fluorine'], ['Ne', 10, 'Neon'],
    ['Na', 11, 'Sodium'], ['Mg', 12, 'Magnesium'], ['Al', 13, 'Aluminum'], ['Si', 14, 'Silicon'], ['P', 15, 'Phosphorus'], ['S', 16, 'Sulfur'], ['Cl', 17, 'Chlorine'], ['Ar', 18, 'Argon'],
    ['K', 19, 'Potassium'], ['Ca', 20, 'Calcium'], ['Sc', 21, 'Scandium'], ['Ti', 22, 'Titanium'], ['V', 23, 'Vanadium'], ['Cr', 24, 'Chromium'], ['Mn', 25, 'Manganese'], ['Fe', 26, 'Iron'], ['Co', 27, 'Cobalt'], ['Ni', 28, 'Nickel'], ['Cu', 29, 'Copper'], ['Zn', 30, 'Zinc'], ['Ga', 31, 'Gallium'], ['Ge', 32, 'Germanium'], ['As', 33, 'Arsenic'], ['Se', 34, 'Selenium'], ['Br', 35, 'Bromine'], ['Kr', 36, 'Krypton'],
    ['Rb', 37, 'Rubidium'], ['Sr', 38, 'Strontium'], ['Y', 39, 'Yttrium'], ['Zr', 40, 'Zirconium'], ['Nb', 41, 'Niobium'], ['Mo', 42, 'Molybdenum'], ['Tc', 43, 'Technetium'], ['Ru', 44, 'Ruthenium'], ['Rh', 45, 'Rhodium'], ['Pd', 46, 'Palladium'], ['Ag', 47, 'Silver'], ['Cd', 48, 'Cadmium'], ['In', 49, 'Indium'], ['Sn', 50, 'Tin'], ['Sb', 51, 'Antimony'], ['Te', 52, 'Tellurium'], ['I', 53, 'Iodine'], ['Xe', 54, 'Xenon'],
    ['Cs', 55, 'Cesium'], ['Ba', 56, 'Barium'], ['La', 57, 'Lanthanum'], ['Ce', 58, 'Cerium'], ['Pr', 59, 'Praseodymium'], ['Nd', 60, 'Neodymium'], ['Pm', 61, 'Promethium'], ['Sm', 62, 'Samarium'], ['Eu', 63, 'Europium'], ['Gd', 64, 'Gadolinium'], ['Tb', 65, 'Terbium'], ['Dy', 66, 'Dysprosium'], ['Ho', 67, 'Holmium'], ['Er', 68, 'Erbium'], ['Tm', 69, 'Thulium'], ['Yb', 70, 'Ytterbium'], ['Lu', 71, 'Lutetium'], ['Hf', 72, 'Hafnium'], ['Ta', 73, 'Tantalum'], ['W', 74, 'Tungsten'], ['Re', 75, 'Rhenium'], ['Os', 76, 'Osmium'], ['Ir', 77, 'Iridium'], ['Pt', 78, 'Platinum'], ['Au', 79, 'Gold'], ['Hg', 80, 'Mercury'], ['Tl', 81, 'Thallium'], ['Pb', 82, 'Lead'], ['Bi', 83, 'Bismuth'], ['Po', 84, 'Polonium'], ['At', 85, 'Astatine'], ['Rn', 86, 'Radon'],
    ['Fr', 87, 'Francium'], ['Ra', 88, 'Radium'], ['Ac', 89, 'Actinium'], ['Th', 90, 'Thorium'], ['Pa', 91, 'Protactinium'], ['U', 92, 'Uranium'], ['Np', 93, 'Neptunium'], ['Pu', 94, 'Plutonium'], ['Am', 95, 'Americium'], ['Cm', 96, 'Curium'], ['Bk', 97, 'Berkelium'], ['Cf', 98, 'Californium'], ['Es', 99, 'Einsteinium'], ['Fm', 100, 'Fermium'], ['Md', 101, 'Mendelevium'], ['No', 102, 'Nobelium'], ['Lr', 103, 'Lawrencium'], ['Rf', 104, 'Rutherfordium'], ['Db', 105, 'Dubnium'], ['Sg', 106, 'Seaborgium'], ['Bh', 107, 'Bohrium'], ['Hs', 108, 'Hassium'], ['Mt', 109, 'Meitnerium'], ['Ds', 110, 'Darmstadtium'], ['Rg', 111, 'Roentgenium'], ['Cn', 112, 'Copernicium'], ['Nh', 113, 'Nihonium'], ['Fl', 114, 'Flerovium'], ['Mc', 115, 'Moscovium'], ['Lv', 116, 'Livermorium'], ['Ts', 117, 'Tennessine'], ['Og', 118, 'Oganesson']
];

// Periodic table layout (positions for each element)
const layout = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6, 7, 8, 9, 10],
    [11, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
    [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
    [55, 56, 57, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86],
    [87, 88, 89, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 0],
    [0, 0, 0, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 0]
];

let elementStates = {}; // Track element states: 0=none, 1=included, 2=excluded
let molecularDatabase = []; // Store all molecular line data
let isDataLoaded = false;
let currentSearchResults = []; // Store current search results for downloading
let selectedLines = []; // Store selected lines for spectrum generation
let spectrumChart = null; // Store chart instance

// Function to parse molecular formula and extract elements
function parseElements(molecule) {
    const elements = [];
    const regex = /([A-Z][a-z]?)(\d*)/g;
    let match;
    
    while ((match = regex.exec(molecule)) !== null) {
        elements.push(match[1]); // Add element symbol
    }
    
    return [...new Set(elements)]; // Remove duplicates
}

// Function to load molecular database
async function loadMolecularDatabase() {
    if (isDataLoaded) return;
    
    const resultsDiv = document.getElementById('search-results');
    resultsDiv.innerHTML = '<p>Loading molecular line database...</p>';
    
    try {
        // Get the base path for the site
        const basePath = document.querySelector('meta[name="base-path"]')?.getAttribute('content') || '';
        
        // List of all JSON files to load
        const pearsePaths = [];
        for (let i = 100; i <= 368; i++) {
            if (i !== 360) { // Skip missing page
                pearsePaths.push(`${basePath}/assets/data/Pearse&Gaydon/page_${i}.json`);
            }
        }
        pearsePaths.push(`${basePath}/assets/data/Pearse&Gaydon/pages_029_099.json`);
        
        const allPaths = pearsePaths;
        
        // Load all files in parallel
        const promises = allPaths.map(async (path) => {
            try {
                const response = await fetch(path);
                if (response.ok) {
                    const data = await response.json();
                    return data.map(entry => ({
                        ...entry,
                        elements: parseElements(entry.molecule),
                        frequency_ghz: entry.wavelength_nm ? (299792458 / (entry.wavelength_nm * 1e-9)) / 1e9 : null
                    }));
                }
                return [];
            } catch (error) {
                console.warn(`Failed to load ${path}:`, error);
                return [];
            }
        });
        
        const results = await Promise.all(promises);
        molecularDatabase = results.flat();
        isDataLoaded = true;
        
        resultsDiv.innerHTML = `<p>Database loaded successfully! ${molecularDatabase.length} molecular lines available.</p>`;
        
    } catch (error) {
        console.error('Error loading database:', error);
        resultsDiv.innerHTML = '<p>Error loading molecular line database. Please try again.</p>';
    }
}

function generatePeriodicTable() {
    const table = document.getElementById('periodic-table');
    if (!table) {
        return;
    }
    table.innerHTML = '';
    
    layout.forEach(row => {
        row.forEach(atomicNumber => {
            if (atomicNumber === 0) {
                // Empty cell
                const emptyCell = document.createElement('div');
                emptyCell.className = 'empty-cell';
                table.appendChild(emptyCell);
            } else {
                // Element cell
                const element = elements[atomicNumber - 1];
                const elementDiv = document.createElement('div');
                elementDiv.className = 'element';
                elementDiv.setAttribute('data-atomic-number', atomicNumber);
                elementDiv.title = element[2]; // Element name
                
                elementDiv.innerHTML = `
                    <div class="number">${atomicNumber}</div>
                    <div class="symbol">${element[0]}</div>
                `;
                
                elementDiv.onclick = () => toggleElement(atomicNumber, elementDiv);
                table.appendChild(elementDiv);
            }
        });
    });
}

function toggleElement(atomicNumber, elementDiv) {
    const currentState = elementStates[atomicNumber] || 0;
    const newState = (currentState + 1) % 3; // Cycle through 0, 1, 2
    
    elementStates[atomicNumber] = newState;
    
    // Update visual state
    elementDiv.classList.remove('included', 'excluded');
    if (newState === 1) {
        elementDiv.classList.add('included');
    } else if (newState === 2) {
        elementDiv.classList.add('excluded');
    }
}

function resetElements() {
    elementStates = {};
    document.querySelectorAll('.element').forEach(el => {
        el.classList.remove('included', 'excluded');
    });
}

async function performSearch() {
    // Load database if not already loaded
    if (!isDataLoaded) {
        await loadMolecularDatabase();
    }
    
    // Clear previous selections
    clearSelectedLines();
    
    const wavelengthMin = parseFloat(document.getElementById('wavelength-min').value) || null;
    const wavelengthMax = parseFloat(document.getElementById('wavelength-max').value) || null;
    const frequencyMin = parseFloat(document.getElementById('frequency-min').value) || null;
    const frequencyMax = parseFloat(document.getElementById('frequency-max').value) || null;
    
    // Determine which columns to show based on user input
    const hasWavelengthFilter = wavelengthMin !== null || wavelengthMax !== null;
    const hasFrequencyFilter = frequencyMin !== null || frequencyMax !== null;
    const showWavelength = !hasFrequencyFilter || hasWavelengthFilter;
    const showFrequency = !hasWavelengthFilter || hasFrequencyFilter;
    
    // Get selected elements
    const includedElements = [];
    const excludedElements = [];
    
    Object.keys(elementStates).forEach(atomicNumber => {
        const element = elements[atomicNumber - 1];
        if (elementStates[atomicNumber] === 1) {
            includedElements.push(element[0]);
        } else if (elementStates[atomicNumber] === 2) {
            excludedElements.push(element[0]);
        }
    });
    
    // Filter the database
    let filteredResults = molecularDatabase.filter(entry => {
        // Element filtering
        if (includedElements.length > 0) {
            const hasAllIncluded = includedElements.every(el => entry.elements.includes(el));
            if (!hasAllIncluded) return false;
        }
        
        if (excludedElements.length > 0) {
            const hasAnyExcluded = excludedElements.some(el => entry.elements.includes(el));
            if (hasAnyExcluded) return false;
        }
        
        // Wavelength filtering
        if (wavelengthMin !== null && entry.wavelength_nm < wavelengthMin) return false;
        if (wavelengthMax !== null && entry.wavelength_nm > wavelengthMax) return false;
        
        // Frequency filtering  
        if (frequencyMin !== null && entry.frequency_ghz && entry.frequency_ghz < frequencyMin) return false;
        if (frequencyMax !== null && entry.frequency_ghz && entry.frequency_ghz > frequencyMax) return false;
        
        
        return true;
    });
    
    // Sort by wavelength
    filteredResults.sort((a, b) => a.wavelength_nm - b.wavelength_nm);
    
    // Store current search results for downloading
    currentSearchResults = filteredResults;
    
    // Limit results to prevent performance issues
    const maxResults = 1000;
    const displayResults = filteredResults.slice(0, maxResults);
    
    // Display results
    const resultsDiv = document.getElementById('search-results');
    
    if (displayResults.length === 0) {
        resultsDiv.innerHTML = `
            <h4>No Results Found</h4>
            <p>No molecular lines match your search criteria. Try adjusting your parameters.</p>
            <div style="background: white; padding: 15px; border-radius: 5px; margin-top: 10px;">
                <h5>Search Parameters:</h5>
                <ul>
                    ${wavelengthMin || wavelengthMax ? `<li><strong>Wavelength:</strong> ${wavelengthMin || '∞'} - ${wavelengthMax || '∞'} nm</li>` : ''}
                    ${frequencyMin || frequencyMax ? `<li><strong>Frequency:</strong> ${frequencyMin || '∞'} - ${frequencyMax || '∞'} GHz</li>` : ''}
                    ${includedElements.length ? `<li><strong>Must include elements:</strong> ${includedElements.join(', ')}</li>` : ''}
                    ${excludedElements.length ? `<li><strong>Must exclude elements:</strong> ${excludedElements.join(', ')}</li>` : ''}
                </ul>
            </div>
        `;
        return;
    }
    
    resultsDiv.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
            <h4>Search Results (${displayResults.length}${filteredResults.length > maxResults ? ` of ${filteredResults.length}` : ''} lines found)</h4>
            <div class="download-buttons" style="display: flex; gap: 10px;">
                <button onclick="downloadTXT()" style="background: #4CAF50; color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer; font-size: 14px; font-weight: bold;">Download TXT</button>
                <button onclick="downloadCSV()" style="background: #2196F3; color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer; font-size: 14px; font-weight: bold;">Download CSV</button>
            </div>
        </div>
        <div style="background: white; padding: 15px; border-radius: 5px; margin-top: 10px; overflow-x: auto; max-height: 600px; overflow-y: auto;">
            <table style="width: 100%; border-collapse: collapse;">
                <thead>
                    <tr style="background: #f0f0f0; position: sticky; top: 0;">
                        <th style="padding: 8px; border: 1px solid #ddd; text-align: center; width: 50px;">Select</th>
                        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Molecule</th>
                        ${showWavelength ? '<th style="padding: 8px; border: 1px solid #ddd; text-align: right;">λ (nm)</th>' : ''}
                        ${showFrequency ? '<th style="padding: 8px; border: 1px solid #ddd; text-align: right;">ν (GHz)</th>' : ''}
                        <th style="padding: 8px; border: 1px solid #ddd; text-align: center;">Intensity</th>
                        <th style="padding: 8px; border: 1px solid #ddd; text-align: left; width: 18%;">System</th>
                        <th style="padding: 8px; border: 1px solid #ddd; text-align: left; width: 12%;">Page</th>
                    </tr>
                </thead>
                <tbody>
                    ${displayResults.map((entry, index) => `
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">
                                <input type="checkbox" onchange="toggleLineSelection(${index}, this)" style="transform: scale(1.2);">
                            </td>
                            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">${entry.molecule}</td>
                            ${showWavelength ? `<td style="padding: 8px; border: 1px solid #ddd; text-align: right;">${entry.wavelength_nm.toFixed(2)}</td>` : ''}
                            ${showFrequency ? `<td style="padding: 8px; border: 1px solid #ddd; text-align: right;">${entry.frequency_ghz ? entry.frequency_ghz.toFixed(1) : 'N/A'}</td>` : ''}
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${entry.intensity}</td>
                            <td style="padding: 8px; border: 1px solid #ddd; word-wrap: break-word; white-space: normal; max-width: 120px;">${entry.system || 'N/A'}</td>
                            <td style="padding: 8px; border: 1px solid #ddd; font-size: 13px;">${entry.page || 'N/A'}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
        ${filteredResults.length > maxResults ? `<p><em>Showing first ${maxResults} results. Refine your search to see more specific results.</em></p>` : ''}
    `;
}

// Function to toggle the About section
function toggleAbout() {
    const aboutContent = document.getElementById('about-content');
    aboutContent.classList.toggle('expanded');
}

// Function to download search results as TXT
function downloadTXT() {
    if (!currentSearchResults || currentSearchResults.length === 0) {
        alert('No search results to download. Please perform a search first.');
        return;
    }
    
    let content = 'Molecular Emission Lines Search Results\n';
    content += '=====================================\n';
    content += `Total Results: ${currentSearchResults.length}\n`;
    content += `Generated: ${new Date().toISOString()}\n\n`;
    
    content += 'Molecule\tWavelength (nm)\tFrequency (GHz)\tIntensity\tSystem\tPage\n';
    content += '--------\t---------------\t---------------\t---------\t------\t----\n';
    
    currentSearchResults.forEach(entry => {
        content += `${entry.molecule}\t${entry.wavelength_nm.toFixed(2)}\t${entry.frequency_ghz ? entry.frequency_ghz.toFixed(1) : 'N/A'}\t${entry.intensity}\t${entry.system || 'N/A'}\t${entry.page || 'N/A'}\n`;
    });
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `molecular_emission_lines_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

// Function to download search results as CSV
function downloadCSV() {
    if (!currentSearchResults || currentSearchResults.length === 0) {
        alert('No search results to download. Please perform a search first.');
        return;
    }
    
    let csvContent = 'Molecule,Wavelength (nm),Frequency (GHz),Intensity,System,Page\n';
    
    currentSearchResults.forEach(entry => {
        const molecule = `"${entry.molecule}"`;
        const wavelength = entry.wavelength_nm.toFixed(2);
        const frequency = entry.frequency_ghz ? entry.frequency_ghz.toFixed(1) : '';
        const intensity = `"${entry.intensity}"`;
        const system = `"${entry.system || ''}"`;
        const page = `"${entry.page || ''}"`;
        
        csvContent += `${molecule},${wavelength},${frequency},${intensity},${system},${page}\n`;
    });
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `molecular_emission_lines_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

// Function to toggle line selection
function toggleLineSelection(index, checkbox) {
    console.log('Toggle line selection called:', index, checkbox.checked);
    
    const displayResults = currentSearchResults.slice(0, 1000); // Get displayed results
    const line = displayResults[index];
    
    if (!line) {
        console.error('Line not found at index:', index);
        return;
    }
    
    console.log('Line at index', index, ':', line);
    
    if (checkbox.checked) {
        // Add to selected lines
        if (!selectedLines.find(l => l.wavelength_nm === line.wavelength_nm && l.molecule === line.molecule)) {
            selectedLines.push(line);
            console.log('Added line to selection:', line.molecule, line.wavelength_nm);
        }
    } else {
        // Remove from selected lines
        selectedLines = selectedLines.filter(l => !(l.wavelength_nm === line.wavelength_nm && l.molecule === line.molecule));
        console.log('Removed line from selection:', line.molecule, line.wavelength_nm);
    }
    
    console.log('Total selected lines now:', selectedLines.length);
    updateSelectedLinesDisplay();
}

// Function to update the selected lines display
function updateSelectedLinesDisplay() {
    document.getElementById('selected-count').textContent = selectedLines.length;
    
    // Show/hide spectrum section based on selection
    if (selectedLines.length > 0) {
        document.getElementById('spectrum-section').style.display = 'block';
    } else {
        document.getElementById('spectrum-section').style.display = 'none';
    }
}

// Function to clear selected lines
function clearSelectedLines() {
    selectedLines = [];
    // Uncheck all checkboxes
    document.querySelectorAll('#search-results input[type="checkbox"]').forEach(cb => {
        cb.checked = false;
    });
    updateSelectedLinesDisplay();
    
    // Clear chart
    if (spectrumChart) {
        spectrumChart.destroy();
        spectrumChart = null;
        document.getElementById('download-spectrum-btn').style.display = 'none';
    }
}

// Function to parse intensity value
function parseIntensity(intensityStr) {
    // Check for null, undefined, or empty values first
    if (!intensityStr || intensityStr === 'N/A') {
        return null;
    }
    
    // Convert to string and handle the case where it might not be a string
    let cleanStr;
    try {
        cleanStr = intensityStr.toString().trim();
    } catch (e) {
        console.warn('Could not convert intensity to string:', intensityStr);
        return null;
    }
    
    // Check for null string
    if (cleanStr.toLowerCase() === 'null' || cleanStr === '') {
        return null;
    }
    
    // If it's a number, return it
    const num = parseFloat(cleanStr);
    if (!isNaN(num)) {
        return num;
    }
    
    // Handle relative intensities (like "w", "m", "s", "vs")
    const intensityMap = {
        'w': 1,      // weak
        'weak': 1,
        'm': 3,      // medium
        'med': 3,
        'medium': 3,
        's': 5,      // strong
        'str': 5,
        'strong': 5,
        'vs': 8,     // very strong
        'vstrong': 8,
        'vvs': 10    // very very strong
    };
    
    const lower = cleanStr.toLowerCase();
    if (intensityMap[lower] !== undefined) {
        return intensityMap[lower];
    }
    
    // If we can't parse it, return null
    console.warn('Could not parse intensity:', intensityStr, 'type:', typeof intensityStr);
    return null;
}

// Function to generate spectrum
function generateSpectrum() {
    console.log('Generate spectrum called, selected lines:', selectedLines.length);
    
    if (selectedLines.length === 0) {
        alert('Please select at least one line to generate a spectrum.');
        return;
    }
    
    // Debug: Log selected lines
    console.log('Selected lines:', selectedLines);
    
    // Check for null intensities
    const invalidLines = selectedLines.filter(line => parseIntensity(line.intensity) === null);
    if (invalidLines.length > 0) {
        const invalidMolecules = invalidLines.map(line => `${line.molecule} (${line.wavelength_nm}nm)`).join(', ');
        alert(`Cannot generate spectrum: The following lines have null/invalid intensity values: ${invalidMolecules}. Please deselect these lines or choose different ones.`);
        return;
    }
    
    // Get peak width from user input
    const peakWidth = parseFloat(document.getElementById('peak-width').value) || 0.5;
    console.log('Using peak width:', peakWidth, 'nm');
    
    // Prepare discrete line data
    const discreteLines = selectedLines.map(line => {
        const intensity = parseIntensity(line.intensity);
        console.log(`Processing line: ${line.molecule} at ${line.wavelength_nm}nm, intensity: ${line.intensity} -> ${intensity}`);
        return {
            x: line.wavelength_nm,
            y: intensity,
            molecule: line.molecule,
            system: line.system || 'N/A'
        };
    }).sort((a, b) => a.x - b.x);
    
    console.log('Discrete lines prepared:', discreteLines);
    
    // Generate continuous spectrum
    const continuousSpectrum = generateContinuousSpectrum(discreteLines, peakWidth);
    console.log('Continuous spectrum generated with', continuousSpectrum.length, 'points');
    
    // Debug: Show min/max values in continuous spectrum
    if (continuousSpectrum.length > 0) {
        const intensities = continuousSpectrum.map(p => p.y);
        const maxIntensity = Math.max(...intensities);
        const minIntensity = Math.min(...intensities);
        console.log('Continuous spectrum intensity range:', minIntensity, 'to', maxIntensity);
        
        // Find peaks in continuous spectrum
        const peaks = continuousSpectrum.filter(p => p.y > maxIntensity * 0.1);
        console.log('Number of significant points (>10% max):', peaks.length);
    }
    
    // Create the chart
    try {
        createSpectrumChart(continuousSpectrum, discreteLines);
        console.log('Chart created successfully');
        
        // Show download button
        document.getElementById('download-spectrum-btn').style.display = 'inline-block';
    } catch (error) {
        console.error('Error creating chart:', error);
        alert('Error creating spectrum chart. Please check the browser console for details.');
    }
}

// Function to wait for Chart.js to load
function waitForChart(callback) {
    if (typeof Chart !== 'undefined') {
        callback();
    } else {
        console.log('Waiting for Chart.js to load...');
        setTimeout(() => waitForChart(callback), 100);
    }
}

// Function to generate Gaussian peak
function gaussian(x, center, amplitude, sigma) {
    const exponent = -0.5 * Math.pow((x - center) / sigma, 2);
    const result = amplitude * Math.exp(exponent);
    // Debug first few calls
    if (Math.random() < 0.001) { // Log 0.1% of calls randomly
        console.log(`Gaussian: x=${x.toFixed(2)}, center=${center.toFixed(2)}, amp=${amplitude}, sigma=${sigma.toFixed(3)} -> ${result.toFixed(4)}`);
    }
    return result;
}

// Function to generate continuous spectrum from discrete lines
function generateContinuousSpectrum(lines, peakWidth) {
    if (lines.length === 0) return [];
    
    console.log('Generating continuous spectrum for lines:', lines);
    console.log('Peak width:', peakWidth);
    
    // Find wavelength range
    const wavelengths = lines.map(line => line.x);
    const minWave = Math.min(...wavelengths) - peakWidth * 3;
    const maxWave = Math.max(...wavelengths) + peakWidth * 3;
    
    console.log('Wavelength range:', minWave, 'to', maxWave);
    
    // Generate fine wavelength grid (0.01 nm resolution for high quality)
    const resolution = 0.01;
    const numPoints = Math.floor((maxWave - minWave) / resolution);
    const spectrumData = [];
    
    // Convert peak width (FWHM) to sigma for Gaussian
    const sigma = peakWidth / (2 * Math.sqrt(2 * Math.log(2))); // FWHM to sigma conversion
    
    console.log('Sigma for Gaussian:', sigma);
    console.log('Number of points to generate:', numPoints);
    
    for (let i = 0; i <= numPoints; i++) {
        const wavelength = minWave + i * resolution;
        let intensity = 0;
        
        // Sum contributions from all lines
        lines.forEach(line => {
            const contribution = gaussian(wavelength, line.x, line.y, sigma);
            intensity += contribution;
        });
        
        spectrumData.push({ x: wavelength, y: intensity });
        
        // Log some sample points
        if (i < 5 || i % 50 === 0) {
            console.log(`Point ${i}: wavelength=${wavelength.toFixed(2)}, intensity=${intensity.toFixed(4)}`);
        }
    }
    
    console.log('Generated spectrum with', spectrumData.length, 'points');
    console.log('Sample spectrum data:', spectrumData.slice(0, 10));
    
    return spectrumData;
}

// Function to create spectrum chart
function createSpectrumChart(continuousData, discreteLines) {
    console.log('Creating spectrum chart with continuous data:', continuousData.length, 'points');
    console.log('Discrete lines:', discreteLines);
    
    // Wait for Chart.js to be available
    waitForChart(() => {
        const canvas = document.getElementById('spectrum-chart');
        if (!canvas) {
            console.error('Canvas element not found');
            alert('Error: Chart canvas not found');
            return;
        }
        
        const ctx = canvas.getContext('2d');
        console.log('Canvas context obtained:', ctx);
        
        // Destroy existing chart
        if (spectrumChart) {
            console.log('Destroying existing chart');
            spectrumChart.destroy();
        }
        
        // Ensure canvas has proper dimensions
        canvas.style.width = '100%';
        canvas.style.height = '400px';
        
        // Prepare datasets
        const datasets = [];
        
        // Add continuous spectrum first
        if (continuousData && continuousData.length > 0) {
            console.log('Adding continuous spectrum dataset with', continuousData.length, 'points');
            datasets.push({
                label: 'Example Spectrum',
                data: continuousData,
                backgroundColor: 'rgba(255, 87, 34, 0.1)',
                borderColor: '#FF5722',
                borderWidth: 2,
                pointRadius: 0,
                pointHoverRadius: 0,
                showLine: true,
                tension: 0,
                fill: false,
                type: 'line'
            });
        } else {
            console.warn('No continuous data to display');
        }
        
        // Remove discrete line markers as requested by user
        
        console.log('Final datasets:', datasets);
        
        console.log('Creating new Chart.js instance');
        spectrumChart = new Chart(ctx, {
            type: 'scatter',
            data: {
                datasets: datasets
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Example Spectrum',
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    },
                    tooltip: {
                        mode: 'nearest',
                        intersect: false,
                        callbacks: {
                            title: function(context) {
                                return ''; // Remove default title
                            },
                            label: function(context) {
                                const x = context.parsed.x.toFixed(2);
                                const y = context.parsed.y.toFixed(3);
                                return `Wavelength: ${x} nm, Intensity: ${y}`;
                            }
                        }
                    },
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        type: 'linear',
                        position: 'bottom',
                        title: {
                            display: true,
                            text: 'Wavelength (nm)',
                            font: {
                                weight: 'bold'
                            }
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Relative Intensity',
                            font: {
                                weight: 'bold'
                            }
                        },
                        beginAtZero: true
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'nearest',
                    axis: 'x'
                }
            }
        });
    });
}

// Function to download spectrum
function downloadSpectrum() {
    if (!spectrumChart) {
        alert('Please generate a spectrum first.');
        return;
    }
    
    // Create a temporary link and download
    const canvas = document.getElementById('spectrum-chart');
    const url = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = `molecular_spectrum_${new Date().toISOString().split('T')[0]}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Initialize the periodic table when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Add class to body for CSS scoping
    document.body.classList.add('molecular-lines-page');
    generatePeriodicTable();
    
    // Check if Chart.js is loaded
    if (typeof Chart === 'undefined') {
        console.error('Chart.js is not loaded!');
    } else {
        console.log('Chart.js loaded successfully, version:', Chart.version);
    }
});
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
        // List of all JSON files to load
        const pearsePaths = [];
        for (let i = 100; i <= 368; i++) {
            if (i !== 360) { // Skip missing page
                pearsePaths.push(`/assets/data/Pearse&Gaydon/page_${i}.json`);
            }
        }
        pearsePaths.push('/assets/data/Pearse&Gaydon/pages_029_099.json');
        
        const kimFiles = [
            '13c2sw', '14c2sw', '16ohax', '18ohax', 'atomli', 'c12h', 'c2ax', 'c2ba', 'c2h',
            'c2h2ric', 'c2h4ric', 'c2o', 'c2sw00', 'c3', 'cd', 'ch3nh2ric', 'ch4ric',
            'chaxaij00', 'chber', 'chbxaij00', 'chbxaij11', 'chdp', 'chge1', 'chki',
            'cnpr', 'co2pbx1', 'co2pbxob', 'co2ppp', 'coax', 'cobh', 'cobx', 'cocx',
            'coex', 'cofc', 'coric', 'csber', 'dch', 'dco', 'dcoaxrot', 'dcop', 'dcs',
            'dh2op', 'dh2opaij', 'dnh2', 'dnhax00', 'ds2', 'ds2lab', 'dsh', 'dshax00',
            'dso', 'dso2', 'feh', 'h21ff', 'h22ff', 'h23f', 'h24ff', 'h2f', 'h2op',
            'h2opp', 'h2oric', 'h2sric', 'hcnalx', 'hcnax', 'hcnric', 'hco', 'molipe',
            'n2', 'n2po', 'nh2ax', 'nh2johns', 'nh3ric', 'nistlight', 'o2p', 'phps',
            's2i', 's2ro', 'seri', 'shax00', 'sihjac', 'soabg'
        ];
        
        const kimPaths = kimFiles.map(file => `/assets/data/uvvi_Kim/${file}.json`);
        
        const allPaths = [...pearsePaths, ...kimPaths];
        
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
    
    const wavelengthMin = parseFloat(document.getElementById('wavelength-min').value) || null;
    const wavelengthMax = parseFloat(document.getElementById('wavelength-max').value) || null;
    const frequencyMin = parseFloat(document.getElementById('frequency-min').value) || null;
    const frequencyMax = parseFloat(document.getElementById('frequency-max').value) || null;
    const moleculeName = document.getElementById('molecule-name').value.toLowerCase().trim();
    
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
        
        // Molecule name filtering
        if (moleculeName && !entry.molecule.toLowerCase().includes(moleculeName)) return false;
        
        return true;
    });
    
    // Sort by wavelength
    filteredResults.sort((a, b) => a.wavelength_nm - b.wavelength_nm);
    
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
                    ${moleculeName ? `<li><strong>Molecule/Ion:</strong> ${moleculeName}</li>` : ''}
                    ${includedElements.length ? `<li><strong>Must include elements:</strong> ${includedElements.join(', ')}</li>` : ''}
                    ${excludedElements.length ? `<li><strong>Must exclude elements:</strong> ${excludedElements.join(', ')}</li>` : ''}
                </ul>
            </div>
        `;
        return;
    }
    
    resultsDiv.innerHTML = `
        <h4>Search Results (${displayResults.length}${filteredResults.length > maxResults ? ` of ${filteredResults.length}` : ''} lines found)</h4>
        <div style="background: white; padding: 15px; border-radius: 5px; margin-top: 10px; overflow-x: auto; max-height: 600px; overflow-y: auto;">
            <table style="width: 100%; border-collapse: collapse; font-size: 12px;">
                <thead>
                    <tr style="background: #f0f0f0; position: sticky; top: 0;">
                        <th style="padding: 6px; border: 1px solid #ddd; text-align: left;">Molecule</th>
                        <th style="padding: 6px; border: 1px solid #ddd; text-align: left;">Elements</th>
                        <th style="padding: 6px; border: 1px solid #ddd; text-align: right;">λ (nm)</th>
                        <th style="padding: 6px; border: 1px solid #ddd; text-align: right;">ν (GHz)</th>
                        <th style="padding: 6px; border: 1px solid #ddd; text-align: center;">Intensity</th>
                        <th style="padding: 6px; border: 1px solid #ddd; text-align: left;">System</th>
                        <th style="padding: 6px; border: 1px solid #ddd; text-align: left;">Source</th>
                    </tr>
                </thead>
                <tbody>
                    ${displayResults.map(entry => `
                        <tr>
                            <td style="padding: 6px; border: 1px solid #ddd; font-weight: bold;">${entry.molecule}</td>
                            <td style="padding: 6px; border: 1px solid #ddd; font-size: 11px;">${entry.elements.join(', ')}</td>
                            <td style="padding: 6px; border: 1px solid #ddd; text-align: right;">${entry.wavelength_nm.toFixed(2)}</td>
                            <td style="padding: 6px; border: 1px solid #ddd; text-align: right;">${entry.frequency_ghz ? entry.frequency_ghz.toFixed(1) : 'N/A'}</td>
                            <td style="padding: 6px; border: 1px solid #ddd; text-align: center;">${entry.intensity}</td>
                            <td style="padding: 6px; border: 1px solid #ddd; font-size: 11px;">${entry.system || 'N/A'}</td>
                            <td style="padding: 6px; border: 1px solid #ddd; font-size: 10px;">${entry.source.split('(')[0].trim()}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
        ${filteredResults.length > maxResults ? `<p><em>Showing first ${maxResults} results. Refine your search to see more specific results.</em></p>` : ''}
    `;
}

// Initialize the periodic table when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Add class to body for CSS scoping
    document.body.classList.add('molecular-lines-page');
    generatePeriodicTable();
});
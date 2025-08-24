# Molecular Emission Lines Search

An interactive web-based search tool for molecular emission lines with periodic table element filtering. This tool provides access to comprehensive molecular spectroscopy databases including Pearse & Gaydon and UV/VI database compiled by Kim, S. J.

🔗 **Live Tool**: [https://copland-yz.github.io/molecular-emission-lines/](https://copland-yz.github.io/molecular-emission-lines/)

## Features

- **Interactive Periodic Table**: Click elements to include/exclude them from search results
- **Multi-Parameter Search**: Filter by wavelength, frequency, and molecule name
- **Comprehensive Database**: Over 350,000+ molecular emission lines from multiple sources
- **Real-time Filtering**: Fast client-side search with element-based molecular filtering
- **Export-Ready Results**: Tabulated results suitable for research applications

## Databases Included

### Pearse & Gaydon Collection

- **Source**: "The Identification of Molecular Spectra" by R.W.B. Pearse and A.G. Gaydon
- **Coverage**: ~270 pages of molecular emission line data
- **Content**: Classical molecular spectroscopy references

### UV/VI database compiled by Kim, S. J.

- **Source**: Various UV/Visible molecular spectroscopy compilations
- **Coverage**: ~80 specialized molecular datasets
- **Content**: Modern molecular line catalogs including:
  - Diatomic molecules (CO, OH, CH, NH, etc.)
  - Small polyatomic molecules (H2O, CO2, CH4, NH3, etc.)
  - Isotopic variants and molecular ions

## Search Capabilities

### Element Filtering

- **Include Mode** (Green): Show only molecules containing selected elements
- **Exclude Mode** (Red): Hide molecules containing selected elements  
- **Combined Logic**: Use both modes for precise molecular selection

### Parameter Ranges

- **Wavelength**: Search by wavelength range in nanometers
- **Frequency**: Search by frequency range in GHz
- **Molecule Name**: Text-based molecular formula search

### Results Display

- Sortable table with wavelength, frequency, intensity, and source information
- Element composition shown for each molecular line
- Pagination for large result sets (1000+ lines)

## Usage Examples

### Astronomical Applications

- Search for CO emission lines: Select Carbon and Oxygen elements
- Find lines in specific wavelength windows for telescope observations
- Exclude atmospheric interferers by filtering out H2O, O2, N2

### Laboratory Spectroscopy

- Search for the source of emission lines in LIBS (laser induced breakdown spectroscopy) research
- Find reference lines for wavelength calibration

## Technical Details

### Implementation

- **Frontend**: Pure HTML/CSS/JavaScript (no frameworks required)
- **Database**: JSON files loaded dynamically via fetch API
- **Parsing**: Regex-based molecular formula parsing for element extraction
- **Performance**: Client-side filtering for fast interactive search

### File Structure

```
molecular-lines/
├── index.html              # Main search interface
├── assets/
│   ├── js/
│   │   └── molecular-lines.js   # Search logic and periodic table
│   └── data/
│       ├── Pearse&Gaydon/       # ~270 JSON files
│       └── uvvi_Kim/            # ~80 JSON files
├── _config.yml             # Jekyll configuration
└── README.md               # This file
```

## Development

### Adding New Databases

1. Convert spectroscopic data to JSON format with required fields:
   
   ```json
   {
     "molecule": "CO",
     "wavelength_nm": 230.538,
     "intensity": "5",
     "system": "A-X",
     "source": "Pearse & Gaydon (1976)"
   }
   ```
2. Add JSON files to `assets/data/` directory
3. Update `molecular-lines.js` to include new file paths in loading logic

## Citation

If you use this tool in your research, please cite:

```bibtex
@software{yong2025molecular,
  author = {Yong, Chengzheng},
  title = {Molecular Emission Lines Search Tool},
  url = {https://github.com/Copland-yz/molecular-emission-lines},
  year = {2025}
}
```

## Data Sources

- Pearse, R. W. B., & Gaydon, A. G. (1976). *The identification of molecular spectra*. Chapman and Hall.
- Kim, S. J. (1994). Ultraviolet and Visible Spectroscopic Database for Atoms and Molecules in Celestial Objects. *Publication of Korean Astronomical Society*, 9, 111–166.

## License

This project is open source. The molecular line data remains subject to the original publications' copyright terms.

## Contributing

Contributions are welcome! Please feel free to:

- Add new molecular databases
- Improve the search interface
- Report bugs or suggest features
- Submit pull requests

## Contact

**Chengzheng (Copland) Yong**  
Washington University in St. Louis  
Email: chengzheng@wustl.edu  
Website: [https://copland-yz.github.io](https://copland-yz.github.io)

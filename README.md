# Molecular Emission Line Tool (MELT)

An interactive web-based search tool for molecular emission lines. 

🔗 **Live Tool**: [https://copland-yz.github.io/molecular-emission-lines/](https://copland-yz.github.io/molecular-emission-lines/)

## Features

- **Interactive Periodic Table**: Click elements to include/exclude them from search results
- **Multi-Parameter Search**: Filter by wavelength and frequency ranges
- **Spectrum Visualization**: Generate realistic example spectra from selected emission lines
- **Downloadable Results**: Export search results as TXT or CSV files
- **Downloadable Spectra**: Save generated spectra as PNG images
- **Comprehensive Database**: Extensive collection of molecular emission lines from the authoritative Pearse & Gaydon reference

## Usage Examples

### 🔬Laboratory Spectroscopy

- Search for the source of emission lines for **LIBS (laser induced breakdown spectroscopy), plasma science, or other analytical chemistry** research 
- Find reference lines for wavelength calibration
- Generate example spectra to understand line blending and instrumental resolution effects

### 💻Workflow

1. **Search for lines**: Use element and wavelength filters to find relevant emission lines
2. **Select lines**: Check the boxes next to lines of interest in the results table
3. **Adjust parameters**: Set the peak width to simulate instrumental resolution
4. **Generate spectrum**: Click "Generate Spectrum" to create an interactive visualization
5. **Export**: Download the spectrum as PNG or the selected lines as TXT/CSV

## Search Capabilities

### Element Filtering

- **Include Mode** (Green): Show only molecules containing selected elements
- **Exclude Mode** (Red): Hide molecules containing selected elements

### Parameter Range Options

- **Wavelength**: nanometers, Ångström, or micrometer
- **Frequency**: GHz
- **Wavenumber**: cm$^{-1}$
- **Smart Display**: Only shows relevant columns (one of the five units) in the result when filtering

## Technical Details

### Implementation

- **Frontend**: Pure HTML/CSS/JavaScript with Chart.js for visualization
- **Database**: JSON files loaded dynamically via fetch API  
- **Parsing**: Regex-based molecular formula parsing for element extraction
- **Performance**: Client-side filtering for fast interactive search
- **Spectrum Generation**: Gaussian peak modeling with user-adjustable FWHM
- **Export**: Canvas-based PNG export and client-side file generation

### File Structure

```
molecular-lines/
├── index.html              # Main search interface
├── assets/
│   ├── js/
│   │   └── molecular-lines.js   # Search logic and periodic table
│   └── data/
│       └── Pearse&Gaydon/       # ~270 JSON files
├── _config.yml             # Jekyll configuration
└── README.md               # This file
```

## Development

### Adding New Databases

1. Convert spectroscopic data to JSON format with required fields:
   
   ```json
       {
           "molecule": "CO",
           "system": "THE TRIPLET BANDS, d³Δ–a³Π",
           "wavelength_nm": 646.46,
           "wavelength_angstrom": 6464.6,
           "upper_level": "d³Δ",
           "lower_level": "a³Π",
           "intensity": null,
           "source": "Pearse & Gaydon (1976) p.111",
           "page": 111
       }
   ```

2. Add JSON files to `assets/data/` directory

3. Update `molecular-lines.js` to include new file paths in loading logic

## Citation

If you use this tool in your research, please cite:

```bibtex
@software{yong2025,
  author = {Yong, Chengzheng},
  title = {Molecular Emission Line Tool},
  url = {https://github.com/Copland-yz/molecular-emission-lines},
  year = {2025}
}
```

## Reference

- Pearse, R. W. B., & Gaydon, A. G. (1976). *The identification of molecular spectra*. Chapman and Hall.
- academicpages/academicpages.github.io: The Jekyll template [https://github.com/academicpages/academicpages.github.io](https://github.com/academicpages/academicpages.github.io)

## License

MIT License

## Contributing

Contributions are welcome! Please feel free to:

- Add new molecular databases
- help with proofreading
- Improve the search interface
- Report bugs or suggest features
- Submit pull requests

## Contact

**Chengzheng (Copland) Yong**  
Washington University in St. Louis  
Email: chengzheng@wustl.edu  
Website: [https://copland-yz.github.io](https://copland-yz.github.io)

# MELT Documentation

Sphinx documentation for the Molecular Emission Line Tool.

## Building

Install requirements:

```bash
pip install -r ../docs-requirements.txt
```

Build HTML:

```bash
make html
```

View at `_build/html/index.html`

## Structure

```
docs/
├── index.rst        # Main page
├── usage.rst        # User guide
├── data.rst         # Data and technical info
├── development.rst  # Contributing guide
└── citation.rst     # Citation and license
```

## Read the Docs

This documentation is automatically built on Read the Docs when changes are pushed to GitHub.

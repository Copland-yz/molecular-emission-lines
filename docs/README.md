# MELT Documentation

This directory contains the Sphinx documentation for MELT.

## Building Locally

Install requirements:

```bash
pip install -r ../docs-requirements.txt
```

Build HTML documentation:

```bash
# From the MELT root directory
cd docs
make html
```

Or on Windows:

```bash
make.bat html
```

View the documentation by opening `_build/html/index.html` in your browser.

## Read the Docs

This documentation is automatically built and hosted on Read the Docs when changes are pushed to the repository.

The `.readthedocs.yaml` configuration file in the project root tells Read the Docs:

- Where to find the documentation (this `docs/` directory)
- Which Python version to use
- Which requirements file to install (`docs-requirements.txt`)

## Documentation Structure

See the individual `.rst` files in this directory for the documentation content:

- `index.rst` - Main documentation page
- `user-guide/` - User guides and tutorials
- `technical/` - Technical documentation
- `development/` - Development guides
- `reference/` - API and reference materials

## Contributing

To contribute to the documentation:

1. Edit the relevant `.rst` files
2. Build locally to preview changes
3. Commit and push
4. Read the Docs will automatically rebuild

For more information, see the project README.

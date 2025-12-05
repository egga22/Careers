# Developer Guide

## Project structure
- `index.html`: Landing page housing the interactive career map.
- `career.html`: Career detail view fed via query parameter.
- `app.js`: Vanilla JS for data handling, rendering, interactivity, and navigation.
- `styles.css`: Shared styling for the map and detail pages.
- `info/`: Documentation folder (developer guide, user instructions, feature wiki).

## Running locally
No build steps are required. Open `index.html` in a browser via a local web server to avoid CORS restrictions on certain browsers.

Example using Python:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`.

## Data model
The initial dataset is hardcoded in `app.js` and replicated in `career.html` for the detail view. Each career has:
- `id`: URL-friendly identifier.
- `name`: Display name.
- `medianSalary`: Numeric median salary value.

When adding new stats, extend the objects and update renderers accordingly.

## Map interactions
- Axis selectors switch between Alphabetical order and Median Salary for both X and Y axes.
- Zoom in/out buttons adjust the SVG scale (bounded to 0.6–4x). Reset returns to 1x with no offset.
- Tooltip shows metric values for hovered bubbles. Click navigation uses the career `id`.

## Extending features
- Add new metrics to `metricConfig` and update `metricValue`/`metricDomain` for scaling.
- Introduce color/size encodings by adding new attributes on circles and corresponding UI controls.
- For larger datasets, consider extracting the dataset into a shared module or JSON file consumed by both pages.

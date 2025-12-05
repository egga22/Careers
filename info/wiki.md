# Feature Wiki

## Career Map
- Interactive SVG scatter plot that compares careers on two selectable axes (Alphabetical, Median Salary).
- Hover tooltip shows the career name, the exact X/Y values, and the median salary.
- Click navigation routes to the dedicated career page via query string.
- Zoom controls adjust SVG scale; Reset restores the default view.

## Career Detail Page
- Displays the selected career's name and median salary.
- Linked from the map through `career.html?id=<career-id>`.
- Back link returns to the map.

## Data
- Seed dataset of five careers with `id`, `name`, and `medianSalary` fields.
- Additional stats can be added later for bubble size/color or detail enrichment.

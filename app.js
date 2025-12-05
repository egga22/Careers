const careers = window.careersData || [];

const svg = document.getElementById("map");
const tooltip = document.getElementById("tooltip");
const xAxisSelect = document.getElementById("x-axis");
const yAxisSelect = document.getElementById("y-axis");
const bubbleLabelSelect = document.getElementById("bubble-label");
const zoomInBtn = document.getElementById("zoom-in");
const zoomOutBtn = document.getElementById("zoom-out");
const resetViewBtn = document.getElementById("reset-view");

const dimensions = {
  width: 800,
  height: 500,
  margin: { top: 40, right: 40, bottom: 60, left: 80 },
};

const state = {
  xMetric: xAxisSelect.value,
  yMetric: yAxisSelect.value,
  labelMode: bubbleLabelSelect.value,
  scale: 1,
  translate: { x: 0, y: 0 },
};

const metricConfig = {
  alphabetical: {
    label: "Alphabetical",
    formatter: (value) => `Order: ${value}`,
  },
  salary: {
    label: "Median Salary",
    formatter: (value) => `$${value.toLocaleString()}`,
  },
};

const chartWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right;
const chartHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom;

const chartGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
chartGroup.setAttribute(
  "transform",
  `translate(${dimensions.margin.left}, ${dimensions.margin.top})`
);
svg.appendChild(chartGroup);

const zoomGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
chartGroup.appendChild(zoomGroup);

const gridGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
gridGroup.classList.add("grid");
zoomGroup.appendChild(gridGroup);

const axesGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
zoomGroup.appendChild(axesGroup);

const pointsGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
zoomGroup.appendChild(pointsGroup);

function getAlphabeticalOrder(name) {
  const sorted = [...careers].sort((a, b) => a.name.localeCompare(b.name));
  return sorted.findIndex((career) => career.name === name) + 1;
}

function metricValue(career, metric) {
  if (metric === "alphabetical") {
    return getAlphabeticalOrder(career.name);
  }
  return career.medianSalary;
}

function metricDomain(metric) {
  if (metric === "alphabetical") {
    return [1, careers.length];
  }
  const values = careers.map((c) => c.medianSalary);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const padding = (max - min) * 0.05;
  return [min - padding, max + padding];
}

function createScale(domain, range) {
  const [d0, d1] = domain;
  const [r0, r1] = range;
  const m = (r1 - r0) / (d1 - d0);
  return (value) => r0 + (value - d0) * m;
}

function drawGrid(xScale, yScale, xDomain, yDomain) {
  gridGroup.innerHTML = "";

  const xLines = 5;
  const yLines = 5;

  for (let i = 0; i <= xLines; i++) {
    const t = i / xLines;
    const value = xDomain[0] + (xDomain[1] - xDomain[0]) * t;
    const x = xScale(value);
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x);
    line.setAttribute("x2", x);
    line.setAttribute("y1", 0);
    line.setAttribute("y2", chartHeight);
    gridGroup.appendChild(line);
  }

  for (let i = 0; i <= yLines; i++) {
    const t = i / yLines;
    const value = yDomain[0] + (yDomain[1] - yDomain[0]) * t;
    const y = yScale(value);
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", 0);
    line.setAttribute("x2", chartWidth);
    line.setAttribute("y1", y);
    line.setAttribute("y2", y);
    gridGroup.appendChild(line);
  }
}

function drawAxes(xScale, yScale, xDomain, yDomain) {
  axesGroup.innerHTML = "";

  const xAxisLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
  xAxisLine.setAttribute("x1", 0);
  xAxisLine.setAttribute("x2", chartWidth);
  xAxisLine.setAttribute("y1", chartHeight);
  xAxisLine.setAttribute("y2", chartHeight);
  xAxisLine.classList.add("axis");
  axesGroup.appendChild(xAxisLine);

  const yAxisLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
  yAxisLine.setAttribute("x1", 0);
  yAxisLine.setAttribute("x2", 0);
  yAxisLine.setAttribute("y1", 0);
  yAxisLine.setAttribute("y2", chartHeight);
  yAxisLine.classList.add("axis");
  axesGroup.appendChild(yAxisLine);

  const ticksGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
  ticksGroup.classList.add("ticks");

  const tickCount = 5;
  for (let i = 0; i <= tickCount; i++) {
    const t = i / tickCount;
    const xValue = xDomain[0] + (xDomain[1] - xDomain[0]) * t;
    const yValue = yDomain[0] + (yDomain[1] - yDomain[0]) * t;

    const xTick = document.createElementNS("http://www.w3.org/2000/svg", "text");
    xTick.textContent = formatTick(state.xMetric, xValue);
    xTick.setAttribute("x", xScale(xValue));
    xTick.setAttribute("y", chartHeight + 24);
    xTick.setAttribute("text-anchor", "middle");
    ticksGroup.appendChild(xTick);

    const yTick = document.createElementNS("http://www.w3.org/2000/svg", "text");
    yTick.textContent = formatTick(state.yMetric, yValue);
    yTick.setAttribute("x", -12);
    yTick.setAttribute("y", yScale(yValue) + 4);
    yTick.setAttribute("text-anchor", "end");
    ticksGroup.appendChild(yTick);
  }

  axesGroup.appendChild(ticksGroup);

  const xLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
  xLabel.textContent = metricConfig[state.xMetric].label;
  xLabel.setAttribute("x", chartWidth / 2);
  xLabel.setAttribute("y", chartHeight + 46);
  xLabel.setAttribute("text-anchor", "middle");
  xLabel.classList.add("axis-label");
  axesGroup.appendChild(xLabel);

  const yLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
  yLabel.textContent = metricConfig[state.yMetric].label;
  yLabel.setAttribute("x", -46);
  yLabel.setAttribute("y", chartHeight / 2);
  yLabel.setAttribute("text-anchor", "middle");
  yLabel.setAttribute("transform", `rotate(-90 -46 ${chartHeight / 2})`);
  yLabel.classList.add("axis-label");
  axesGroup.appendChild(yLabel);
}

function formatTick(metric, value) {
  if (metric === "alphabetical") {
    return Math.round(value);
  }
  return `$${Math.round(value).toLocaleString()}`;
}

function drawPoints(xScale, yScale) {
  pointsGroup.innerHTML = "";

  careers.forEach((career) => {
    const xValue = metricValue(career, state.xMetric);
    const yValue = metricValue(career, state.yMetric);

    const pointGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");

    const cx = xScale(xValue);
    const cy = yScale(yValue);

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.classList.add("point");
    circle.setAttribute("r", 12);
    circle.setAttribute("cx", cx);
    circle.setAttribute("cy", cy);
    circle.dataset.id = career.id;

    circle.addEventListener("mouseenter", (event) => showTooltip(event, career, cx, cy));
    circle.addEventListener("mouseleave", hideTooltip);
    circle.addEventListener("mousemove", (event) => moveTooltip(event));
    circle.addEventListener("click", () => {
      window.location.href = `career.html?id=${encodeURIComponent(career.id)}`;
    });

    pointGroup.appendChild(circle);
    const labelTextValue = pointLabelText(career, xValue, yValue);
    if (labelTextValue) {
      const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
      label.classList.add("point-label");
      label.setAttribute("x", cx);
      label.setAttribute("y", cy + 4);
      label.textContent = labelTextValue;
      pointGroup.appendChild(label);
    }

    pointsGroup.appendChild(pointGroup);
  });
}

function pointLabelText(career, xValue, yValue) {
  switch (state.labelMode) {
    case "name":
      return career.name;
    case "x":
      return metricConfig[state.xMetric].formatter(xValue);
    case "y":
      return metricConfig[state.yMetric].formatter(yValue);
    case "coordinates":
      return `${metricConfig[state.xMetric].formatter(xValue)} | ${metricConfig[state.yMetric].formatter(yValue)}`;
    default:
      return "";
  }
}

function showTooltip(event, career, cx, cy) {
  const xValue = metricValue(career, state.xMetric);
  const yValue = metricValue(career, state.yMetric);
  tooltip.innerHTML = `
    <div class="name">${career.name}</div>
    <span class="metric">X (${metricConfig[state.xMetric].label}): ${metricConfig[state.xMetric].formatter(xValue)}</span>
    <span class="metric">Y (${metricConfig[state.yMetric].label}): ${metricConfig[state.yMetric].formatter(yValue)}</span>
    <span class="metric">Median Salary: ${metricConfig.salary.formatter(career.medianSalary)}</span>
  `;
  tooltip.classList.add("visible");
  tooltip.setAttribute("aria-hidden", "false");
  positionTooltip(event);
}

function moveTooltip(event) {
  positionTooltip(event);
}

function hideTooltip() {
  tooltip.classList.remove("visible");
  tooltip.setAttribute("aria-hidden", "true");
}

function positionTooltip(event) {
  const offset = 16;
  const tooltipRect = tooltip.getBoundingClientRect();

  let left = event.clientX + offset;
  if (left + tooltipRect.width > window.innerWidth - 8) {
    left = window.innerWidth - tooltipRect.width - 8;
  }
  left = Math.max(8, left);

  let top = event.clientY + offset;
  if (top + tooltipRect.height > window.innerHeight - 8) {
    top = event.clientY - tooltipRect.height - offset;
  }
  top = Math.max(8, top);

  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top}px`;
}

function applyZoom() {
  zoomGroup.setAttribute(
    "transform",
    `translate(${state.translate.x} ${state.translate.y}) scale(${state.scale})`
  );
}

function handleZoom(direction) {
  const factor = direction === "in" ? 1.15 : 0.87;
  state.scale = Math.min(Math.max(state.scale * factor, 0.6), 4);
  applyZoom();
}

function resetView() {
  state.scale = 1;
  state.translate = { x: 0, y: 0 };
  applyZoom();
}

function render() {
  const xDomain = metricDomain(state.xMetric);
  const yDomain = metricDomain(state.yMetric);

  const xScale = createScale(xDomain, [0, chartWidth]);
  const yScale = createScale(yDomain, [chartHeight, 0]);

  drawGrid(xScale, yScale, xDomain, yDomain);
  drawAxes(xScale, yScale, xDomain, yDomain);
  drawPoints(xScale, yScale);
}

xAxisSelect.addEventListener("change", () => {
  state.xMetric = xAxisSelect.value;
  render();
});

yAxisSelect.addEventListener("change", () => {
  state.yMetric = yAxisSelect.value;
  render();
});

bubbleLabelSelect.addEventListener("change", () => {
  state.labelMode = bubbleLabelSelect.value;
  render();
});

zoomInBtn.addEventListener("click", () => handleZoom("in"));
zoomOutBtn.addEventListener("click", () => handleZoom("out"));
resetViewBtn.addEventListener("click", resetView);

applyZoom();
render();

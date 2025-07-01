import React from "react";
import "./SvgGrid.css";

// Icon file names (stored in public/icons)
const svgIcons = [
  "public/icons/react.svg",
  "public/icons/vite.svg",
  "public/icons/nextjs.png",
  "public/icons/redux.svg",
  "public/icons/javascript.svg",
  "public/icons/tailwind.svg",
];

const GRID_ROWS = 4;
const GRID_COLS = 9;

function generateCenterOutPositions(rows, cols) {
  const centerRow = Math.floor(rows / 2);
  const centerCol = Math.floor(cols / 2);
  const visited = new Set();
  const queue = [[centerRow, centerCol]];
  visited.add(`${centerRow},${centerCol}`);
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
    [1, 1],
    [-1, -1],
    [1, -1],
    [-1, 1],
  ];
  const result = [];

  while (queue.length && result.length < svgIcons.length) {
    const [r, c] = queue.shift();

    if (r > 0 && r < rows - 1 && c > 0 && c < cols - 1) {
      result.push([r, c]);
    }

    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;
      const key = `${nr},${nc}`;
      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && !visited.has(key)) {
        queue.push([nr, nc]);
        visited.add(key);
      }
    }
  }

  return result;
}

export default function SvgGrid() {
  const totalCells = GRID_ROWS * GRID_COLS;
  const svgPositions = generateCenterOutPositions(GRID_ROWS, GRID_COLS);

  const grid = Array.from({length: totalCells}, (_, index) => {
    const row = Math.floor(index / GRID_COLS);
    const col = index % GRID_COLS;
    const posIndex = svgPositions.findIndex(([r, c]) => r === row && c === col);
    const icon = posIndex !== -1 ? svgIcons[posIndex] : null;
    const isOffset = row % 2 === 1;
    return {icon, index, isOffset};
  });

  return (
    <div
      className="grid-container"
      style={{
        gridTemplateColumns: `repeat(${GRID_COLS}, minmax(60px, 1fr))`,
      }}
    >
      {grid.map(({icon, index, isOffset}) => (
        <div
          key={index}
          className={`grid-box ${icon ? "has-icon" : "no-icon"} ${
            isOffset ? "off-center" : ""
          }`}
        >
          {icon && (
            <div className="icon">
              <img src={`/icons/${icon}`} alt={icon} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

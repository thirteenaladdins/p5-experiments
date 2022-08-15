const canvasSketch = require("canvas-sketch");
const p5 = require("p5");

new p5();
// I want the lines to wrap over each other
// follow the grid and then wrap and overlap
// start with a standard grid.
// come back to isometric later
// drawing squiggles inside each of the squares

// canvas-sketch template
const settings = {
  // Pass the p5 instance, and preload function if necessary
  // p5: { p5, preload },
  p5: true,
  // Turn on a render loop
  // animate: true,
};

// define the coordinates of the grid
// this isn't to be drawn but to set the bounds for each drawing
let gap = 1;

// define grid
// add a gap between each of the squares
function drawGrid(gridWidth, gridHeight, sideLength, gap = 1) {
  // this sets the origin to the center of the canvas
  let offsetX = width / 2;
  let offsetY = height / 2;

  //   use this to center the grid
  let gridTopX = offsetX - (gridWidth * sideLength) / 2;
  let gridTopY = offsetY - (gridHeight * sideLength) / 2;

  let gridCoordinates = [];

  for (let x = 0; x < gridWidth; x += 1) {
    for (let y = 0; y < gridHeight; y += 1) {
      // draw grid
      // we can put a gap between the squares by defining a gap
      //   fill(252, 231, 230);
      rect(
        x * sideLength + gridTopX,
        y * sideLength + gridTopY,
        sideLength,
        sideLength
      );

      gridCoordinates.push([
        x * sideLength + gridTopX,
        y * sideLength + gridTopY,
        sideLength,
        sideLength,
      ]);
    }
  }
}

// this should be the same as draw grid if we want to draw it
// we should be able to take the coordinates from the array and draw them from there.
function defineGrid(gridWidth, gridHeight, sideLength, gap = 1) {
  let offsetX = width / 2;
  let offsetY = height / 2;

  //   use this to center the grid
  let gridTopX = offsetX - (gridWidth * sideLength) / 2;
  let gridTopY = offsetY - (gridHeight * sideLength) / 2;

  let gridCoordinates = [];

  for (let x = 0; x < gridWidth; x += 1) {
    for (let y = 0; y < gridHeight; y += 1) {
      // draw grid
      // we can put a gap between the squares by defining a gap

      gridCoordinates.push([
        x * sideLength + gridTopX,
        y * sideLength + gridTopY,
        sideLength,
        sideLength,
      ]);
    }
  }
  return gridCoordinates;
}

// draw sketches within each grid square
function drawSketches(gridCoordinates) {
  //   console.log(gridCoordinates);
  for (const coordinates of gridCoordinates) {
    //   console.log(coordinates);
    //   let x = coordinates[0];
    //   let y = coordinates[1];
    //   let sideLength = coordinates[2];
    //   let sideLength = coordinates[3];
    //   console.log(x, y, sideLength);
    //   drawSketch(x, y, sideLength);
    //   drawSketch(coordinates[0], coordinates[1], coordinates[2]);
    drawSketch(coordinates[0], coordinates[1], coordinates[2], coordinates[3]);
  }
}

// draw squiggle
function drawSquiggles() {}

// accept coordinates and draw a sketch within those limits
function drawCircle() {
  //   fill(252, 231, 230);
  ellipse(100, 100, 50, 50);

  drawCircle(coordinates[0], coordinates[1], coordinates[2], coordinates[3]);
}

// in here are the actual visuals we want to add to screen
// what do I want to draw?
function drawSketch() {}

canvasSketch(({ p5 }) => {
  // Inside this is a bit like p5.js 'setup' function
  // createCanvas(760, 760);
  gridTopX = width / 2;
  gridTopY = height / 2;

  // Return a renderer, which is like p5.js 'draw' function
  return ({}) => {
    // windowResized();
    // background(252, 231, 230);
    let sideLength = 100;
    let gridWidth = 5;
    let gridHeight = 5;
    drawGrid(gridWidth, gridHeight, sideLength, gap);
    let gridCoordinates = defineGrid(gridWidth, gridHeight, sideLength, gap);

    console.log(gridCoordinates);
    drawCircle();
  };
}, settings);

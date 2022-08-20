const canvasSketch = require("canvas-sketch");
const math = require("canvas-sketch-util/math");
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
  animate: true,
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

// make this whole thing adaptable - all parameters should be modifiable
// from circle widths to grid size and side length etc.

// draw sketches within each grid square
function drawSketches(gridCoordinates) {
  //   console.log(gridCoordinates);
  for (const coordinates of gridCoordinates) {
    drawSketch(coordinates[0], coordinates[1], coordinates[2], coordinates[3]);
  }
}

// draw squiggle
function drawSquiggles() {}

// draw a circle using arcs
function drawCircleWithArcs(coordinates, circleSize, sideLength) {
  const num = 12;
  //   arc(50, 55, 50, 50, 0, HALF_PI);
  noFill();
  smooth();
  //   strokeWeight(0.5);

  let cx = sideLength * 0.2;
  let cy = sideLength * 0.2;
  const radius = sideLength * 0.3;

  let x;
  let y;

  let slice = math.degToRad(360 / num);
  //   what is cx and cy?

  for (let i = 0; i < num; i++) {
    let angle = slice * i;
    // I don't really get how this work
    // basic mathematics
    // x = cx + radius * sin(angle);
    // y = cy + radius * cos(angle);

    // we've got these arcs now.
    // not sure if we ever need sin and cos. come back to this later
    arc(
      coordinates[0] + sideLength / 2,
      coordinates[1] + sideLength / 2,
      circleSize,
      circleSize,
      0,
      angle + slice
    );
    // arc(50, 55, 50, 50, 0, HALF_PI);
  }
}

// accept coordinates and draw a sketch within those limits
function drawCircle(coordinates, circleSize, sideLength) {
  console.log(coordinates[0], coordinates[1]);

  ellipse(
    coordinates[0] + sideLength / 2,
    coordinates[1] + sideLength / 2,
    circleSize,
    circleSize
  );
}

// In here are the actual visuals we want to add to screen
// what do I want to draw?
function drawSketch() {}

function drawCircleWithLines(diameter) {
  let num = 30;
  for (let i = 0; i < num; i++) {
    let angle = math.degToRad(360 / num) * i;
    let x = diameter * sin(angle);
    let y = diameter * cos(angle);
    ellipse(0, 0, x, y);
  }
}

let slider;
canvasSketch(({ p5 }) => {
  // Inside this is a bit like p5.js 'setup' function
  // createCanvas(760, 760);
  gridTopX = width / 2;
  gridTopY = height / 2;
  ellipseMode(CENTER);

  // we're creating a perfect loop

  slider = createSlider(0, 10, 0, 0.01);

  // Return a renderer, which is like p5.js 'draw' function
  return ({}) => {
    background(0);
    translate(width / 2, height / 2);
    stroke(255);
    noFill();

    let num = 120;

    let diameter = 200;
    drawCircleWithLines(diameter);
  };
}, settings);

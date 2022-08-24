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
  // animate: true,
};

function drawSquareLines(radius) {
  // let chord;
  let x = 0;
  let y = 0;
  let sideLength = radius;

  for (let i = 0; i < sideLength; i += 1) {
    // for (let j = 0; j < 10; j += 1) {
    // the first point on the circle - where the line starts
    // then the chord is the line between the two points

    // square root of radius squared - d squared

    // this is the length of the chord here
    // chord = 2 * sqrt(Math.pow(radius, 2) - Math.pow(radius - i, 2));
    // e.log(chord);
    let x1 = 0;
    let y1 = 0;

    let x2 = sideLength;
    let y2 = 0;

    // start from center of the circle?
    //ne(x + i, y + i, x + chord, y);
    //line(x1 + i, y1 + i, i + sideLength, y);

    let xOffset = (width - radius) / 2;
    let yOffset = (height - radius) / 2;
    // take the radius
    line(
      xOffset + x1,
      yOffset + y1 + noise(i) * i,
      xOffset + x2,
      yOffset + y2 + noise(i) * i
    );

    // }
  }
}

// layers in p5js
// I want to draw a square with a circle missing
// console.log(gridCoordinates);
//for (let i = 0; i < gridCoordinates.length; i++) {
//     drawCircle(gridCoordinates[i], circleSize, sideLength);
//drawCircleWithArcs(gridCoordinates[i], circleSize, sideLength);
//}

let extraCanvas;
let slider;

canvasSketch(() => {
  // Inside this is a bit like p5.js 'setup' function

  createCanvas(600, 600);
  // colorMode(HSB, 360, 100, 100, 100);

  layer2 = createGraphics(600, 600);
  layer2.clear();

  // fill(255);

  // Return a renderer, which is like p5.js 'draw' function
  return () => {
    // background(252, 231, 230);
    background(0);
    // all we need to do is take the same set of noise values and apply them to ever decreasing circle size
    // instead of a slider we want create a loop

    // let noiseMax = slider.value();

    let radius = 400;
    stroke(255, 255, 255);
    drawSquareLines(radius);

    image(layer2);
    translate(width / 2, height / 2);
    // stroke(255);

    smooth();
    strokeWeight(1);

    // this needs to be on the first canvas

    // erase();
    // arc(0, 0, radius, radius, 0, PI * 2);
    // noErase();
    // colorMode(HSB, 255, 255, 255, 0);

    // arc(50, 55, 50, 50, 0, HALF_PI);

    // draw line in centre of page
    // this is from the origin in the center
    // line(-width / 2, 0, 0, radius);

    // line(width / 2, 0, 0, height / 2);

    noLoop();
  };
}, settings);

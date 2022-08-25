// const canvasSketch = require("canvas-sketch");
// const math = require("canvas-sketch-util/math");
// const p5 = require("p5");

// new p5();
// // I want the lines to wrap over each other
// // follow the grid and then wrap and overlap
// // start with a standard grid.
// // come back to isometric later
// // drawing squiggles inside each of the squares

// // canvas-sketch template
// const settings = {
//   // Pass the p5 instance, and preload function if necessary
//   // p5: { p5, preload },
//   p5: true,
//   // Turn on a render loop
//   animate: true,
// };

// function drawSquareLines(radius, noiseMax) {
//   let sideLength = radius;

//   let x1 = 0;
//   let y1 = 0;

//   let x2 = sideLength;
//   let y2 = 0;

//   let xOffset = (width - radius) / 2;
//   let yOffset = (height - radius) / 2;

//   for (let i = 0; i < sideLength; i += 0.2) {
//     line(xOffset + x1, yOffset + y1 + i, xOffset + x2, yOffset + y2 + i);
//   }
// }

// let extraCanvas;
// let slider;
// let noiseMax = 0.5;

// const sketch = () => {
//   // Inside this is a bit like p5.js 'setup' function
//   let xoff1 = 0;
//   let xoff2 = 0;

//   slider = createSlider(0, 10, 0, 0.1);
//   createCanvas(600, 600);
//   // colorMode(HSB, 360, 100, 100, 100);

//   layer2 = createGraphics(600, 600);
//   layer2.clear();

//   var x = map(noise(xoff1), 0, 1, 0, width);
//   var y = map(noise(xoff2), 0, 1, 0, width);

//   // fill(255);

//   // Return a renderer, which is like p5.js 'draw' function
//   return () => {
//     // background(252, 231, 230);
//     background(0);
//     // all we need to do is take the same set of noise values and apply them to ever decreasing circle size
//     // instead of a slider we want create a loop

//     let noiseMax = slider.value();
//     let radius = 400;
//     stroke(255, 255, 255);

//     // DRAW SQUARE
//     // drawSquareLines(radius);

//     // image(layer2);
//     translate(width / 2, height / 2);
//     stroke(255);

//     x += 0.01;
//     y += 0.01;

//     smooth();
//     strokeWeight(1);

//     // this needs to be on the first canvas

//     // erase();
//     // arc(0, 0, radius, radius, 0, PI * 2);
//     // noErase();
//     // colorMode(HSB, 255, 255, 255, 0);

//     // arc(50, 55, 50, 50, 0, HALF_PI);

//     // draw line in centre of page
//     // this is from the origin in the center
//     // line(-width / 2, 0, 0, radius);

//     // line(width / 2, 0, 0, height / 2);

//     // noLoop();
//   };
// };

// canvasSketch(sketch, settings);

/**
 * A p5.js example integrating with canvas-sketch.
 * Here, canvas-sketch handles the frame loop, resizing
 * and exporting.
 * @author Matt DesLauriers (@mattdesl)
 */

const canvasSketch = require("canvas-sketch");

// Grab P5.js from npm
const p5 = require("p5");

// Attach p5.js it to global scope
new p5();

const settings = {
  // Tell canvas-sketch we're using p5.js
  p5: true,
  // Turn on a render loop (it's off by default in canvas-sketch)
  animate: true,
  // We can specify WebGL context if we want
  // context: "webgl",
  // Optional loop duration
  duration: 6,
  // Enable MSAA
  attributes: {
    antialias: true,
  },
};

// Optionally preload before you load the sketch
window.preload = () => {
  // Preload sounds/images/etc...
};

let xoff1 = 0;
let xoff2 = 10000;

const sketch = () => {
  // Inside this is a bit like p5.js 'setup' function
  // ...

  // Attach events to window to receive them
  window.mouseClicked = () => {
    console.log("Mouse clicked");
  };

  createCanvas(600, 600);

  // Return a renderer to 'draw' the p5.js content
  return ({}) => {
    background(51);

    // translate(width / 2, height / 2);
    // how do I keep it contained in the canvas?

    var x = map(noise(xoff1), 0, 1, 0, width);
    var y = map(noise(xoff2), 0, 1, 0, height);

    ellipse(x, y, 24, 24);

    xoff1 += 0.02;
    xoff2 += 0.02;
  };

  //
};

canvasSketch(sketch, settings);

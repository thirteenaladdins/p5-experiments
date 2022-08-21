const canvasSketch = require("canvas-sketch");
const math = require("canvas-sketch-util/math");
const p5 = require("p5");

let padding = 50;
let start = 0;
let xoff = start;

new p5();

// canvas-sketch template
const settings = {
  // Pass the p5 instance, and preload function if necessary
  // p5: { p5 },
  p5: true,
  // animate: true,
};

canvasSketch(({ p5 }) => {
  // Inside this is a bit like p5.js 'setup' function
  createCanvas(400, 400);

  // Return a renderer, which is like p5.js 'draw' function
  return ({}) => {
    background(51);

    stroke(255);
    strokeCap(SQUARE);

    beginShape();
    for (x = padding; x < width - padding; x++) {
      let y = noise(xoff) * height;
      vertex(x, y);

      xoff += 0.01;
    }
    endShape();

    noLoop();
  };
}, settings);

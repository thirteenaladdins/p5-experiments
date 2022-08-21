const canvasSketch = require("canvas-sketch");
const math = require("canvas-sketch-util/math");
const p5 = require("p5");

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
  gridTopX = width / 2;
  gridTopY = height / 2;

  // Return a renderer, which is like p5.js 'draw' function
  return ({}) => {
    let sideLength = 135;

    background(0);
    translate(width / 2, height / 2);
    stroke(255);
    noFill();

    let num = 120;
    let radius = 150;

    sideLength = 400;
    smooth();
    strokeWeight(2.5);

    for (let i = 0; i < num; i++) {
      let angle = math.degToRad(360 / num) * i;
      let x = radius * sin(angle);
      let y = radius * cos(angle);
      arc(x, y, radius, radius, 0, PI);
    }

    noLoop();
  };
}, settings);

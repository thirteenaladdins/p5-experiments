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

function drawCircleWithLines(radius) {
  // draw a circle here

  let chord;
  let x = 0;
  let y = 0;

  // try this again

  for (let i = 0; i < radius; i += 1) {
    // chord = (i * 2 * PI) / radius;
    // r2 - d2 = 2rd - central angle is 180 degrees
    // come back to this.

    central_angle = 180;
    //  PQ = 2 x rsin(c/2)
    // d = 2 * r * sin(theta)

    // let distance = radius  i;
    // chord = 2 * sqrt(Math.pow(radius, 2) - Math.pow(distance, 2));
    // console.log(
    //   `${2} * sqrt(${Math.pow(radius, 2)} - ${Math.pow(distance, 2)})`,
    //   chord
    // );

    console.log(chord);
    // chord = 2 * radius * sin(central_angle);

    line(x - chord, y + i, x + chord, y + i);
  }

  // circle(x, y, radius);
}

// adjust the square using noise
function drawSquare(sideLength) {
  rect(0, 0, sideLength, sideLength);
  for (let i = 0; i < sideLength; i += 1) {
    line(0, i, sideLength, i);
    line(i, 0, i, sideLength);
  }
}

// so these are the kinds of coding challenges that were similar to CS50
// if I can work it out then I'll be much more able to
// I want a line that bridges the gap between the inside of the two circles

// draw a circle - then take the current mouse position
// draw a line between the two points

canvasSketch(({ p5 }) => {
  // Inside this is a bit like p5.js 'setup' function
  gridTopX = width / 2;
  gridTopY = height / 2;
  // ellipseMode(CENTER);

  // we're creating a perfect loop

  // slider = createSlider(0, 10, 0, 0.01);

  // Return a renderer, which is like p5.js 'draw' function
  return ({}) => {
    // windowResized();k
    // background(252, 231, 230);
    // all we need to do is take the same set of noise values and apply them to ever decreasing circle size
    // instead of a slider we want create a loop

    // let noiseMax = slider.value();

    let sideLength = 135;
    let circleSize = 120;
    let gridWidth = 5;
    let gridHeight = 5;
    // drawGrid(gridWidth, gridHeight, sideLength, gap);

    // define grid coordinates first
    // let gridCoordinates = defineGrid(gridWidth, gridHeight, sideLength, gap);

    // console.log(gridCoordinates);
    // for (let i = 0; i < gridCoordinates.length; i++) {
    //     drawCircle(gridCoordinates[i], circleSize, sideLength);
    //   drawCircleWithArcs(gridCoordinates[i], circleSize, sideLength);
    // }

    background(0);
    translate(width / 2, height / 2);
    stroke(255);
    noFill();

    let num = 120;

    let radius = 150;

    sideLength = 400;
    smooth();
    strokeWeight(2.5);
    // drawSquare(sideLength);

    // let num = 30;

    // draw circle
    for (let i = 0; i < num; i++) {
      let angle = math.degToRad(360 / num) * i;
      let x = radius * sin(angle);
      let y = radius * cos(angle);
      arc(x, y, radius, radius, 0, PI);
    }

    drawCircleWithLines(radius);
    noLoop();
  };
}, settings);

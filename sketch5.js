// rows of straight lines (vertices)
// change each vertex along horizontal line up or down randomly

// I want to do a continuous loop of the same few noise values
// so it's a seamless wraparound..

// my idea woud be to cache the data and then connect the end points
// to the start points

let w = 400;
let h = 400;
let scl = 1;
let cols;
let rows;
let yoff = 0.0;
let margin = 20;
let padding = 20;
let reverseArray = [];

let merged = [];

let checkSwitch = true;

let numberArray = [];

let noiseScale2D = [];

function setup() {
  createCanvas(800, 800, WEBGL);
  // cols = (w - margin * 2) / scl;
  // rows = (h - margin * 2) / scl;
  angleMode(DEGREES);
  frameRate(5);
  for (i = 0; i < 20; i++) {
    numberArray.push(i + 1);
  }

  for (j = 19; j > 0; j--) {
    reverseArray.push(j);
  }

  merged = numberArray.concat(reverseArray);
  // noiseSeed(99);

  //   let noiseScale2D = map(noise(x, yoff), 0, 1, -20, 20);
}

// this sort of works. I think...

function draw() {
  // noLoop();
  stroke(255);
  background(255, 99, 71);

  // my idea - when we get to 20 - flip the switch
  // then when it hits 0 the bool is at true

  // if
  forwardLoop(scl);
  if (scl > 39) {
    scl = 0;
  } else {
    scl += 1;
  }

  // if (checkSwitch === true) {
  //   console.log("Why?");
  //   forwardLoop(scl);
  //   if (scl === 20) {
  //     checkSwitch = false;
  //   }
  // console.log(checkSwitch);

  console.log(merged);
}

// if (checkSwitch == false) {
//   console.log("Why not?");
//   reverseLoop(scl);
//   if (scl === 0) {
//     checkSwitch = true;
//   }
// }

// for (y = -h / 2; y < h / 2; y += scl) {
//   beginShape();
//   for (x = -w / 2; x < w / 2; x++) {
//     vertex(x, y);
//   }
//   endShape();
// }
// if (scl < 20) {
//   scl += 1;
// }

// start at 20 or 0, then go from 20 back to 0
// + increment in that case
// }

function forwardLoop(scale) {
  for (y = -h / 2; y < h / 2; y += merged[scale]) {
    beginShape();
    for (x = -w / 2; x < w / 2; x++) {
      vertex(x, y);
    }
    endShape();
  }
}

function reverseLoop(scale) {
  for (y = -h / 2; y < h / 2; y += 20 - scale) {
    beginShape();
    for (x = -w / 2; x < w / 2; x++) {
      vertex(x, y);
    }
    endShape();
  }
}

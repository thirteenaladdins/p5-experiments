const canvasSketch = require("canvas-sketch");
const p5 = require("p5");

new p5();

let gridTopX;
let gridTopY;
const sideLength = 50;

const cubes = [];

// const preload = (p5) => {
//   // You can use p5.loadImage() here, etc...
// };

//@TODO centre the cubes
// don't go off the edge of the screen

const settings = {
  // Pass the p5 instance, and preload function if necessary
  // p5: { p5, preload },
  p5: true,
  // Turn on a render loop
  // animate: true,
};

function keyPressed() {}

function addRandomCube() {
  let cubeAdded = false;

  while (!cubeAdded) {
    const randomCube = random(cubes);

    let newCubeC = randomCube.c;
    let newCubeR = randomCube.r;
    let newCubeZ = randomCube.z;

    const r = random(1);
    if (r < 0.3) {
      newCubeC++;
    } else if (r < 0.6) {
      newCubeR++;
    } else {
      newCubeZ++;
    }

    const spotTaken = cubes.some((cube) => {
      return cube.c == newCubeC && cube.r == newCubeR && cube.z == newCubeZ;
    });

    if (!spotTaken) {
      cubes.push(new Cube(newCubeC, newCubeR, newCubeZ));
      cubeAdded = true;
    }
  }
}

class Cube {
  constructor(c, r, z) {
    this.c = c;
    this.r = r;
    this.z = z;
    this.red = random(100, 225);
    this.green = random(100, 200);
    this.blue = random(200, 255);
  }

  // position of the top left corner of the cube
  // isometric position of the cubes. Starting with the top left corner
  draw() {
    const x = gridTopX + ((this.c - this.r) * sideLength) / 2;
    const y =
      gridTopY + ((this.c + this.r) * sideLength) / 2 - sideLength * this.z;

    const points = [];
    for (let angle = PI / 6; angle < PI * 2; angle += PI / 3) {
      points.push(
        createVector(x + cos(angle) * sideLength, y + sin(angle) * sideLength)
      );
    }

    fill(this.red * 0.75, this.green * 0.75, this.blue * 0.75);
    quad(
      x,
      y,
      points[5].x,
      points[5].y,
      points[0].x,
      points[0].y,
      points[1].x,
      points[1].y
    );

    fill(this.red * 0.9, this.green * 0.9, this.blue * 0.9);
    quad(
      x,
      y,
      points[1].x,
      points[1].y,
      points[2].x,
      points[2].y,
      points[3].x,
      points[3].y
    );

    fill(this.red, this.green, this.blue);
    quad(
      x,
      y,
      points[3].x,
      points[3].y,
      points[4].x,
      points[4].y,
      points[5].x,
      points[5].y
    );
  }

  getSortString() {
    return this.z + "." + this.r + "." + this.c;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

canvasSketch(({ p5 }) => {
  // Inside this is a bit like p5.js 'setup' function
  // createCanvas(760, 760);
  gridTopX = width / 2;
  gridTopY = height / 2;

  console.log(gridTopX, gridTopY);
  strokeWeight(2);

  cubes.push(new Cube(0, 0, 0));

  while (cubes.length < 50) {
    addRandomCube();
  }

  console.log(cubes);

  // Sort so the cubes are drawn in the right order
  cubes.sort((a, b) => {
    return a.getSortString().localeCompare(b.getSortString());
  });
  // let anim = 0.5;

  // Here is how to attach interactivity to a sketch
  mouseMoved = () => {
    anim = mouseX / width;
  };

  // Return a renderer, which is like p5.js 'draw' function
  return ({}) => {
    windowResized();
    background(120);

    for (const cube of cubes) {
      cube.draw();
    }
    // Draw with p5.js things
    // p5.background(0);
    // p5.fill(255);
    // p5.noStroke();
    // p5.rect(0, 0, width * anim, height);
  };
}, settings);

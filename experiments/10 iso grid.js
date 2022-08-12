const canvasSketch = require("canvas-sketch");
const p5 = require("p5");
const { isContext } = require("vm");

new p5();

let gridTopX;
let gridTopY;

// we could randomise the cube sizes here
// const sideLength = 50;

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

// create a new cube
function addRandomCube() {
  let cubeAdded = false;

  // while cube added is not false
  // keep adding random cubes
  while (!cubeAdded) {
    // get a random cube from the cubes array
    const randomCube = random(cubes);

    // we're passing the data here?
    // what data is this?

    // these are the coordinates of the cube here
    // this is calculated prior to this action
    // so we create all the cubes which are simply a series of coordinates

    // add data to the constructor?
    // I think this is for checking the coordinates of the cube
    // making sure they don't clash with other cubes
    let newCubeC = randomCube.c;
    let newCubeR = randomCube.r;
    let newCubeZ = randomCube.z;

    // get a random number between 0 and 1
    const r = random(1);

    // if the random number is less than 0.3

    if (r < 0.3) {
      newCubeC++;
    } else if (r < 0.6) {
      newCubeR++;
    } else {
      newCubeZ++;
    }

    // I think we're checking if the cube is already in that space
    const spotTaken = cubes.some((cube) => {
      return cube.c == newCubeC && cube.r == newCubeR && cube.z == newCubeZ;
    });

    if (!spotTaken) {
      cubes.push(new Cube(newCubeC, newCubeR, newCubeZ));
      cubeAdded = true;
    }
  }
}

// we use this function to create the cube
//
class Cube {
  constructor(c, r, z) {
    // these are the sides?
    // c, r and z are the points?
    this.c = c;
    this.r = r;
    this.z = z;

    // determine the colours here
    // we can also limit the colours or do anything with them
    this.red = random(100, 255);
    this.green = random(100, 255);
    this.blue = random(194, 188, 188);
  }

  draw() {
    let sideLength = 50;
    // this is how we calculate each of the points
    // this is the conversion that we looking at on the tutorial
    const x = gridTopX + ((this.c - this.r) * sideLength * sqrt(3)) / 2;
    const y =
      gridTopY + ((this.c + this.r) * sideLength) / 2 - sideLength * this.z;

    const points = [];
    for (let angle = PI / 6; angle < PI * 2; angle += PI / 3) {
      // console.log(angle);
      // so we're using trigonomerty to calculate the points
      // using the angles here
      points.push(
        createVector(x + cos(angle) * sideLength, y + sin(angle) * sideLength)
      );
    }

    // this takes the same colour and changes it for shading

    // the initial x, y are for the top left corner??
    // fill(this.red * 0.75, this.green * 0.75, this.blue * 0.75);
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

    // this takes the same colour and changes it for shading
    // fill(this.red * 0.9, this.green * 0.9, this.blue * 0.9);

    // determine the points based on previous calculations?
    // so basically on our isometric grid we have
    // so there are 4 points for each triangle in the cube
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

    // this takes the same colour and changes it for shading
    // create a 3d effect
    fill(this.red, this.green, this.blue);
    // these points are for the top squares, rendered at the correct angle
    // for the perspective grid
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

// i can draw the grid myself
// I don't need a tutorial. i have the guide here
// all I need is to turn it into code

// function drawGrid(x, y) {
//   const IsoW = 2;
//   const IsoH = 1;

//   const IsoX = 100;
//   const IsoY = 100;

//   // let i = 2;
//   // let j = 1;

//   sideLength = 50;

//   // calculate these points based on the screen size
//   let localX = 2;
//   let localY = 1;

//   let angle = PI / 6;

//   let pointX = GlobalX + cos(angle) * sideLength;
//   let pointY = GlobalY + sin(angle) * sideLength;

//   line(GlobalX, GlobalY, pointX, pointY);
// }

canvasSketch(({ p5 }) => {
  // Inside this is a bit like p5.js 'setup' function
  // createCanvas(760, 760);
  gridTopX = width / 2;
  gridTopY = height / 2;

  // strokeWeight(3);
  strokeCap(ROUND);
  // stroke(252, 231, 230);

  cubes.push(new Cube(0, 0, 0));

  // this deteremines how many cubes are added to the frame
  // line(30, 20, 500, 500);

  while (cubes.length < 50) {
    addRandomCube();
  }

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
    // windowResized();
    background(252, 231, 230);

    // for (const cube of cubes) {
    //   cube.draw();
    // }

    // this deteremines the slant of the iso grid
    // why?
    // width... height... 2, 1. I don't understand why

    let i = 2;
    let j = 1;

    sideLength = 50;

    // const x = gridTopX + ((c - r) * sideLength * sqrt(3)) / 2;
    // const y = gridTopY + ((c + r) * sideLength) / 2 - sideLength * z;

    // CREATING A VECTOR
    // plot the other points here
    // I have made this whole function too complex

    function gridSquarePoint(GlobalX, GlobalY, sideLength, i, j) {
      let count = 0;
      let gridPoints = [];
      // this is basically the offset here

      for (let angle = PI / 6; angle < PI * 2; angle += PI / 3) {
        gridPoints.push(
          createVector(
            GlobalX + cos(angle) * sideLength,
            GlobalY + sin(angle) * sideLength
          )
        );

        count++;
      }
      // return [GlobalX, GlobalY, gridPoints];
      return gridPoints;
    }

    // we can draw a quad here, the diagonal square.
    // I want to draw it without the colour

    const IsoX = width / 2;
    console.log(IsoX);
    const IsoY = 100;

    const IsoW = 2;
    const IsoH = 1;

    let GlobalX;
    let GlobalY;
    let gridPoints;

    // gridPoints = gridSquarePoint(100, 100);
    // drawGridSquare(100, 100, gridPoints);

    function drawGridSquare(x, y, gridPoints) {
      // console.log(gridPoints);
      quad(
        x,
        y,
        gridPoints[3].x,
        gridPoints[3].y,
        gridPoints[4].x,
        gridPoints[4].y,
        gridPoints[5].x,
        gridPoints[5].y
      );
    }

    // draw three grids
    function drawIsoTile(IsoX, IsoY) {
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          // mate copilot has saved me a couple of times, this being one of them.
          // GlobalX = IsoX + ((i - j) * sideLength * sqrt(3)) / 2;
          GlobalX = IsoX + ((i - j) * sideLength * sqrt(3)) / 2;
          // GlobalX = IsoX + (i - j) * IsoW;
          GlobalY = IsoY + ((i + j) * sideLength) / 2;
          // GlobalY = IsoY + (i + j) * IsoH;
          gridPoints = gridSquarePoint(GlobalX, GlobalY, sideLength);

          drawGridSquare(GlobalX, GlobalY, gridPoints);
        }
      }
    }

    // draw tiles within tiles

    // draw three grids
    // #TODO
    for (let i = 3; i > 0; i--) {
      drawIsoTile(width / 2, i * 100 + -20);
    }

    // helper function for drawing iso grid?

    // 30 degrees
    // let pointX = GlobalX + cos(angle) * sideLength;
    // let pointY = GlobalY + sin(angle) * sideLength;

    // let LocalX = ((GlobalY - IsoY) / IsoH + (GlobalX - IsoX) / IsoW) / 2;
    // let LocalY = ((GlobalY - IsoY) / IsoH - (GlobalX - IsoX) / IsoW) / 2;
  };
}, settings);

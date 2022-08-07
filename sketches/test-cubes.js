const canvasSketch = require("canvas-sketch");
const random = require("canvas-sketch-util/random");
const { polylinesToSVG } = require("canvas-sketch-util/penplot");
const p5 = require("p5");

const settings = {
  dimensions: [1080, 1080],
  // context: "webgl",
  // animate: true,
};

// so we want the points to be drawn for the cube
function drawLine(point1, point2) {
  this.context.beginPath();
  this.context.moveTo(point1.x, point1.y);
  this.context.lineTo(point2.x, point2.y);
  this.context.stroke();
}

const margin = 10;
const cols = 10;
const rows = 10;

const gap = 10;
// const gap = 1;

// start coordinate point
const POINT_2D = function (x, y) {
  this.x = x;
  this.y = y;
};

// take this as the initial constructor..?
const POINT_3D = function (x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
};

//
const TILE_WIDTH = 64;
const TILE_HEIGHT = 64;

// initialise the grid
// convert the 2d array into an isometric grid

// create an array of points
// convert to constructor?
const initGrid = () => {
  const grid = [];
  // this.screen.x = map.x * tile_width;
  // this.screen.y = map.y * tile_height;

  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      // grid.push(new POINT_2D(x, y));
      grid.push([x, y]);

      // console.log("grid", grid);
      // console.log("points", x, y);
      // this.x = x;
      // this.y = y;
    }
  }

  console.log("grid", grid);
  return grid;
};

// half width and half height
const ISOMETRIC_POINT = function (x, y, TILE_WIDTH_HALF, TILE_HEIGHT_HALF) {
  let pointX = (x - y) * TILE_WIDTH_HALF;
  let pointY = (x + y) * TILE_HEIGHT_HALF;

  this.x = pointX;
  this.y = pointY;
};

// isometric grid
const drawGrid = (context, width, height, grid) => {
  const w = (width - 400) / cols;
  const h = (height - 400) / rows;

  let grid_width = cols * w + (cols - 1) * gap;
  let grid_height = rows * h + (rows - 1) * gap;

  let xOffset = (width - grid_width) / 2;
  let yOffset = (height - grid_height) / 2;

  const TILE_WIDTH = 64;
  const TILE_HEIGHT_HALF = 32;
  // console.log("grid", grid);
  // screen.x = (map.x - map.y) * TILE_WIDTH_HALF;
  // screen.y = (map.x + map.y) * TILE_HEIGHT_HALF;

  //
  for (let i = 0; i < 3; i++) {
    for (let j = 1; j < 3; j++) {
      // let x = xOffset + (w + gap) * i;
      // let y = yOffset + (h + gap) * j;
      // console.log("x and y", x, y);

      let newPoint = new ISOMETRIC_POINT(i, j, TILE_WIDTH, TILE_HEIGHT_HALF);
      // console.log("point", point);
      console.log(i, j);
      console.log("point", newPoint.x, newPoint.y);
      context.strokeStyle = "white";
      context.strokeRect(400 + newPoint.x, 400 + newPoint.y, 64, 64);
      context.stroke();
    }
  }
};

// create a grid here
// const grid = createGrid(5, 5);

const sketch = () => {
  const BACKGROUND_COLOUR = "#2D2B2C";
  // const STROKE_COLOUR = "#A6A4A4";
  const STROKE_COLOUR = "#DED9D9";

  return ({ context, width, height }) => {
    context.fillStyle = BACKGROUND_COLOUR;
    context.fillRect(0, 0, width, height);

    const half_width = width / 2;
    const half_height = height / 2;
    // let x = width / 2;
    // let y = 0;

    // let xOffset = (width - grid_width) / 2;
    // let yOffset = (height - grid_height) / 2;
    // console.log("offsets", xOffset, yOffset);

    // the first point of the square

    let grid = initGrid();
    drawGrid(context, width, height, grid);

    // for (let i = 0; i < cols; i++) {
    //   for (let j = 0; j < rows; j++) {
    //     // creating the canvas with a margin
    //     let grid_width = cols * w + (cols - 1) * gap;
    //     let grid_height = rows * h + (rows - 1) * gap;

    //     // use these values to centre the grid

    //     // console.log("offsets", xOffset, yOffset);

    //     // the first point of the square
    //     let x = xOffset + (w + gap) * i;
    //     let y = yOffset + (h + gap) * j;
    //     context.strokeStyle = "yellow";
    //     context.strokeRect(x, y, w, h);

    //     // context.beginPath();
    //     context.strokeStyle = STROKE_COLOUR;
    //     context.moveTo(x, y);
    //     // context.lineTo(x, y + h * 0.5);
    //     context.stroke();

    //     context.lineTo(x + w, y + h);

    //     // console.log("points-1", x, y);
    //     // console.log("points-2", x + w, y + h);
    //     // context.lineTo(x, y + h);

    //     // context.moveTo(x + w, y);
    //     // context.lineTo(x + 100, y + 100);

    //     // console.log(x, y);
    //   }
    // }

    // return [
    //   // Export PNG as first layer
    //   context.canvas,
    //   // Export SVG for pen plotter as second layer
    //   {
    //     data: polylinesToSVG(lines, {
    //       width,
    //       height,
    //       units,
    //     }),
    //     extension: ".svg",
    //   },
    // ];

    //   }
    // }
  };
};

canvasSketch(sketch, settings);

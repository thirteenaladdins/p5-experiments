const canvasSketch = require("canvas-sketch");
const random = require("canvas-sketch-util/random");
const { polylinesToSVG } = require("canvas-sketch-util/penplot");

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

// function to draw the cube
// function drawCube() {}

const margin = 10;
const cols = 10;
const rows = 10;

// const gap = 20;
const gap = 1;

// create a colour pallette
// const colours = ["#cdb4db", "#ffc8dd", "#ffafcc", "#bde0fe", "#a2d2ff"];

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

// accept the points
// create a constructor to create a cube
// function Cube(x, y, z) {
//   this.x = x;
//   this.y = y;
//   this.z = z;
// }

// drawing cubes
// plot all points for cube
// drawing points - then drawing the lines to connect those points
var vertices = [-0.5, 0.5, 0.0, -0.5, -0.5, 0.0, 0.5, -0.5, 0.0, 0.5, 0.5, 0.0];

// indices = [3, 2, 1, 3, 1, 0];

// might be a 3d image?
// figure out how to draw a cube

const sketch = () => {
  var vertices = [-0.5, 0.5, 0.0, 0.0, 0.5, 0.0, -0.25, 0.25, 0.0]; // x, y, z

  const BACKGROUND_COLOUR = "#2D2B2C";
  // const STROKE_COLOUR = "#A6A4A4";
  const STROKE_COLOUR = "#DED9D9";

  return ({ context, width, height }) => {
    var vertCode =
      "attribute vec3 coordinates;" +
      "void main(void) {" +
      " gl_Position = vec4(coordinates, 1.0);" +
      "}";

    var fragCode =
      "void main(void) {" + " gl_FragColor = vec4(0.5, 0.3, 0.0, 7.5);" + "}";

    // context.drawElements(
    //   context.TRIANGLES,
    //   context.length,
    //   context.UNSIGNED_SHORT,
    //   0
    // );

    const w = (width - 400) / cols;
    const h = (height - 400) / rows;

    context.fillStyle = BACKGROUND_COLOUR;
    context.fillRect(0, 0, width, height);

    const half_width = width / 2;
    const half_height = height / 2;
    let x = width / 2;
    let y = 0;

    // we can draw that mario pyramid but instead of on the command line we can render cubes
    // I'll see if I can remember how to do it

    // context.beginPath();
    // context.moveTo(0, 0);
    // context.lineTo(0, height);
    // context.lineWidth = 4;

    // pre-calculate all the points?
    function drawCube(context, x, y, wx, wy, h) {
      // left face
      context.beginPath();
      context.moveTo(x, y);
      context.lineTo(x - wx, y - wx * 0.5);
      context.lineTo(x - wx, y - h - wx * 0.5);
      context.lineTo(x, y - h * 1);
      context.closePath();
      context.fillStyle = "#838357";
      context.strokeStyle = "#7a7a51";
      context.miterLimit = 1;
      context.stroke();
      context.fill();

      // right face
      context.beginPath();
      context.moveTo(x, y);
      context.lineTo(x + wy, y - wy * 0.5);
      context.lineTo(x + wy, y - h - wy * 0.5);
      context.lineTo(x, y - h * 1);
      context.closePath();
      context.fillStyle = "#6f6f49";
      context.strokeStyle = "#676744";
      context.miterLimit = 1;
      context.stroke();
      context.fill();

      // center face
      context.beginPath();
      context.moveTo(x, y - h);
      context.lineTo(x - wx, y - h - wx * 0.5);
      context.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5));
      context.lineTo(x + wy, y - h - wy * 0.5);
      context.closePath();
      context.fillStyle = "#989865";
      context.strokeStyle = "#8e8e5e";
      context.miterLimit = 1;
      context.stroke();
      context.fill();
    }

    var sizeX = 40;
    var sizeY = 40;
    var sizeZ = 40;

    // drawCube(context, 300, 300, sizeX, sizeY, sizeZ);

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        // to centre it perfectly I need to calculate the width of the grid

        // calculate the width of the grid
        let grid_width = cols * w + (cols - 1) * gap;
        let grid_height = rows * h + (rows - 1) * gap;

        // use these values to centre the grid
        let xOffset = (width - grid_width) / 2;
        let yOffset = (height - grid_height) / 2;
        // console.log("offsets", xOffset, yOffset);

        // the first point of the square
        // cube - need to offset the x + y values to start at the top right of the previous cube

        let x = xOffset + (w + gap) * i;
        let y = yOffset + (h + gap) * j;

        console.log(x, y);
        context.strokeStyle = STROKE_COLOUR;

        // drawCube(context, x, y, w, h, 100);
        drawCube(context, x, y, sizeX, sizeY, sizeZ);

        // context.beginPath();
        // context.moveTo(x, y);
        // context.lineTo(x, width);
        // context.strokeStyle = "red";
        // context.stroke();

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
      }
    }
  };
};

function drawFace(context, x, y, w, h) {
  // context.setTransform(1, 0, 0, 1, posX, posY);
  // context.rotate(180);
  // context.scale(scale, scale);
  context.strokeStyle = "white";
  context.moveTo(x, y);
  context.lineTo(x, y + h);

  // context.closePath();
  // top side
  context.moveTo(x, y);
  context.lineTo(x + w, y);

  // right side
  context.moveTo(x + w, y);
  context.lineTo(x + w, y + h);

  // bottom side
  context.moveTo(x, y + h);
  context.lineTo(x + w, y + h);
  context.stroke();
}

canvasSketch(sketch, settings);

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
    // let x = width / 2;
    let y = 0;

    // we can draw that mario pyramid but instead of on the command line we can render cubes
    // I'll see if I can remember how to do it

    // context.beginPath();
    // context.moveTo(0, 0);
    // context.lineTo(0, height);
    // context.lineWidth = 4;

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        // to centre it perfectly I need to calculate the width of the grid

        // calculate the width of the grid
        // grid_width = cols * w + (cols - 1) * gap;
        // grid_height = rows * h + (rows - 1) * gap;
        let grid_width = cols * w + (cols - 1) * gap;
        let grid_height = rows * h + (rows - 1) * gap;
        // console.log(width - grid_width);

        // use these values to centre the grid
        let xOffset = (width - grid_width) / 2;
        let yOffset = (height - grid_height) / 2;
        console.log("offsets", xOffset, yOffset);

        // the first point of the square
        let x = xOffset + (w + gap) * i;
        let y = yOffset + (h + gap) * j;
        // context.fillStyle = "red";
        // context.strokeStyle = "yellow";
        // context.strokeRect(x, y, w, h);

        // context.beginPath();
        context.strokeStyle = STROKE_COLOUR;
        context.moveTo(x, y);
        context.lineTo(x, y + h * 0.5);
        context.stroke();
        context.closePath();

        // lineTo draws to a position to decide the isometric view of the cube
        // plot the point of the triangle
        // from our two points we can calculate the third point
        context.lineTo(x + w, y + h);
        context.lineTo(x, y + h);

        // context.moveTo(x + w, y);
        // context.lineTo(x + 100, y + 100);

        // console.log(x, y);
      }
    }

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

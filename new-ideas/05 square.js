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
function drawCube() {}

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

    function drawCube(x, y, wx, wy, h) {
      // left face
      context.beginPath();
      context.moveTo(x, y);
      context.lineTo(x - wx, y - wx * 0.5);
      context.lineTo(x - wx, y - h - wx * 0.5);
      context.lineTo(x, y - h * 1);
      context.closePath();
      context.fillStyle = "#838357";
      context.strokeStyle = "#7a7a51";
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
      context.stroke();
      context.fill();
    }

    // drawFace(context, x, y, w, h);

    var sizeX = 32;
    var sizeY = 32;
    var sizeZ = 8;
    drawCube(context, 100, 100, sizeX, sizeY, sizeZ);

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

        // draw each face of the cube
        // context.beginPath();
        context.strokeStyle = STROKE_COLOUR;

        const angle = 45;
        const scale = 1;
        const posY = x;
        const posX = y;

        // drawRect(context);
        // drawFace(context, x, y, w, h);
        // drawImageRot(context, 0, 0, 100, 100, 0);
        // drawRectNonCentre();

        // draw the front face
        // context.save();
        // drawFace(x, y, w, h);
        // context.restore();

        // where draw the top face, angled
        // draw the back face
        // rotate the object

        // drawImageRot(context, x, y, w, h, 45);

        // context.strokeRect(200, 40, 100, 100);

        function drawRectNonCentre() {
          context.fillStyle = "red";
          context.fillRect(200, 40, 100, 100);
        }

        function drawRect(context) {
          // context.setTransform(1, 0, 0, 1, posX, posY);
          // context.rotate(180);
          // context.scale(scale, scale);
          context.strokeStyle = STROKE_COLOUR;
          context.strokeRect(-50, -50, 100, 100);
          context.stroke();
        }

        // draw front faces
        // rotate faces into the z axis?

        // rotate object
        // function drawImageRot(ctx, x, y, width, height, deg) {
        //   // Store the current context state (i.e. rotation, translation etc..)
        //   ctx.save();

        //   //Convert degrees to radian
        //   var rad = (deg * Math.PI) / 180;

        //   //Set the origin to the center of the image
        //   ctx.translate(x + width / 2, y + height / 2);

        //   //Rotate the canvas around the origin
        //   ctx.rotate(rad);

        //   //draw the image
        //   // ctx.drawImage(
        //   //   img,
        //   //   (width / 2) * -1,
        //   //   (height / 2) * -1,
        //   //   width,
        //   //   height
        //   // );

        //   // Restore canvas state as saved from above
        //   ctx.restore();
        // }

        // Restore canvas state as saved from above
        // context.restore();

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

canvasSketch(sketch, settings);

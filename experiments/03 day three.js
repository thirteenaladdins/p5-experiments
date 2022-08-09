const canvasSketch = require("canvas-sketch");
const random = require("canvas-sketch-util/random");

const settings = {
  dimensions: [1080, 1080],
  // animate: true,
};

const margin = 10;
const cols = 10;
const rows = 10;

const gap = 20;

// create a colour pallette
const colours = ["#cdb4db", "#ffc8dd", "#ffafcc", "#bde0fe", "#a2d2ff"];

// start coordinate point

const sketch = () => {
  return ({ context, width, height }) => {
    const w = (width - 400) / cols;
    const h = (height - 400) / rows;

    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    const half_width = width / 2;
    const half_height = height / 2;
    // let x = width / 2;
    let y = 0;

    // draw lines between each of the squares
    context.beginPath();
    // context.strokeStyle = "#ffc8dd";
    context.strokeStyle = "white";
    context.moveTo(half_height, y);
    context.lineTo(half_height, height);
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    // bit confusing here -
    context.moveTo(0, half_width);
    context.lineTo(width, half_width);
    context.stroke();

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        // to centre it perfectly I need to calculate the width of the grid

        // calculate the width of the grid
        grid_width = cols * w + (cols - 1) * gap;
        grid_height = rows * h + (rows - 1) * gap;
        console.log(width - grid_width);

        // use these values to centre the grid
        xOffset = (width - grid_width) / 2;
        yOffset = (height - grid_height) / 2;
        console.log("offsets", xOffset, yOffset);

        let x = xOffset + (w + gap) * i;
        let y = yOffset + (h + gap) * j;
        console.log(x, y);

        context.beginPath();
        context.strokeStyle = "white";

        context.rect(x, y, w, h);
        // let newColour = random.pick(colours);
        context.strokeStyle = "black";

        context.lineWidth = 2;
        context.stroke();

        if (Math.random() > 0.5) {
          context.beginPath();
          context.rect(x + 8, y + 8, w - 16, h - 16);
          context.stroke();
        }

        let value = 40 * random.value();
        // we  want to overlap the squares randomly
        // if (Math.random() > 0.5) {
        context.beginPath();
        context.rect(x + value, y + 8, w - 16, h - 16);
        context.stroke();
        // }
      }
    }
    //   }
    // }
  };
};

canvasSketch(sketch, settings);

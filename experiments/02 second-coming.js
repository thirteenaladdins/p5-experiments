const canvasSketch = require("canvas-sketch");
const random = require("canvas-sketch-util/random");

const settings = {
  dimensions: [1080, 1080],
};

const margin = 10;
const cols = 5;
const rows = 5;

const w = 60;
const h = 60;
const gap = 20;

// create a colour pallette
const colours = ["#cdb4db", "#ffc8dd", "#ffafcc", "#bde0fe", "#a2d2ff"];

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    const half_width = width / 2;
    const half_height = height / 2;
    // let x = width / 2;
    let y = 0;

    context.beginPath();
    context.strokeStyle = "#ffc8dd";
    context.moveTo(half_height, y);
    context.lineTo(half_height, height);
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    // bit confusing here -
    context.moveTo(0, half_width);
    context.lineTo(width, half_width);
    context.stroke();

    //  - starting here -
    // first lot squares start at 0 on the x axis
    //  0 + 100
    // second lot of squares start at

    // the margin works well - i just don't understand how it works
    // why does * i work?
    // i take you further along the x axis

    // start 0 + 80
    // then width / 2 + 80

    // then do the same for the y axis
    let offset;
    for (let f = 0; f < 541; f = f + 540) {
      for (let g = 0; g < 541; g = g + 540) {
        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            // offset = i % 2 === 0 ? 0 : h / 2;
            // calculate the follow coordinates
            console.log(f);

            // this works for this specific example
            // but it doesn't work if I change the number of rows and columns
            xOffset = f;
            yOffset = g;

            let x = 80 + xOffset + (w + gap) * i;
            let y = 80 + yOffset + (h + gap) * j;
            console.log(x, y);

            context.beginPath();
            context.strokeStyle = "white";

            context.rect(x, y, w, h);
            let newColour = random.pick(colours);
            context.strokeStyle = newColour;

            context.lineWidth = 4;
            context.stroke();

            if (Math.random() > 0.5) {
              context.beginPath();
              context.rect(x + 8, y + 8, w - 16, h - 16);
              context.stroke();
            }
          }
        }
      }
    }
  };
};

canvasSketch(sketch, settings);

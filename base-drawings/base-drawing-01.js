const canvasSketch = require("canvas-sketch");
const utils = require("canvas-utils");
const math = require("canvas-sketch-util/math");

const settings = {
  dimensions: [1080, 1080],
};

const degToRad = (degrees) => {
  return degrees * (Math.PI / 180);
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    context.fillStyle = "black";

    const cx = width * 0.5;
    const cy = width * 0.5;

    const w = width * 0.01;
    const h = height * 0.1;
    let x, y;

    const num = 12;
    const radius = width * 0.3;

    for (let i = 0; i < num; i++) {
      const slice = math.degToRad(360 / num);
      const angle = slice * i;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      context.save();
      context.translate(x, y);
      context.rotate(angle);

      context.beginPath();
      context.rect(-w * 0.5, -h * 0.5, w, h);
      context.fill();
      context.restore();
    }
  };
};

canvasSketch(sketch, settings);

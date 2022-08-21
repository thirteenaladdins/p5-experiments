const canvasSketch = require("canvas-sketch");

const {
  renderPaths,
  createPath,
  pathsToPolylines,
  pathsToSVG,
} = require("canvas-sketch-util/penplot");

const math = require("canvas-sketch-util/math");
// const { renderPolylines } = require("canvas-sketch-util/penplot");
const { clipPolylinesToBox } = require("canvas-sketch-util/geometry");

const p5 = require("p5");

new p5();

// canvas-sketch template
const settings = {
  // Pass the p5 instance, and preload function if necessary
  // p5: { p5 },
  p5: true,
  // animate: true,
  dimensions: "A4",
  orientation: "portrait",
  // pixelsPerInch: 300,
  // scaleToView: true,
  // units: "cm",
};

// const sketch = () => {
//   return svg((props) => {
//     const { context, width, height } = props;

//     // ... draw your art ...
//   });
// };

const sketch = (context) => {
  // const { width, height, units } = context;
  // Inside this is a bit like p5.js 'setup' function

  const paths = [];

  // Return a renderer, which is like p5.js 'draw' function
  return ({ context, width, height, units }) => {
    background(255);
    translate(width / 2, height / 2);
    stroke(0);
    noFill();

    let num = 120;
    let radius = 150;

    let sideLength = 400;

    // let paths = [];

    strokeWeight(2.5);

    for (let i = 0; i < num; i++) {
      let angle = math.degToRad(360 / num) * i;
      let x = radius * sin(angle);
      let y = radius * cos(angle);

      arc(x, y, radius, radius, 0, PI);

      const p = createPath();
      // p.arc(width / 2, height / 2, radius, radius, 0, PI);

      // here - this is a different set of points to the above

      p.arc(x + width / 2, y + height / 2, radius, radius, 0, PI);
      paths.push(p);

      // instead of the arc object we want to use the points
    }
    ``;
    noLoop();
    // Convert the paths into polylines so we can apply line-clipping
    // When converting, pass the 'units' to get a nice default curve resolution
    let lines = pathsToPolylines(paths, { units });

    // Clip to bounds, using a margin in working units
    const margin = 1; // in working 'units' based on settings
    const box = [margin, margin, width - margin, height - margin];
    lines = clipPolylinesToBox(lines, box);

    // The 'penplot' util includes a utility to render
    // and export both PNG and SVG files

    return [
      context.canvas,
      {
        data: pathsToSVG(lines, {
          width,
          height,
          units,
        }),
        lineJoin: "round",
        lineCap: "round",
        // in working units; you might have a thicker pen
        // lineWidth: 0.08,
        // Optimize SVG paths for pen plotter use
        optimize: true,
        extension: ".svg",
      },
    ];

    return (props) =>
      renderPaths(lines, {
        ...props,
        lineJoin: "round",
        lineCap: "round",
        // in working units; you might have a thicker pen
        lineWidth: 0.08,
        // Optimize SVG paths for pen plotter use
        optimize: true,
      });
  };
};

canvasSketch(sketch, settings);

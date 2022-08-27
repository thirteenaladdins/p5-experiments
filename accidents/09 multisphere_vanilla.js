const canvasSketch = require("canvas-sketch");
const svg = require("../canvas-to-svg.js");

const {
  renderPaths,
  createPath,
  pathsToPolylines,
  pathsToSVG,
} = require("canvas-sketch-util/penplot");

const math = require("canvas-sketch-util/math");
// const { renderPolylines } = require("canvas-sketch-util/penplot");
// const { clipPolylinesToBox } = require("canvas-sketch-util/geometry");

// const p5 = require("p5");

// new p5();

// canvas-sketch template
const settings = {
  dimensions: [1080, 1080],
  // Pass the p5 instance, and preload function if necessary
  // p5: { p5 },
  // p5: true,
  // animate: true,
  // dimensions: "A4",
  // orientation: "portrait",
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

// const sketch = (context) => {
//   // const { width, height, units } = context;
//   // Inside this is a bit like p5.js 'setup' function

//   const paths = [];

//   // Return a renderer, which is like p5.js 'draw' function
//   return ({ context, width, height, units }) => {
//     background(255);
//     translate(width / 2, height / 2);
//     stroke(0);
//     noFill();

//     let num = 120;
//     let radius = 150;

//     let sideLength = 400;

//     // let paths = [];

//     strokeWeight(2.5);

//     // const path = createPath((context) => {
//     //   // Circle in centre of page
//     //   context.arc(width / 2, height / 2, 25, 0, Math.PI * 2);
//     // });

//     // Get a SVG string of the path
//     // const svg = path.toString();

//     for (let i = 0; i < num; i++) {
//       let angle = math.degToRad(360 / num) * i;
//       let x1 = radius * sin(angle);
//       let y1 = radius * cos(angle);

//       // calculate end point of the arc

//       // let x_end = X_Center + radius * cos(End_Angle);
//       // let y_end = Y_Center + radius * sin(End_Angle);

//       // create path arc is different to the p5.js arc function

//       // lets draw this without the p5.js arc function
//       // how do I add these arcs into the paths array?

//       arc(x1, y1, radius, radius, 0, PI);

//       // draw arc in context

//       const p = createPath();
//       // ctx.beginPath();
//       // arc(100, 75, 50, 0, 2 * PI);
//       // ctx.stroke();
//       // p.arc(width / 2 + x1, height / 2 + y1, radius, 0, PI);

//       paths.push(p);
//     }

//     noLoop();

//     // Convert the paths into polylines so we can apply line-clipping
//     // When converting, pass the 'units' to get a nice default curve resolution
//     let lines = pathsToPolylines(paths, { units });

//     // Clip to bounds, using a margin in working units
//     const margin = 1; // in working 'units' based on settings
//     const box = [margin, margin, width - margin, height - margin];
//     lines = clipPolylinesToBox(lines, box);

//     // The 'penplot' util includes a utility to render
//     // and export both PNG and SVG files

//     return [
//       context.canvas,
//       {
//         data: pathsToSVG(lines, {
//           width,
//           height,
//           units,
//         }),
//         lineJoin: "round",
//         lineCap: "round",
//         // in working units; you might have a thicker pen
//         // lineWidth: 0.08,
//         // Optimize SVG paths for pen plotter use
//         optimize: true,
//         extension: ".svg",
//       },
//     ];

//     return (props) =>
//       renderPaths(lines, {
//         ...props,
//         lineJoin: "round",
//         lineCap: "round",
//         // in working units; you might have a thicker pen
//         lineWidth: 0.08,
//         // Optimize SVG paths for pen plotter use
//         optimize: true,
//       });
//   };
// };

// canvasSketch(sketch, settings);

const sketch = () => {
  return svg((props) => {
    const { context, width, height } = props;

    // ... draw your art ...
    // context.translate(width / 2, height / 2);
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);

    // background(255);
    // translate(width / 2, height / 2);
    // stroke(0);
    // noFill();

    let num = 120;
    let radius = 200;

    let sideLength = 400;

    // let paths = [];

    // strokeWeight(2.5);

    for (let i = 0; i < num; i += 2) {
      let angle = math.degToRad(360 / num) * i;

      let x1 = radius * Math.sin(angle);
      let y1 = radius * Math.cos(angle);

      // let x1 = 100;
      // let y1 = 100;
      context.beginPath();
      context.arc(width / 2 + x1, height / 2 + y1, radius, 0, 2 * Math.PI);

      context.lineWidth = 4;
      context.strokeStyle = "white";
      context.stroke();

      // context.beginPath();
      // context.arc(width / 2, height / 2, radius, 0, 2 * Math.PI);
      // // context.fillStyle = "green";
      // // context.fill();
      // context.lineWidth = 5;
      // context.strokeStyle = "#ffffff";
      // context.stroke();

      // context.closePath;
    }
  });
};

canvasSketch(sketch, settings);

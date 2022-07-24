let padding = 50;
let start = 0;
let xoff = start;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);

  stroke(255);
  strokeCap(SQUARE);
  //   animate and change the stroke width - will do this later
  //   strokeWeight(4);

  //   I want to draw multiple lines.
  //   so we want to loop through a series of points,
  // we want to plot 400 points,
  // cache them in an array
  //   randomly select the

  // not really sure why I need to remove padding twice even though we're
  // already at the top

  //  do we create a point?
  //   and then loop all the points from left to right?

  //   so instead of

  //   let y = noise(xoff) * height;
  //   let y = noise(xoff) * height;

  //   for (y = padding; y < height - padding; y++) {
  beginShape();
  for (x = padding; x < width - padding; x++) {
    let y = noise(xoff) * height;
    // if (y % 4 == 0) {
    //   line(0 + padding, y + padding, width - padding, y + padding);
    vertex(x, y);
    // }
    xoff += 0.01;
  }
  endShape();
  // yoff += 0.01;
  //   }

  noLoop();
}

// integrate the noise function into this.
// we had the moving noise function. You have to increment along the noise values

let padding = 40;

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
  beginShape();
  for (y = 0; y < height - padding - padding; y++) {
    for (x = 0; x < width; x++) {
      if (y % 4 == 0) {
        //   line(0 + padding, y + padding, width - padding, y + padding);
        vertex(y, x);
      }
    }
  }
  endShape();

  //   noLoop();
}

// integrate the noise function into this.
// we had the moving noise function. You have to increment along the noise values

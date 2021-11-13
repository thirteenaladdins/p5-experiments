// this was good but now I'm wondering how
// to add the next part to it.
// I need to limit the space first
// then add extra detail
// add colour, textures
// different types of peaks and valleys
// there is so much to learn but I think if I want to apply myself
// to anything it should be this.

var terrain = [];
var multi = 30;
xoff = 0;
yoff = 0;

function setup() {
  createCanvas(500, 500, WEBGL);
  //   pixelDensity(1);
  angleMode(DEGREES);

  for (var y = 0; y < 60; y++) {
    xoff = 0;
    terrain.push([]);
    for (var x = 0; x < 60; x++) {
      terrain[y][x] = map(noise(xoff, yoff), 0, 1, -multi, multi);
      xoff += 0.03;
    }
    yoff += 0.03;
  }
}

// sample the colours based on the

function draw() {
  background(51);
  stroke(255);
  noFill();

  rotateX(30);

  translate(-height / 2, -width / 2);
  for (y = 0; y < 60; y++) {
    beginShape(TRIANGLE_STRIP);
    for (x = 0; x < 60; x++) {
      // we're scaling the numbers up here so we draw
      vertex(x * 10, y * 10, terrain[y][x]);
      vertex(x * 10, (y + 1) * 10, terrain[y][x]);
    }
    endShape();
  }
}

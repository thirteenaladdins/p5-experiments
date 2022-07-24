// watching another tutorial.
// trying to understand all this

// it doesn't make much sense right now.
// not making much sense at all.

var w = 400;
var h = 400;
var scl = 20;
var cols = w / scl;
var rows = h / scl;

var terrain = [];
//   var terrain = [...Array(width)].map(e => Array(height));

function setup() {
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES);

  for (var y = 0; y < h; y++) {
    terrain[y] = [];
    for (var x = 0; x < w; x++) {
      //   terrain.splice((x, y), random(-10, 10));
      terrain[y][x] = random(-10, 10);
    }
  }
  noLoop();
}

function draw() {
  background(51);
  noFill();
  stroke(255);
  //   strokeWeight(1);
  //For (var BEGIN; END; INTERVAL){
  //DO SOMETHING }
  rotateX(60);
  //   frameRate(1);
  //   translate(width / 2, height / 2);
  translate(-height, -width);
  for (var y = 0; y < height - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < width - 1; x++) {
      //   rect(x * scl, 0, x, height);
      vertex(x * scl, y * scl, terrain[y][x]);
      vertex(x * scl, y + 1 * scl, terrain[y + 1][x]);
    }
    endShape();
  }
}

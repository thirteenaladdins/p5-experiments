// watching another tutorial.
// trying to understand all this

// trying to create a grid I made something more interesting.
// not sure what it is but maybe it'll be my first NFT.
// I'll mint it and see what happens.
var w = 600;
var h = 600;
var scl = 20;
var cols = w / scl;
var rows = h / scl;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);
  stroke(255);
  //For (var BEGIN; END; INTERVAL){
  //DO SOMETHING }
  //   let jump = 20;
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      strokeWeight(1);
      //   rect(x * scl + 10, y * scl + 10, 20, 20);
      rect(x * scl, 0, x, height);
      rect(0, y * scl, width, y);
    }
  }
}

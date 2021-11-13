// var xoff1 = 0;
// var xoff2 = 10000;

var inc = 0.01;
var start = 0;
// This is interesting.
// createCanvas
// I don't really know how this works...
// multiple random lines.

// adding the background in setup
// .... doesn't reset the background each time...
// it allows the previous value to persist

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);
  noFill();
  beginShape();

  var xoff = start;

  // this calculates a value from the the point 0 on the
  // where x is equal to 1 pixel,
  // and it calculated 400 points

  // to prove this i want to use only even numbers...

  // as far I know we're going to be creating some kind of grid...
  for (var x = 0; x < width; x++) {
    // for (var y = 0; y < height; y++) {}

    // if (x % 2 === 0) {
    stroke(255, 204, 0);
    strokeWeight(2);
    // stroke(255);

    // so we're plugging a value into the noise function
    // and retrieving the values from there
    var y = noise(xoff) * height;

    // I'm not really understanding this whole thing.
    // I want to drawe a grid now.

    // we're using this to plot a point, where the x is
    // using the for loop we're calcualting all the points...

    // line connects two sets of points together
    vertex(x, y);
    // console.log(x, y);
    // vertex(x, random(height));

    xoff += inc;
    // }
  }
  endShape();

  start += inc;
  // noloop();

  //   we're mapping the noise to the width of the canvas
  //   var x = map(noise(xoff1), 0, 1, 0, width);
  //   var y = map(noise(xoff2), 0, 1, 0, height);

  //   xoff1 += 0.02;
  //   xoff2 += 0.02;
  //   var x = random(width);
  //   ellipse(200, 200, noise(100) * 50, noise(110) * 50);
  //   ellipse(x, y, 24, 24);
  //   noise();
}

// this is a very simple amount of code but I wouldn't
// be able to make it off my own back. I don't really understand it all that well.
// i know that what's happening is there is a noise function which samples
// random values that are essentially all the way along a smooth scale
// what this particle program is plotting the value of the noise function
// as it was calculated and increment time?
// or we sample the next point in the noise function...

// I might have to relearn basic trigonometry again
// parametric equations

// now we want to map

// so we are going to add some padding
// then multiple lines from the top for the bottom of the page
// then parametric equations

// then creating terrain with 2d noise...

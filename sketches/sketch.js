function setup() {
  createCanvas(600, 600, WEBGL);
  angleMode(DEGREES);
}

var randInt = random(50);

function draw() {
  background(100);

  rotateX(60);

  noFill();
  stroke(255);

  for (var i = 0; i < 50; i++) {
    var r = map(sin(frameCount / 2), -1, 1, 100, 200);
    var g = map(i, 0, 20, 100, 200);
    var b = map(cos(frameCount), -1, 1, 200, 100);

    stroke(r, g, b);

    beginShape();
    for (var j = 0; j < 360; j += 10) {
      var rad = i * 2;
      var x = rad * cos(j);
      var y = rad * sin(j);
      var z = sin(frameCount * 2 + i * 10) * 50;

      vertex(x, y, z);
    }

    endShape(CLOSE);
  }
}

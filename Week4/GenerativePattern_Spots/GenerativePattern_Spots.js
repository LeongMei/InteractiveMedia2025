//Random Generative Pattern // returns randomly size, fill colour, stroke weight and X pos

var r, g, b;
var circleSize;
var lineWeight;

function setup() {
  createCanvas(800, 800);
  background("yellow");
}

function draw() {
  //initialize random value in draw
  //redraws colour randomly by 60fps
  r = random(255);
  g = random(255);
  b = random(255);

  circleSize = random(10, 100);
  //lineWeight = random(2, 10);
  xPos = random(0, width);
  yPos = random (0, height);
  fill(r, g, b, 100);
  

  strokeWeight(lineWeight);
  ellipse(xPos, yPos, circleSize);
  ellipse(xPos, yPos,  circleSize);

}

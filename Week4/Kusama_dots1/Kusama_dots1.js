var col;
var b, r, xPos, yPos, circleSize;

function setup()
{
  createCanvas(windowWidth, 1000);
  frameRate(3);
}


function draw() {
//remap the mouseX to a new range between 0 and 255, use that returned value to equal b.
// b value will stand for blue in r,g,b. 
// when mouseX is 0, (r=255, g=255, b=0) - the background is yellow
// when mouseX is full width  (r=255, g=255, b=255)- the background is white

b=map(mouseX, 0, width, 0, 255);

//r,g,b,a - the 4th argument is alpha - controls transparency
background(255,255,b,20);

//width and height are system variables. Set the xPos and yPos to a random value between 0 and browser size.
xPos=random(width)
yPos=random(height)
circleSize=random(10,100);


//black to red
r=map(mouseX, 0, width, 0, 255);
fill(r, 0, 0);
noStroke(0);
//ellipse(xPos, yPos, circleSize);

//for loop, each time run the loop, draw 10 circles with random x,y position per each frame.
{
xPos=random(width)
yPos=random(height)
ellipse(xPos, yPos, circleSize);
}
}

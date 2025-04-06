var r, g, b, circleSize, lineWidth;


function setup() {
createCanvas(windowWidth, windowHeight);
background(220);
frameRate(8);
}

function draw() {
//initialize random value in draw// redraws colour randomly by 60fps
r=random(255);
g=random(255);
b=random(255);
lineWidth = random(1,5);
circleSize = random(width/100,width/2);

fill(r, g, b);
square (mouseX, mouseY, circleSize/10);

fill(r, g, b);
ellipse (width/2, height/2, circleSize);
}

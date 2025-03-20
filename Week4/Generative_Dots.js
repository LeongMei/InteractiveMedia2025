let x, y;


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(random(3,4));
}

function draw() {
  for (i = 0; i < 100; i++) {
    let x = random(0, width);
    let y = random(0, height);
    mapped_x = map(mouseX, 0, width, 0, 15);
    mapped_y = map(mouseY, 0, height, 0, 15);    
    
    strokeWeight(2);
    circle(x, y, 100);
    
    if (x > width/2)
    {
    stroke("white");
    fill("red")
    } else {
    stroke("red");
    fill("white")
 
  }
}
}

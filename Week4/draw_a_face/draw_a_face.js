//move the face from function draw to function setup. The face is drawn to the canvas once in the setup. The hair is drawn repeatedly in the draw function. 
function setup () {
createCanvas (1000, 1000);
background (255,255,0);

//face block 
  fill(220);
  ellipse(500,500,900);

  fill(25);
  rect(150,220,300,150);

  fill(150, 75, 0);
  circle(700,300, 300);

  //eyes
  fill(150, 75, 0);
  ellipse(300, 300, 200, 100);
  fill(50,0,255);
  ellipse (700, 300, 200, 100);

  fill(0);
  circle(300,300, 80);
  circle(700, 300, 80);

  triangle(400,600, 500, 250, 600, 600);

  fill("red");
  ellipse(500,750,500, 200);
}

function draw () {
  
 //hair
  //fill with a random colour
  fill (random(255), random (255), random (255));
  circle(mouseX, mouseY, 30);
}

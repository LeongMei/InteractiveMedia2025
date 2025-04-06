//**code based on tutorial by Patt Vitra - text to point
// sine function oscillates the text

let font;
let points =[];
let r = 10;
let angle = 0;

function preload() {
  font = loadFont('/data/IBMPlexMono-Bold.ttf');
  
}

function setup() {
  createCanvas(1000, 400);
  angleMode(DEGREES);


  //textToPoints extra parameters
  //sampleFactor: increase dot resolution = more or less dots
  //simplifyThreshold: removes collinear points, points on same line
  textAlign(CENTER,CENTER);
  cx = 120;
  points = font.textToPoints("LES POINTS", width*0.5-350, height*0.5_50, cx, {
  sampleFactor:0.09,
  simplifyThreshold:0, 
  }); 
  console.log(points);//points has an x, y, and alpha for angle
}


function draw() {
  background("#FFCBC4");

  //for loop for dot spacing
  //  add cosine function to x co-ordinate, and add multiplier by i to change each start position

  for (let i=0; i<points.length; i++) {
    ellipse(points[i].x + r*sin(angle + i*6), points[i].y, 8, 8);
    fill("#D2042D");
    noStroke();
    //stroke("#D2042D");
  }
  //increment angle after loop
  angle += 4;
  //also can change radius value 'r' before setup, for more movement
}

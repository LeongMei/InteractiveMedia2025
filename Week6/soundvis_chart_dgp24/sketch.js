let song;
let button;
let amp;
let vol;
let volumes = [];

function preload() {
  song = loadSound("The Carnival of the Animals - III. Swift Animals.mp3");
}

function setup() {
  createCanvas(900, 400);
  frameRate(15);
  // frames per second, canvas will draw and retrieve volume or amplitude object values, default is frame rate 60//

  // Button default settings
  button = createButton("PAUSE");
  button.mousePressed(toggle);
  song.play();
  song.setVolume(1);

  // Amplitude tracking
  amp = new p5.Amplitude();
}

function draw() {
  background(10, 10, 10);
  textSize(18);
  fill(255);
  text("The Carnival of the Animals - III. Swift Animals",20,40);

  // Analyse volume
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    vol = amp.getLevel();
    console.log(vol);
    volumes.push(vol);
  }

// ellipse droplets, for loop
  
  for (let i = 0; i < volumes.length; i++) {
  mapCol = map(volumes[i], 0, 0.3, 0, 255);
  fill(0,mapCol,mapCol); //teal colours
  noStroke();
  var ellipseHeight = map(volumes[i], 0, 0.3, 10, height-10);
  var ellipseScale = map(volumes[i], 0, 0.3, 10, 50);
  ellipse(  i * 2+10,ellipseHeight, ellipseScale,10);

  //volumes[i] picks a value stored in array, at index i+, 1,2,3...frames rate determines how many times per second that the volume level is returned, thus ellipse drawn. 
  }
  
}

function toggle() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(1);
    button.html("PAUSE");
  } else if (song.isPlaying()) {
    song.pause();
    button.html("PLAY");
  }
}

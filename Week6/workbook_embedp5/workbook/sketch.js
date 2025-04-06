 //good resource on positioning p5 canvas on html website by Kenneth Lim https://github.com/processing/p5.js/wiki/Positioning-your-canvas//
 
 var song;
 var amp;
 var button;


function preload (){
song = loadSound ("assets/The Carnival of the Animals - VIII. Personages with long ears.mp3");
 }
 
 function toggleSong (){
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
 }

 function setup() {
  // createCanvas(windowWidth, windowHeight);
  //for html
  var canvas = createCanvas(500,500);
  canvas.parent('sketch-holder');
  background(220);

 
  button = createButton('toggle');
  button.parent("sketch-holder");//give button same parent as canvas
  button.position(-280, 30 , 'relative');  // or any other position type   

  button.mousePressed(toggleSong);
  song.play();
  amp = new p5.Amplitude();
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  var vol = amp.getLevel();
  ellipse(width/2,height/2, 300, 1000 * vol);
  ellipse(width/2,height/2, 300, 1000 * vol);
  fill(220,70,90);
}

//amplitude object, to get sound internally
//connect the amplitude object to the song object
//amplitude objects will listen to what is playing by default
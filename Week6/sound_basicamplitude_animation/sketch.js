 var song;
 var amp;
 var button;


 function preload (){
song = loadSound ("The Carnival of the Animals - VIII. Personages with long ears.mp3")
 }
 
 function toggleSong (){
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
 }

 function setup() {
  createCanvas(400, 400);
  background(220);
  button = createButton('toggle');
  button.mousePressed(toggleSong);
  song.play();
  amp = new p5.Amplitude();
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
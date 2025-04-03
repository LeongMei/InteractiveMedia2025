//copy image data exercise//
//pumpkin photograph credit: 
//thaths, 2015. 'Yayoi Kusama's Yellow Pumpkin, (photograph), Flickr <https://www.flickr.com/photos/thaths/22939334634>.
// image licensed as Attribution-NonCommercial
// p5.js copy() function reference: https://p5js.org/reference/p5/copy/

var topImg;
var bottomImg;
var pumpkin;
var img;

function preload() {
  topImg  = loadImage('/data/yayoikusamablackandwhite.jpg');
  bottomImg = loadImage('/data/ykcol.jpg');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  //textAlign(CENTER);
    background(0, 0, 255);

  //hide cursor and use a different asset
  noCursor();
  cursor('/data/pumpkinmask.png', 20, -10);

  //load top image
  image(topImg, width/2, height/2);
  topImg.resize = map(image, width/2, height/2, width, height);
}


function mouseDragged(){
  //copy() function - copy the bottom image to the top image, when the mouse is moved accross canvas//
  copy(bottomImg, mouseX, mouseY, 32, 32, mouseX, mouseY, 32, 32);
}

//Write a particle system that manipulates letters in a sentence
//**Useful References:
//Daniel Shiffman - series of particle system and vector system
//https://youtu.be/syR0klfncCk

//Pat Vitra Exloding Hearts(Particle System)
//https://youtu.be/YgDY7l2W9eE?feature=shared

//1.1 What is a Vector - Nature of Code https://youtu.be/bKEaK7WNLzM?

//Wrap Images with Particles - Barney Code
// youtu.be/wx1sjFkpPyA?



//variable that store text
let sentence ="the house of dust"; 

//stores particles in an array
let particles = [];


function setup() {
  createCanvas(400, 400);
  textSize(20);
  textAlign(LEFT);
  text(sentence, 0, 0);
  let x = width/2 - 80; //sentence x pos
  let y = height/2; //sentence y pos
  
  //initialise letters as particles
    for (let i = 0; i < sentence.length; i++) { 
    let char = sentence[i]; 
    let w = textWidth(char); 
    particles.push(new LettersParticle(char, x, y)); //create new letter particle
    x += w;
  }
}

//create a particle system for letters
class LettersParticle {
constructor(char, x, y) { 
  this.char=char; // a character
  this.pos = createVector(x,y); // position to move to
  this.home =createVector(x,y); //home position to return to
  this.vel= createVector(0,0); //velocity to make object moveable
  this.acc=createVector(0,0); //acceleration to make object moveable
  }
  
  applyForce(force) {
    this.acc.add(force);
  }

  //makes the particles move using mouse
  update(){
    let mouse = createVector(mouseX, mouseY);
    let dir = p5.Vector.sub(this.pos, mouse); //calculates direction from particle to mouse
    let d = dir.mag(); //distance from particle to mouse

    //letters repulsed from mouse //if distance from mouse is 100
    if (d < 100 && d !== 0) { 
      dir.normalize();
      let strength = 20 / (d * d);
      dir.mult(strength * 10); //<--
      this.applyForce(dir);
    }

    //letters return to home position
    let homeForce = p5.Vector.sub(this.home, this.pos);
    homeForce.mult(0.5); //<-- attracts letter to home position
    
    this.applyForce(homeForce);

    this.vel.add(this.acc);
    this.vel.mult(0.3); //<-- how fast letter return to home
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  show() {
    fill(0);
    noStroke();
    text(this.char, this.pos.x, this.pos.y);
  }
}


function draw() {
  background(220);
  for (let p of particles) {
    p.update(); //update the position 
    p.show(); //display the text as particles
  }
}

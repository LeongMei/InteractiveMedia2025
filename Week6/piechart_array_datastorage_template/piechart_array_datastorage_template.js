//* code based on p5.js reference example pie-chart//

//My data storage as a pie chart, measurement in Gigabytes
//draws a randomly coloured pie chart of my data storage by size and storage location - laptop, phone, hard drive and google drive. 
//--> INSTRUCTIONS <--//
//copy this code into a new sketch
//update the numbers variable, so it contains your dataset - written as a value in percentage of 360
//write each data point as a value separated by a comma -> var numbers = [1, 2, 3, 4];
//annotate and label what each pie wedge represents.

//CALCULATE DATA STORAGE AS PERCENTAGE OF CIRCLE - PIE//
//find total of data storage used:
//laptop = 690gb + phone = 60gb + harddrive = 1260gb + google drive = 10.2gb
//total storage used = 2112

//find percentage of storage per data storage location. 
//storage divide by total storage * 100 
/// 690gb/2112*100 = 32.67%
/// 60/2112*100 = 2.84%
/// 1260gb/2112gb*100 = 59.66%
/// 102gb/2112gb*100 = 4.83%

//find percentage of storage as a proportion of a circle 
// percentage of storage times by 360//
/// 32.67% of 360 = 117.6
/// 2.84% of 360 = 10.2
/// 59.66% of 360 = 214.8
/// 4.83% of 360 = 17.4
//use the proportional values in your numbers array. The sum of those numbers will be 360. 

var numbers = [117.4, 10.2, 214.8, 17.4];
function setup() {
canvasDiv = document.getElementById('mySketch');
let canvas = createCanvas(1000, 1000);
canvas.parent('mySketch');
noLoop();
background(random(255), random(255), random(255));
}




function draw (){
//labels
fill(0);
textSize(18);
textAlign(CENTER);
text ("laptop 32.7%",680, 780);
text("phone 2.8%", 330, 780);
text ("hard drive 59.7%", 200, 350);
text("google drive 4,8 ", 850, 450);


var diameter  = 500
var lastAngle = 0;

for (i=0; i < numbers.length; i++){
var n = numbers[i];
strokeWeight(1);
fill(random(255), random(255), random(255));
arc(width/2, height/2, diameter, diameter, lastAngle, lastAngle+radians(n), PIE); 
lastAngle += radians(n);
}
}

//** code based on Week 6 Data Visualisation 
//by Danne Woo <youtu.be/vMjAgxksS1g>
// Dataset from Bureau of Meterology
// Max Daily Temperature for Melbourne during March, 2025 -  recorded at Melbourne (Olympic Park) {station 086338}

var numbers = [25.1, 21.0, 20.7, 33.1, 35.3, 23.5, 28.7, 33.3, 34.5, 32.2, 32.5, 35.4, 23.9, 27.4, 34.9, 21.4, 19.1, 25.0, 32.5, 27.9,
19.6, 20.1, 21.8, 21.0, 22.4, 21.1, 21.1, 30.1, 21.5, 21.5];

function setup() {
createCanvas(1000,500);
background (0);
//sort numbers from lowest to highest 
//numbers = sort(numbers);

for(i=0; i<numbers.length; i++) {
 //add a margin to offset dots positions, so they are fully contained inside canvas//
 yMargin=20;
 xMargin=20
 
 var n = numbers[i];
 var x = xMargin + map(i, 0, numbers.length, 0, width); 
 var w= width/numbers.length;
 var h = map(n, 0, floor(max(numbers)), 0, height);
 var y = height - h + yMargin;
 
 fill(random(255), random(255), random(255));
 ellipse(x, y, 10);
}
}

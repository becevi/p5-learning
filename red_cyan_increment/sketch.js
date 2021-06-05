// Canvas is 540 * 540 pixels
function setup(){
  createCanvas(540, 540);
}
 // red and cyan colors overlapping with incrementing alpha
function draw(){
  // background color is white
  background(255);
  
  // no outline stroke in shapes
  noStroke();
  
  // RED color
  // red square with 30% alpha
  rectMode(RADIUS);
  fill('rgba(255, 0, 0, .3)');
  rect(120, 240, 60, 60);
  
  // red square with 60% alpha
  rectMode(RADIUS);
  fill('rgba(255, 0, 0, .6)');
  rect(270, 240, 60, 60);
  
  // red square with 90% alpha
  rectMode(RADIUS);
  fill('rgba(255, 0, 0, .9)');
  rect(420, 240, 60, 60);
  
  // CYAN color
  // cyan square with 30% alpha
  rectMode(RADIUS);
  fill('rgba(0, 255, 255, .3)');
  rect(120, 300, 60, 60);
  
  // cyan square with 60% alpha
  rectMode(RADIUS);
  fill('rgba(0, 255, 255, .6)');
  rect(270, 300, 60, 60);
  
  // cyan square with 90% alpha
  rectMode(RADIUS);
  fill('rgba(0, 255, 255, .9)');
  rect(420, 300, 60, 60);
}
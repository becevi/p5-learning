// Canvas is 540 * 540 pixels
function setup(){
  createCanvas(540, 540);
}

function draw(){
  // background color is white
  background(255);
  
  // no outline stroke in shapes
  noStroke();
  
  // RGB primary colors
  // red square
  rectMode(RADIUS);
  fill('rgba(255, 0, 0, 1)');
  rect(120, 195, 60, 60);
  
  // green square
  rectMode(RADIUS);
  fill(0, 255, 0);
  rect(270, 195, 60, 60);
  
  // blue square
  rectMode(RADIUS);
  fill(0, 0, 255);
  rect(420, 195, 60, 60);
  
  // RGB secondary colors
  // cyan square
  rectMode(RADIUS);
  fill(0, 255, 255);
  rect(120, 345, 60, 60);
  
  // magenta squeare
  rectMode(RADIUS);
  fill(255, 0, 255);
  rect(270, 345, 60, 60);
  
  // yellow square
  rectMode(RADIUS);
  fill(255, 255, 0);
  rect(420, 345, 60, 60);
}
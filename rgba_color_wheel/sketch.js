// Canvas is 540 * 540 pixels
function setup(){
  createCanvas(540, 540);
}

function draw(){
  // background color is white
  background(255);
  
  // no outline stroke in shapes
  noStroke();
  
  // RGB primary colors with 50% alpha
  // red square with 50% alpha
  rectMode(RADIUS);
  fill('rgba(255, 0, 0, .5)');
  rect(120, 195, 60, 60);
  
  // green square with 50% alpha
  rectMode(RADIUS);
  fill('rgba(0, 255, 0, .5)');
  rect(270, 195, 60, 60);
  
  // blue square with 50% alpha
  rectMode(RADIUS);
  fill('rgba(0, 0, 255, .5)');
  rect(420, 195, 60, 60);
  
  // RGB secondary colors with 50% alpha
  // cyan square with 50% alpha
  rectMode(RADIUS);
  fill('rgba(0, 255, 255, .5)');
  rect(120, 345, 60, 60);
  
  // magenta squeare with 50% alpha
  rectMode(RADIUS);
  fill('rgba(255, 0, 255, .5)');
  rect(270, 345, 60, 60);
  
  // yellow square with 50% alpha
  rectMode(RADIUS);
  fill('rgba(255, 255, 0, .5)');
  rect(420, 345, 60, 60);
}
// Canvas is 540 * 540 pixels
function setup(){
  createCanvas(540, 540);
}
 //RBA primary and secondary colors overlapping with 30% alpha
function draw(){
  // background color is white
  background(255);
  
  // no outline stroke in shapes
  noStroke();
  
  // RGB primary colors with 30% alpha
  // red square with 30% alpha
  rectMode(RADIUS);
  fill('rgba(255, 0, 0, .3)');
  rect(120, 240, 60, 60);
  
  // green square with 30% alpha
  rectMode(RADIUS);
  fill('rgba(0, 255, 0, .3)');
  rect(270, 240, 60, 60);
  
  // blue square with 30% alpha
  rectMode(RADIUS);
  fill('rgba(0, 0, 255, .3)');
  rect(420, 240, 60, 60);
  
  // RGB secondary colors with 50% alpha
  // cyan square with 30% alpha
  rectMode(RADIUS);
  fill('rgba(0, 255, 255, .3)');
  rect(120, 300, 60, 60);
  
  // magenta squeare with 30% alpha
  rectMode(RADIUS);
  fill('rgba(255, 0, 255, .3)');
  rect(270, 300, 60, 60);
  
  // yellow square with 30% alpha
  rectMode(RADIUS);
  fill('rgba(255, 255, 0, .3)');
  rect(420, 300, 60, 60);
}
// Canvas is 540 * 540 pixels
function setup(){
  createCanvas(540, 540);
}
 // red and cyan colors overlapping with incrementing alpha
function draw(){
  // background color is white
  background(255, 90);
  
  // no outline stroke in shapes
  noStroke();
  
  // RED color
  // red square with 30% alpha
  rectMode(RADIUS);
  fill('rgba(255, 0, 0, .4)');
  circle(120, 240, 120);
  
  // red square with 60% alpha
  rectMode(RADIUS);
  fill('rgba(255, 0, 0, .4)');
  rect(270, 240, 60, 60);
  
  // red square with 90% alpha
  rectMode(RADIUS);
  fill('rgba(255, 0, 0, .4)');
  circle(420, 240, 120);
  
  // CYAN color
  // cyan square with 30% alpha
  rectMode(RADIUS);
  fill('rgba(0, 255, 255, .4)');
  rect(120, 300, 60, 60);
  
  // cyan square with 60% alpha
  rectMode(RADIUS);
  fill('rgba(0, 255, 255, .4)');
  circle(270, 300, 120);
  
  // cyan square with 90% alpha
  rectMode(RADIUS);
  fill('rgba(0, 255, 255, .4)');
  rect(420, 300, 60, 60);
  
  /*
  let a = color('rgba(255, 0, 0, 1)');
  let b = color('rgba(0, 255, 0, 1)');
  let c = lerpColor(a, b, .5);
  rectMode(RADIUS);
  fill(c);
  rect(420, 270, 60, 30);
  */
}
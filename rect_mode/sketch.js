function setup() {
  createCanvas(450, 450);
}

function draw() {
  background(0, 0, 0);
  
  rectMode(CORNER);
  fill(255);
  rect(5, 5, 100, 100);
  
  rectMode(CORNERS);
  fill(40);
  rect(10, 10, 100, 100);
  
  
  rectMode(CORNERS);
  fill(255);
  rect(5, 345, 105, 445);
  
  rectMode(CORNER);
  fill(40);
  rect(10, 350, 90, 90);
  
  
  rectMode(RADIUS);
  fill(255);
  rect(225, 225, 100, 225);
  
  
  rectMode(CENTER);
  fill(50);
  rect(225, 225, 140, 140);
  
  rectMode(CENTER);
  fill(100);
  rect(225, 225, 130, 130);
  
  rectMode(CENTER);
  fill(150);
  rect(225, 225, 120, 120);
  
  rectMode(CENTER);
  fill(200);
  rect(225, 225, 110, 110);
  
  rectMode(CENTER);
  fill(255);
  rect(225, 225, 100, 100);
    
}
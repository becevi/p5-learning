function setup() {
  createCanvas(450, 450);
}

function draw() {
  background(350, 0, 135);
  
  rect(50, 50, 50, 50);
  rect(150, 50, 25, 50);
  rect(250, 50, 50, 25);
  rect(350, 50, 25, 25);
  
  rect(50, 150, 50, 50, 5);
  rect(150, 150, 50, 50, 10);
  rect(250, 150, 50, 50, 15);
  rect(350, 150, 50, 50, 25);
  
  rect(50, 250, 50, 50, 10, 0, 0, 0);
  rect(150, 250, 50, 50, 0, 10, 0, 0);
  rect(250, 250, 50, 50, 0, 0, 10, 0);
  rect(350, 250, 50, 50, 0, 0 ,0 ,10);
  
  rect(50, 350, 50, 50, 0, 0, 0, 10);
  rect(150, 350, 50, 50, 0, 0, 10, 0);
  rect(250, 350, 50, 50, 0, 10, 0, 0);
  rect(350, 350, 50, 50, 10, 0, 0, 0);
}
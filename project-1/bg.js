function setup() {
  createCanvas(windowWidth, windowHeight);
  clear ();
}

function mouseClicked (){
  fill (227, 214, 193);
  rect(mouseX, mouseY, 75, 85, 10);
  noFill ();
  stroke (227, 214, 193);
  strokeWeight (5);
  arc (mouseX+75, mouseY+40, 40, 40, HALF_PI+PI, HALF_PI);
  fill (156, 116, 73);
  noStroke ();
  ellipse (mouseX+37, mouseY+5, 75, 20);
  fill (227, 214, 193);
  ellipse (mouseX+37.5, mouseY+79, 75, 20); 
}
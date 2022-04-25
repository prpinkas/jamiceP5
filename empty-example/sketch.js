var g = 0;

function setup() {
  // put setup code here
  createCanvas(500,500);//defining the size of my canvas
}
function mousePressed(){
  if (mouseX >=width/2-25 && mouseX<= width/2 +25 && mouseY>=height/2-25 && mouseY<=height/2 + 25){
      g= 255;}
}

function draw() {
  // put drawing code here
  background("#003366");//defining the color of the canvas
  fill (255,g,0);
  noStroke();
  ellipse(width/2, height/2, 50, 50);
  }



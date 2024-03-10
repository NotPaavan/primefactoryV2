function preload() {
  // Load your custom font here
  pf = loadFont('Knockout-HTF69-FullLiteweight-Regular.ttf');
  ipf = loadFont('NormalidadExtended-Thin.ttf');
}

var to = 0;
var ty = 372.5;

function draw(){ 
  
  createCanvas(1200, 675);  
  background(148, 226, 255);
  
  noStroke();
  fill(33, 33, 33, to + 300);
  rect(0, 0, 1200, 675);
  
  fill(255, 255, 255, to);  
  textFont(ipf, 40);
  text('the', 580, 270);
  text('present', 530, 425);
  textFont(pf, 105);
  text('INDIAN PRINCESSES', 250, 372.5);
  textFont(ipf, 50);
  text('™', 910, 335);
  
  to += 2.5;
  
  fill(148, 226, 255, to - 300);
  rect(0, 0, 1200, 675);
  
  fill(255, 255, 255, to - 500);
  textFont(pf, 125);
  text('PRIME FACTORY', 275, ty);
  textSize(35);
  text('INDIAN PRINCESSES', 10, 665);
  textFont(ipf, 25);
  text('™', 230, 660);
  
  if (to > 600) { ty -= 2.5; }
  if (ty < 150) { ty += 2.5; }
  
}
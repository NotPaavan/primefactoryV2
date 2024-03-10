function preload() {
  // Load your custom font here
  pf = loadFont('Knockout-HTF69-FullLiteweight-Regular.ttf');
  ipf = loadFont('NormalidadExtended-Thin.ttf');
}

var to = 0;
var ty = 372.5;
var bo1 = 0;
var bo2 = 0;
var bo3 = 0;

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
  if (ty < 150) { 
    
    ty += 2.5; 
    
    fill(255, 255, 255, bo1);
    stroke(255);
    strokeWeight(5);
    rect(300, 200, 600, 100, 10);
    textSize(75);
    fill(148, 226, 255);
    noStroke();
    text('PLAY', 475, 275);
    
    fill(255, 255, 255, bo2);
    stroke(255);
    strokeWeight(5);
    rect(300, 350, 600, 100, 10);
    textSize(65)
    fill(148, 226, 255);
    noStroke();
    text('how what huh', 345, 425);
    
    fill(255, 255, 255, bo3);
    stroke(255);
    strokeWeight(5);
    rect(300, 500, 600, 100, 10);
    textSize(75);
    fill(148, 226, 255);
    noStroke();
    text('CREDITS', 400, 575);
    
  }
  
  if (mouseX > 300 && mouseX < 900 && mouseY > 200 && mouseY < 300) { bo1 += 10; }
  else if (bo1 > 0) { bo1 -= 10; }  else { bo1 = 0; }  
  
  if (mouseX > 300 && mouseX < 900 && mouseY > 350 && mouseY < 450) { bo2 += 10; }
  else if (bo2 > 0) { bo2 -= 10; }  else { bo2 = 0; } 
  
  if (mouseX > 300 && mouseX < 900 && mouseY > 500 && mouseY < 600) { bo3 += 10; }
  else if (bo3 > 0) { bo3 -= 10; }  else { bo3 = 0; } 
}
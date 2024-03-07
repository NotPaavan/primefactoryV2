function preload() {
  // Load your custom font here
  pf = loadFont('Knockout-HTF69-FullLiteweight-Regular.ttf');
  ipf = loadFont('NormalidadExtended-Thin.ttf');
}

var tf = 255;
var th = 1.8;
var bo = 0;
var bo2 = 0;
var bo3 = 0;

function draw(){ 
    
  createCanvas(860, 745);  
  background(148, 226, 255);
  
  noStroke();
  fill(33, 33, 33, tf + 300);
  rect(0, 0, 860, 745);
  
  fill(255, 255, 255, tf);  
  textFont(ipf, 43);
  text('the', 410, 270);
  text('present', 366, 425);
  
  textFont(ipf, 80);
  text('™', 690, 325);
  
  textFont(pf, 107.5);
  text('INDIAN PRINCESSES', 86, 372.5);
  
  tf -= 3;
  var tf2 = -tf-300;
  var th2 = 745/th;
  
  fill(255, 255, 255, tf2);
  textFont(pf, 143);
  text('PRIME FACTORY', 72, th2);
  textFont(pf, 29);
  text('INDIAN PRINCESSES', 10, 735);
  textFont(ipf, 29);
  text('™', 190, 735);
  
  if (tf2 > 255) { th += 0.05; }
  if (th > 3.7) {
    th -= 0.05;  
    th2 = 5;
    
    noFill();
    strokeWeight(5);
    stroke(255);
    rect(143, 300, 573, 83, 20);
    noStroke();
    fill(255, 255, 255, bo);
    rect(143, 300, 573, 83, 20);
    fill(148, 226, 255);
    textSize(66);
    text('PLAY', 330, 365);

    noFill();
    strokeWeight(5);
    stroke(255);
    rect(143, 426, 573, 83, 20);
    noStroke();
    fill(255, 255, 255, bo2);
    rect(143, 426, 573, 83, 20);
    fill(148, 226, 255);
    text('what is this', 225, 490);
    
    noFill();
    strokeWeight(5);
    stroke(255);
    rect(143, 552, 573, 83, 20);
    noStroke();
    fill(255, 255, 255, bo3);
    rect(143, 552, 573, 83, 20);
    fill(148, 226, 255);
    text('CREDITS', 250, 615);
  }
  
  if (mouseX > 143 && mouseX < 716 && mouseY > 300 && mouseY < 380) { bo += 25;}
  else { bo = 0; }
  
  if (mouseX > 143 && mouseX < 716 && mouseY > 426 && mouseY < 509) { bo2 += 25;}
  else { bo2 = 0; }
  
  if (mouseX > 143 && mouseX < 716 && mouseY > 552 && mouseY < 635) { bo3 += 25;}
  else { bo3 = 0; }

}
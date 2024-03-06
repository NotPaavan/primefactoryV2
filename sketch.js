function preload() {
  // Load your custom font here
  pf = loadFont('Knockout-HTF69-FullLiteweight-Regular.ttf');
  ipf = loadFont('Knewave-Regular.ttf');
}

var tf = 255;
var th = 1.8;
var bo = 0;
var bo2 = 0;
var bo3 = 0;

function draw(){ 
    
  createCanvas(windowWidth, windowHeight);  
  background(148, 226, 255);
  
  noStroke();
  fill(33, 33, 33, tf + 300);
  rect(0, 0, windowWidth, windowHeight);
  
  fill(255, 255, 255, tf);  
  textFont(ipf, windowWidth/20);
  text('the', windowWidth/2.1, windowHeight/3.5);
  text('present', windowWidth/2.35, windowHeight/1.6);
  
  textFont(ipf, windowWidth/8);
  text('                    ™', windowWidth/10, windowHeight/2);
  
  textFont(pf, windowWidth/8);
  text('INDIAN PRINCESSES', windowWidth/10, windowHeight/2);
  
  tf -= 3;
  var tf2 = -tf-300;
  var th2 = windowHeight/th;
  
  fill(255, 255, 255, tf2);
  textFont(pf, windowWidth/6);
  text('PRIME FACTORY', windowWidth/12, th2);
  textFont(pf, windowWidth/30);
  text('INDIAN PRINCESSES', 10, windowHeight-10);
  textFont(ipf, windowWidth/30);
  text('                    ™', 10, windowHeight-10);
  
  if (tf2 > 255) { th += 0.05; }
  if (th > 3.7) {
    th -= 0.05;  
    th2 = 5;
    
    noFill();
    strokeWeight(5);
    stroke(255);
    rect(windowWidth/6, windowHeight/2.5, windowWidth/1.5, windowHeight/9, 20);
    noStroke();
    fill(255, 255, 255, bo);
    rect(windowWidth/6, windowHeight/2.5, windowWidth/1.5, windowHeight/9, 20);
    fill(148, 226, 255);
    textSize(windowWidth/13);
    text('PLAY', windowWidth/2.4, windowHeight/2.05);

    noFill();
    strokeWeight(5);
    stroke(255);
    rect(windowWidth/6, windowHeight/1.75, windowWidth/1.5, windowHeight/9, 20);
    noStroke();
    fill(255, 255, 255, bo2);
    rect(windowWidth/6, windowHeight/1.75, windowWidth/1.5, windowHeight/9, 20);
    fill(148, 226, 255);
    textSize(windowWidth/13);
    text('what is this', windowWidth/3.4, windowHeight/1.52);
    
    noFill();
    strokeWeight(5);
    stroke(255);
    rect(windowWidth/6, windowHeight/1.35, windowWidth/1.5, windowHeight/9, 20);
    noStroke();
    fill(255, 255, 255, bo3);
    rect(windowWidth/6, windowHeight/1.35, windowWidth/1.5, windowHeight/9, 20);
    fill(148, 226, 255);
    textSize(windowWidth/13);
    text('CREDITS', windowWidth/2.8, windowHeight/1.22);
  }
  
  if (mouseX > windowWidth/6 && mouseX < windowWidth/6+windowWidth/1.5 && mouseY > windowHeight/2.5 && mouseY < windowHeight/2.5+windowHeight/9) { bo += 25;}
  else { bo = 0; }
  
  if (mouseX > windowWidth/6 && mouseX < windowWidth/6+windowWidth/1.5 && mouseY > windowHeight/1.75 && mouseY < windowHeight/1.75+windowHeight/9) { bo2 += 25;}
  else { bo2 = 0; }
  
  if (mouseX > windowWidth/6 && mouseX < windowWidth/6+windowWidth/1.5 && mouseY > windowHeight/1.35 && mouseY < windowHeight/1.35+windowHeight/9) { bo3 += 25;}
  else { bo3 = 0; }
}

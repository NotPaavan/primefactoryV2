function preload() {
  // Load your custom font here
  pf = loadFont('Knockout-HTF69-FullLiteweight-Regular.ttf');
  ipf = loadFont('Knewave-Regular.ttf');
}

var tf = 255;
var th = 1.8;

function draw(){ 
    
  createCanvas(windowWidth, windowHeight);  
  background(148, 226, 255);
  
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
  if (th > 3.7) {th -= 0.05;  th2 = 5;}
}
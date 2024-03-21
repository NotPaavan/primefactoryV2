
// music
// creator
// main buttons / menu
// title
// animations

// credits screen
// how screen

// revamped play
// should i add pictures of the team?
// bottles


// special variables

function preload() {
  // Load your custom font here
  pf = loadFont('Knockout-HTF69-FullLiteweight-Regular.ttf');
  ipf = loadFont('NormalidadExtended-Thin.ttf');
  
  bgm = loadSound('bg.mp3');
}
mouseX = 0; mouseY = 0;

// music

function setup() { bgmusic(); }
function bgmusic() { 

  bgm.play();
  bgm.loop();
  bgm.setVolume(0.3);
  userStartAudio();
  
}

// variables

let bgm;
var to = 0;
var ty = 372.5;
var bo1 = 0;
var bo2 = 0;
var bo3 = 0;

var play = false;
var how = false;
var cred = false;
var menu = true;

var co = 0;
var bs = 255;

function draw(){ 
  
  // loading screen
  
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
  
  // menu screen
  
  fill(148, 226, 255, to - 300);
  rect(0, 0, 1200, 675);
  
  fill(255, 255, 255, to - 500);
  textFont(pf, 125);
  text('PRIME FACTORY', 275, ty);
  textSize(35);
  text('INDIAN PRINCESSES', 10, 665);
  textFont(ipf, 25);
  text('™', 230, 660);
  
  // animations
  
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
  
  // button animations
  
  //play
  if (mouseX > 300 && mouseX < 900 && mouseY > 200 && mouseY < 300) { bo1 += 10; ms = 15; }
  else if (bo1 > 0) { bo1 -= 10; }  else { bo1 = 0; } 
  //how
  if (mouseX > 300 && mouseX < 900 && mouseY > 350 && mouseY < 450) { bo2 += 10; ms = 15; }
  else if (bo2 > 0) { bo2 -= 10; }  else { bo2 = 0; }   
  //credits
  if (mouseX > 300 && mouseX < 900 && mouseY > 500 && mouseY < 600) { bo3 += 10; ms = 15; }
  else if (bo3 > 0) { bo3 -= 10; }  else { bo3 = 0; } 
  
  // menu switch
  if (mouseX > 300 && mouseX < 900 && mouseY > 200 && mouseY < 300 && mouseIsPressed && menu === true) {
    menu = false;
    play = true;
    how = false;
    cred = false;  
  }
  if (mouseX > 300 && mouseX < 900 && mouseY > 350 && mouseY < 450 && mouseIsPressed && menu === true) {
    menu = false;
    play = false;
    how = true;
    cred = false;  
  }
  if (mouseX > 300 && mouseX < 900 && mouseY > 500 && mouseY < 600 && mouseIsPressed && menu === true) {
    menu = false;
    play = false;
    how = false;
    cred = true;    
  }
  
  // how screen  
  if (how === true) {
    fill(148, 226, 255, co);
    rect(0, 0, 1200, 675);
    fill(255, 255, 255, co);
    rect(100, 100, 1000, 475, 25);
    fill(148, 226, 255, co);
    text('HOW', 475, 200);
    
    stroke(bs, bs, bs, co);
    line(10, 35, 35, 10);
    line(10, 35, 35, 60);
    line(10, 35, 75, 35);
    
    co += 5;
    
    if (mouseX < 80 && mouseY < 65) { bs = 240; ms = 20; }
    else { bs = 255; }
    
    if (mouseX < 80 && mouseY < 65 && mouseIsPressed) {
      menu = true;
      play = false;
      how = false;
      cred = false; 
      co = 0;
    }
  }
  
    // credits screen  
  if (cred === true) {
    fill(148, 226, 255, co);
    rect(0, 0, 1200, 675);
    fill(255, 255, 255, co);
    rect(100, 100, 1000, 475, 25);
    fill(148, 226, 255, co);
    text('CREDITS', 400, 200);
    
    stroke(bs, bs, bs, co);
    line(10, 35, 35, 10);
    line(10, 35, 35, 60);
    line(10, 35, 75, 35);
    
    co += 5;
    
    if (mouseX < 80 && mouseY < 65) { bs = 240; }
    else { bs = 255; }
    
    if (mouseX < 80 && mouseY < 65 && mouseIsPressed) {
      menu = true;
      play = false;
      how = false;
      cred = false; 
      co = 0;
    }
  }
  
  stroke(48, 72, 63);
  strokeWeight(10);
  line(mouseX, mouseY, pmouseX, pmouseY);
  cursor('none');
}
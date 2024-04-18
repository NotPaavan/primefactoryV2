/********** done **********
  * music
  * creator
  * main buttons / menu
  * title
  * animations
  * credits screen
**************************/


/***************** working on *****************
  * how screen
  * revamped play line grind craft or mr mine
**********************************************/


/************** to do *******************
  * should i add pictures of the team?
  * bottles
****************************************/


// special variables
function preload() {
  // Load your custom font here
  pf = loadFont('Knockout-HTF69-FullLiteweight-Regular.ttf');
  ipf = loadFont('NormalidadExtended-Thin.ttf');
  ls = loadFont('Soda Land Free Version.ttf');
  
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
var a = 1;
if(a===1){
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
var ty2 = 150;

var money = 0;
var pay = 5;

var hover = false;

var blud = function(cx, cy){
  
  //head
  noStroke();
  fill(255, 255, 255, co);
  ellipse(cx, cy, 73, 73);
  
  //body
  ellipse(cx, cy+75, 50, 75);
  
  //hat
  fill(249,115,148, co);
  ellipse(cx-25, cy-10, 75, 25);
  arc(cx, cy, 75, 75, PI, 2*PI-25);
  
  //eyes
  noFill();
  stroke(33, 33, 33, co);
  strokeWeight(5);
  arc(cx, cy+10, 10, 10, PI, 2*PI);
  arc(cx-25, cy+10, 10, 10, PI, 2*PI);
  
  //lemon
  noStroke();
  fill(254, 242, 80, co);
  ellipse(cx+10, cy-15, 25, 25);
  ellipse(cx+20, cy-20, 10, 10);
  ellipse(cx, cy-10, 10, 10);

}
var blud2 = function(cx, cy){
  
  //head
  noStroke();
  fill(255, 255, 255, co);
  ellipse(cx, cy, 73, 73);
  
  //body
  ellipse(cx, cy+75, 50, 75);
  
  //hat
  fill(249,115,148, co);
  ellipse(cx+25, cy-10, 75, 25);
  arc(cx, cy, 75, 75, PI+25, 2*PI);
  
  //eyes
  noFill();
  stroke(33, 33, 33, co);
  strokeWeight(5);
  arc(cx, cy+10, 10, 10, PI, 2*PI);
  arc(cx+25, cy+10, 10, 10, PI, 2*PI);
  
  //lemon
  noStroke();
  fill(254, 242, 80, co);
  ellipse(cx-10, cy-15, 25, 25);
  ellipse(cx-20, cy-20, 10, 10);
  ellipse(cx, cy-10, 10, 10);
  
}

var cx = 100;
var cy = 465;
var face = 'r';
}

function draw(){ 
  
    // loading screen  
  if(a===1){
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
}
  
  // menu screen
  if(a===1){
  fill(148, 226, 255, to - 300);
  rect(0, 0, 1200, 675);
  
  fill(255, 255, 255, to - 500);
  textFont(pf, 125);
  text('PRIME FACTORY', 275, ty);
  textSize(35);
  text('INDIAN PRINCESSES', 10, 665);
  textFont(ipf, 25);
  text('™', 230, 660);
}
  
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
  if(a===1){
  //play
  if (mouseX > 300 && mouseX < 900 && mouseY > 200 && mouseY < 300) { bo1 += 10; ms = 15; }
  else if (bo1 > 0) { bo1 -= 10; }  else { bo1 = 0; } 
  //how
  if (mouseX > 300 && mouseX < 900 && mouseY > 350 && mouseY < 450) { bo2 += 10; ms = 15; }
  else if (bo2 > 0) { bo2 -= 10; }  else { bo2 = 0; }   
  //credits
  if (mouseX > 300 && mouseX < 900 && mouseY > 500 && mouseY < 600) { bo3 += 10; ms = 15; }
  else if (bo3 > 0) { bo3 -= 10; }  else { bo3 = 0; } 
  }
  
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
    textSize(50);
    text('A&D or <&> to move', 300, 350);
    
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
  
    // credits screen  
  if (cred === true) {
    fill(148, 226, 255, co);
    rect(0, 0, 1200, 675);
    fill(255, 255, 255, co);
    rect(100, 100, 1000, 475, 25);
    fill(148, 226, 255, co);
    text('CREDITS', 400, 200);
    textSize(50);
    text('Rhett & Judah - Og Sprites', 225, 275);
    text('Raynard - Storyboarder', 225, 335);
    text('Owen & Miles - Presenters', 225, 395);
    text('Me (Paavan) - Coder', 225, 455);
    text('Isaac - ', 225, 515);
    textFont('Times New Roman');
    text('⚪🦧', 425, 515);
    
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
  
  // play screen
  if (play === true) {
    
    fill(100, 149, 237, co);
    rect(0, 0, 1200, 675);
    
    fill(60, 179, 113, co);
    rect(0, 575, 2400, 100);
    
    stroke(bs, bs, bs, co);
    line(10, 35, 35, 10);
    line(10, 35, 35, 60);
    line(10, 35, 75, 35);    
    
    strokeWeight(5);
    stroke(33, 33, 33, co);
    line(405, 505, 405, 575);
    line(645, 505, 645, 575);
    noStroke();
    fill(235, 235, 235, co);
    rect(400, 500, 125, 25, 5);
    rect(525, 500, 125, 25, 5);
    fill(33, 33, 33, co);
    rect(450, 510, 30, 15, 5);
    rect(575, 510, 30, 15, 5);
    
    stroke(33, 33, 33, co);
    strokeWeight(2);
    fill(254, 242, 80, co);
    rect(457.5, 500, 140, 60, 5);
    fill(33, 33, 33, co)
    noStroke();
    textFont(ls, 25);
    textAlign(CENTER);
    text('fresh lemonade 25¢', 452.5, 522.5, 150);
    textAlign(LEFT);
    fill(30, 89, 158, co);
    rect(480, 500, 10, 5, 2);
    rect(530, 500, 10, 10, 2);
    rect(590, 500, 15, 10, 2);
    
    if (keyIsPressed && keyCode === 68 || keyIsPressed && keyCode === 39) { blud2(cx, cy); cx += 3; face = 'r'; }
    else if (keyIsPressed && keyCode === 65 || keyIsPressed && keyCode === 37) { blud(cx, cy); cx -= 3; face = 'l'; }
    else if (face === 'r') { blud2(cx, cy); }
    else if (face === 'l') { blud(cx, cy); }    
    if (cx < 60) { 
      face = 'r'; 
      cx += 1; 
      fill(249,115,148); 
      textSize(25); 
      text('nope', 1, 400); 
    }    
    
    co += 5;
    ty2 --;    
    
    if (mouseX < 80 && mouseY < 65) { bs = 240; ms = 20; }
    else { bs = 255; }    
    if (ty2 < 100) { ty2 ++; }    
    if (mouseX < 80 && mouseY < 65 && mouseIsPressed) {
      menu = true;
      play = false;
      how = false;
      cred = false; 
      co = 0;
      ty2 = 150;
    }
  }
  
  stroke(48, 72, 63);
  strokeWeight(10);
  line(mouseX, mouseY, pmouseX, pmouseY);
  cursor('none');
}
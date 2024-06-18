/***************** working on *****************
  * customize skin
  * inside of store
**********************************************/


// special variables
function preload() {
  // Load your custom font here
  pf = loadFont('Knockout-HTF69-FullLiteweight-Regular.ttf');
  ipf = loadFont('NormalidadExtended-Thin.ttf');
  ls = loadFont('Soda Land Free Version.ttf');
  qm = loadFont('FattiPattiFLF-Bold.ttf');
  
  bgm = loadSound('bg.mp3');
}
mouseX = 0; mouseY = 0;

// music
function setup() { bgmusic(); }
function bgmusic() { 
  
  bgm.stop();
  bgm.play();
  bgm.loop();
  bgm.setVolume(0.1);
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
var tg = 0;
var lw = 5;
  
var so = 0;
var so2 = 0;
var so3 = 0;
var so4 = 0;
var so5 = 0;
  
var claimed = false;
var uno = false;
var dos = false;
var tres = false;
var quatro = false;
var cinco = false;
  
var gl = 2400;

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
  
var x1 = 0;
var rm = false;
var lm = false;
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
    text('Paavan - Coder', 225, 455);
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
    
    gl += 100;
    
    fill(100, 149, 237, co);
    rect(0, 0, 1200, 675);
    
    fill(60, 179, 113, co);
    rect(x1, 575, gl, 100);
    
    stroke(bs, bs, bs, co);
    line(10, 35, 35, 10);
    line(10, 35, 35, 60);
    line(10, 35, 75, 35);     
    
    //table
    if(a===1){
      strokeWeight(lw);
      stroke(33, 33, 33, co);
      line(x1 + 405, 505, x1 + 405, 575);
      line(x1 + 645, 505, x1 + 645, 575);
      stroke(255, 255, 255, tg);
      fill(235, 235, 235, co);
      rect(x1 + 400, 500, 125, 25, 5);
      rect(x1 + 525, 500, 125, 25, 5);
      fill(33, 33, 33, co);
      rect(x1 + 450, 510, 155, 15, 5);
    }
      
    //lemonade sign
    if(a===1){
      stroke(33, 33, 33, co);
      strokeWeight(lw-3);
      fill(254, 242, 80, co);
      rect(x1 + 457.5, 500, 140, 60, 5);
      fill(33, 33, 33, co)
      noStroke();
      textFont(ls, 25);
      textAlign(CENTER);
      text('fresh lemonade 25¢', x1 + 452.5, 522.5, 150);
      textAlign(LEFT);
      fill(30, 89, 158, co);
      rect(x1 + 480, 498, 10, 5, 2);
      rect(x1 + 530, 498, 10, 10, 2);
      rect(x1 + 590, 498, 15, 10, 2);
    }
    
    //first table interaction
    if(a===1){
      if(cx > x1 + 325 && cx < x1 + 710){
        tg = 200;
        lw = 7
        so += 5;
        fill(255, 255, 255, so);
        textFont(ls, 25);
        text('press space to claim', x1 + 435, 375);

        if (keyIsPressed && keyCode === 32) { claimed = true; }

      }
      else{
        tg = 0;
        lw = 5;
        so = 0;
      }
      if (claimed === true) {
        so = 0;
        so2 += 5;
        fill(255, 255, 255, so2);
        text('this is your lemonade stand', x1 + 405, 375);
      }
      if (so2 > 600) { uno = true; }
      if (uno === true) {
        so2 = 0;
        so2 -= 5;
        so3 += 5;
        fill(255, 255, 255, so3);
        text('this is where you will sell your lemonade', x1 + 355, 375);
      }
      if (so3 > 600) { dos = true; }
      if (dos === true) {
        so3 = 0;
        so3 -= 5;
        so4 += 5;
        fill(255, 255, 255, so4);
        text('you should go to the quikmart to get some', x1 + 355, 375);
        textFont(ls, 15);
        text('its over there -->', x1 + 600, 390);
      }
      if (so4 > 800) { tres = true; }
      if (tres === true) {
        so4 -= 10;
      }
    }
    
    //outside store
    if(a===1){
      fill(148, 131, 112, co);
      rect(x1 + 1125, 265, 1050, 10);
      fill(207, 184, 159, co);
      rect(x1 + 1150, 275, 1000, 300);
      fill(222, 197, 169, co);
      rect(x1 + 1400, 175, 500, 400);
      fill(148, 131, 112, co);
      rect(x1 + 1375, 160, 550, 20);
      fill(59, 53, 48, co);
      rect(x1 + 1550, 400, 200, 175);
      textFont(qm, 50);
      text('quickmart', x1 + 1475, 275);
      fill(148, 226, 255, co);
      rect(x1 + 1560, 400, 85, 175);
      rect(x1 + 1655, 400, 85, 175);
    }
    
    if(cx > x1+1488 && cx < x1+1817 && claimed === false) { 
      textFont(ls, 25);
      fill(59, 53, 48, co);
      text('hi, please claim your stand before entering', x1+ 1475, 375); 
    }
    else if(cx > x1+1488 && cx < x1+1817 && claimed === true) { 
      textFont(ls, 25);
      fill(59, 53, 48, co);
      text('hi, press space to enter', x1+ 1550, 375); 
    }
    
    //movement
    if(a===1){
      if (keyIsPressed && keyCode === 68 || keyIsPressed && keyCode === 39) { 
        blud2(cx, cy); 
        cx += 3; 
        face = 'r'; 
        rm = true; 
        lm = false;
      }
      else if (keyIsPressed && keyCode === 65 || keyIsPressed && keyCode === 37) { 
        blud(cx, cy); 
        cx -= 3; 
        face = 'l'; 
        rm = false; 
        lm = true;
      }
      else if (face === 'r') { 
        blud2(cx, cy); 
        rm = false; 
        lm = false;
      }
      else if (face === 'l') { 
        blud(cx, cy); 
        rm = false; 
        lm = false;
      }  
      
      //left edge
      if (cx < x1 + 60) { 
        face = 'r'; 
        cx += 1; 
        fill(249,115,148); 
        textSize(25); 
        text('nope', 1, 400); 
      }
      if (cx < x1 + -300) {
        face = 'r'; 
        cx = 100; 
        quatro = true;
      }
      if (quatro === true) {
        fill(249,115,148, so5); 
        textSize(25);
        text('what i say', 1, 375);
        so5 += 5;
      }
      if (so5 > 700) { cinco = true; }
      if (cinco === true) { so5 -= 10; }
      
      if (cx > 1125 && rm === true) { x1 -= 3; cx -= 3; }
      if (cx < 75 && x1 < 0 && lm === true) { x1 += 3; cx += 3; }
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
  
  //mouse
  if(a===1){
    stroke(48, 72, 63);
    strokeWeight(10);
    line(mouseX, mouseY, pmouseX, pmouseY);
    cursor('none');
  }
}
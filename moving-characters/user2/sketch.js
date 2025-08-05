function setup() {
  createCanvas(400, 550);
  background(50);
  angleMode(DEGREES);
}

function draw() {
  //얼굴
  push();
    translate(200,230);
    noStroke();
    fill("red");
    ellipse(0,-60,250,200);
    ellipse(0,-160,100,100);
    fill("#FFDACA");
    ellipse(0,0,200,200);
    ellipse(-100,0,50,60);
    ellipse(100,0,50,60);
    fill("rgb(66,38,4)");
    ellipse(-55,0,30,30);
    ellipse(55,0,30,30);
    arc(0,50,80,50,0,180);
    fill("red");
    ellipse(0,20,30,25);
    arc(-70,-100,150,150,315,135);
    arc(70,-100,150,150,45,225);
    fill("#FFB696");
    ellipse(-100,0,34,40);
    ellipse(100,0,34,40);
    
    stroke("rgb(66,38,4)");
    strokeWeight(5);
    line(30,-20,80,-30);
    line(-30,-20,-80,-30);
  pop();
  
  //이름
  push();
    translate(100, 400);
    fill("white");
    noStroke();
    rectMode(CENTER);
    // j
    ellipse(0, 10, 10, 10);
    rect(0, 30, 10, 20);
    arc(-5, 40, 20, 20, 0, 180);
    // e
    arc(30 - 5, 30, 20, 20, 90, 360);
    // o
    ellipse(60 - 5, 30, 20, 20);
    // n
    arc(90 - 5, 30, 20, 20, 180, 360);
    rect(90 - 5, 35, 20, 10);
    // g
    ellipse(120 - 5, 30, 20, 20);
    rect(120 + 0, 40, 10, 15);
    arc(120 - 5, 45, 20, 20, 0, 180);
    // a
    arc(170 - 5, 30, 20, 20, 180, 90);
    arc(170 - 5, 40, 20, 20, 180, 270);
    rect(170 - 5, 30, 10, 10);
    // n
    arc(200 - 5, 30, 20, 20, 180, 360);
    rect(200 - 5, 35, 20, 10);
  pop();
}

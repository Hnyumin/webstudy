let isInside = false;

let guineaPig;
let blinkTimer = 0;
let isBlinking = false;

function setup() {
  createCanvas(600, 400);
  angleMode(DEGREES);

  guineaPig = new GuineaPig(width / 2, height / 2);

  let cnv = document.querySelector("canvas");
  cnv.addEventListener("mouseenter", () => isInside = true);
  cnv.addEventListener("mouseleave", () => isInside = false);
}

function draw() {
  background(255);

  if (isInside) {
    drawFace();
  } else {
    drawSeonyul();
  }
}

function drawSeonyul() {
  background(255);
  drawName();
}

function drawName() {
  fill(30); 

  // 박
  rect(80, 100, 20, 60); 
  rect(120, 100, 20, 60); 
  rect(80, 140, 60, 20); 
  rect(160, 100, 20, 60); 
  rect(180, 100, 20, 20); 
  rect(180, 200, 20, 60); 
  rect(140, 200, 60, 20); 

  // 선
  push();
  translate(250, 110);
  rotate(-QUARTER_PI);
  rect(0, 0, 20, 80); 
  pop();

  push();
  translate(260, 100);
  rotate(QUARTER_PI);
  rect(0, 0, 20, 60); 
  pop();

  rect(350, 100, 20, 60); 
  rect(330, 100, 40, 20); 
  rect(290, 250, 60, 20); 
  rect(290, 200, 20, 60); 

  // 율
  fill(0); 
  ellipse(450, 130, 60, 60); 
  fill(255); 
  ellipse(450, 130, 30, 30); 

  fill(30); 
  rect(400, 170, 100, 20); 
  rect(420, 170, 20, 60); 
  rect(460, 170, 20, 60); 
  rect(400, 240, 100, 20); 
  rect(400, 270, 100, 20); 
  rect(400, 300, 100, 20); 
  rect(400, 270, 20, 50); 
  rect(480, 240, 20, 50); 
}

function drawFace() {
  guineaPig.update();
  guineaPig.display();
}

class GuineaPig {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.target = createVector(x, y);
  }

  update() {
    this.target.set(mouseX, mouseY);
    this.pos.lerp(this.target, 0.05);

    if (frameCount % 120 === 0) {
      isBlinking = true;
      blinkTimer = frameCount;
    }
    if (frameCount - blinkTimer > 10) {
      isBlinking = false;
    }
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);
    noStroke();

    fill(240, 180, 140);
    ellipse(0, 0, 100, 80);

    fill(220, 150, 130);
    ellipse(-30, -40, 20, 30);
    ellipse(30, -40, 20, 30);

    fill(0);
    if (!isBlinking) {
      ellipse(-20, -10, 10, 10);
      ellipse(20, -10, 10, 10);
    } else {
      rect(-25, -10, 10, 2);
      rect(15, -10, 10, 2);
    }

    fill(150, 70, 70);
    triangle(0, 0, -5, 5, 5, 5);

    stroke(100);
    strokeWeight(1);
    line(-20, 5, -40, 10);
    line(-20, 10, -40, 15);
    line(20, 5, 40, 10);
    line(20, 10, 40, 15);
    pop();
  }
}
let isInside = false;

function setup() {
  createCanvas(400, 400);

  // 👇 캔버스에 직접 hover 이벤트 등록
  let cnv = document.querySelector("canvas");
  cnv.addEventListener("mouseenter", () => isInside = true);
  cnv.addEventListener("mouseleave", () => isInside = false);
}

function draw() {
  if (isInside) {
    drawFace();
  } else {
    drawSeowon();
  }
}

function drawSeowon() {
  background(220);
  stroke("orange");
  strokeWeight(4);
  
  // 서
  line(100, 100, 125, 70);
  line(125, 70, 150, 100);
  line(170, 70, 170, 110);
  line(170, 90, 145, 90);
  
  // 원
  noFill();
  ellipse(220, 70, 25, 25);
  line(200, 95, 240, 95);
  line(220, 95, 220, 115);
  line(255, 70, 255, 110);
  line(240, 110, 255, 110);
  line(230, 120, 230, 140);  
  line(230, 140, 260, 140);
}

function drawFace() {
  background(220);
  
  push();
  translate(200, 200);
  ellipseMode(CENTER);
  
  let w = map(mouseX, 0, width, 100, 400);
  let h = map(mouseY, 0, height, 30, 200);
  
  w = constrain(w, 200, 300);
  h = constrain(h, 100, 250);
  
  let isBlinking = w > h;
  
  fill("red");
  noStroke();
  ellipse(0, 0, w, h);
  pop();
  
  // 왼쪽 눈
  push();
  translate(200, 200);
  fill("yellow");
  stroke("black");
  strokeWeight(10);
  ellipse(-70, -20, 70, 70);
  pop();
  
  // 오른쪽 눈
  push();
  translate(200, 200);
  fill("yellow");
  stroke("black");
  strokeWeight(10);
  ellipse(70, -20, 70, 70);
  pop();
  
  // 입
  push();
  translate(200, 200);
  rectMode(CENTER);
  fill("black");
  noStroke();
  rect(0, 0, 50, 10, 20);
  pop();
  
  // 눈동자 또는 눈꺼풀
  if (isBlinking) {
    push();
    translate(200, 200);
    noFill();
    stroke("black");
    strokeWeight(10);
    arc(-70, -20, 40, 40, 0, PI); 
    arc(70, -20, 40, 40, 0, PI);
    pop();
  } else {
    push();
    fill("black");
    noStroke();
    ellipse(130, 180, 40, 40);
    ellipse(270, 180, 40, 40);
    pop();
  }
}
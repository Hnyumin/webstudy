let isInside = false;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES); // ✅ 여기서 한 번만

  // 👇 캔버스 hover 이벤트
  let cnv = document.querySelector("canvas");
  cnv.addEventListener("mouseenter", () => isInside = true);
  cnv.addEventListener("mouseleave", () => isInside = false);
}

function draw() {
  if (isInside) {
    drawFace();
  } else {
    drawJeongan();
  }
}

function drawJeongan() {
  background(50); // ✅ 한 번만

  push();
  translate(100, 180);
  fill("white");
  noStroke();
  rectMode(CENTER);

  // j
  ellipse(0, 10, 10, 10);
  rect(0, 30, 10, 20);
  arc(-5, 40, 20, 20, 0, 180);

  // e
  arc(25, 30, 20, 20, 90, 360);

  // o
  ellipse(55, 30, 20, 20);

  // n
  arc(85, 30, 20, 20, 180, 360);
  rect(85, 35, 20, 10);

  // g
  ellipse(115, 30, 20, 20);
  rect(120, 40, 10, 15);
  arc(115, 45, 20, 20, 0, 180);

  // a
  arc(165, 30, 20, 20, 180, 90);
  arc(165, 40, 20, 20, 180, 270);
  rect(165, 30, 10, 10);

  // n
  arc(195, 30, 20, 20, 180, 360);
  rect(195, 35, 20, 10);

  pop();
}

function drawFace() {
  background(50); // ✅ 배경 지정 필요

  push();
  translate(200, 230);
  noStroke();
  fill("red");
  ellipse(0, -60, 250, 200);
  ellipse(0, -160, 100, 100);
  
  fill("#FFDACA");
  ellipse(0, 0, 200, 200);
  ellipse(-100, 0, 50, 60);
  ellipse(100, 0, 50, 60);
  
  fill("rgb(66,38,4)");
  ellipse(-55, 0, 30, 30);
  ellipse(55, 0, 30, 30);
  arc(0, 50, 80, 50, 0, 180);
  
  fill("red");
  ellipse(0, 20, 30, 25);
  arc(-70, -100, 150, 150, 315, 135);
  arc(70, -100, 150, 150, 45, 225);
  
  fill("#FFB696");
  ellipse(-100, 0, 34, 40);
  ellipse(100, 0, 34, 40);
  
  stroke("rgb(66,38,4)");
  strokeWeight(5);
  line(30, -20, 80, -30);
  line(-30, -20, -80, -30);
  pop();
}
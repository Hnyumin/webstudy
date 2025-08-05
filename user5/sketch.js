let isInside = false;
let sunglasses = []; // 클릭한 위치 저장용 배열

function setup() {
  createCanvas(400, 400);
  noCursor(); // 기본 커서 숨기기

  let cnv = document.querySelector("canvas");
  cnv.addEventListener("mouseenter", () => isInside = true);
  cnv.addEventListener("mouseleave", () => isInside = false);
}

function draw() {
  if (isInside) {
    drawDuckWithSunglasses();
  } else {
    drawYejin();
  }
}

function drawYejin() {
  background('#2254d7');
  
  fill('#cbe776');
  noStroke();

  // 김
  rect(90, 100, 85, 25);
  rect(150, 100, 25, 90);
  rect(200, 100, 25, 90);
  rect(200, 210, 80, 80);
  fill('#2254d7');
  rect(215, 240, 15, 10);
  rect(250, 240, 15, 10);
  rect(220, 260, 40, 10);

  // 예
  fill('#ffd576')
  ellipse(330, 135, 70, 70);
  fill('#ff6643');
  ellipse(315, 125, 15, 15);
  ellipse(345, 125, 15, 15);
  rect(310, 140, 40, 10);
  rect(380, 100, 50, 25);
  rect(380, 140, 50, 25);
  rect(410, 100, 25, 90);
  rect(450, 100, 25, 90);

  // 진
  fill('#ffcfe6')
  rect(530, 100, 90, 25);
  rect(570, 125, 25, 25);
  rect(530, 165, 25, 25);
  rect(550, 145, 25, 25);
  rect(590, 145, 25, 45);
  rect(650, 100, 25, 90);
  rect(650, 260, 70, 25);
  rect(650, 210, 25, 70);
}

function drawDuckWithSunglasses() {
  background('#4fc1e9');

  noStroke();
  fill("white");
  ellipse(200, 200, 300, 250);

  fill('#ffce54');
  ellipse(200, 240, 100, 40);

  fill('#282828');
  ellipse(150, 210, 18, 18);
  ellipse(250, 210, 18, 18);

  strokeWeight(13);
  stroke("white");
  line(200, 60, 200, 80);
  line(180, 65, 195, 80);
  line(220, 65, 205, 80);

  strokeWeight(12);
  stroke('#282828');
  line(140, 170, 160, 180);
  line(260, 170, 240, 180);

  strokeWeight(8);
  stroke("pink");
  line(110, 240, 110, 245);
  line(120, 240, 120, 245);
  line(280, 240, 280, 245);
  line(290, 240, 290, 245);

  // 기존 선글라스들
  for (let i = 0; i < sunglasses.length; i++) {
    drawSunglasses(sunglasses[i].x, sunglasses[i].y);
  }

  // 마우스 위치에 선글라스 커서
  drawSunglasses(mouseX, mouseY);
}

function drawSunglasses(x, y) {
  strokeWeight(7);
  stroke(0, 0, 100);
  fill(0, 0, 100, 95);
  ellipse(x - 55, y, 80, 60);
  ellipse(x + 55, y, 80, 60);

  stroke(0, 0, 100);
  strokeWeight(7);
  line(x - 15, y, x + 15, y);
}

function mousePressed() {
  if (isInside) {
    sunglasses.push({ x: mouseX, y: mouseY });
  }
}

function keyPressed() {
  if (keyCode === DELETE || keyCode === BACKSPACE) {
    sunglasses = [];
  }
}
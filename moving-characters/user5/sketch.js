let sunglasses = []; // 클릭한 위치 저장용 배열

function setup() {
  createCanvas(400, 400);
  noCursor(); // 기본 커서 숨기기
}

function draw() {
  background('#4fc1e9');

  // 오리
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

function mousePressed() {
  sunglasses.push({x: mouseX, y: mouseY});
}

function drawSunglasses(x, y) {
  strokeWeight(7);
  stroke(0, 0, 100);
  fill(0, 0, 100, 95);
  ellipse(x - 55, y, 80, 60);
  ellipse(x + 55, y, 80, 60);

  stroke(0, 0, 100);
  strokeWeight(7);
  line(x - 55 + 40, y, x + 55 - 40, y);
}

function keyPressed() {
  if (keyCode === DELETE || keyCode === BACKSPACE) {
    sunglasses = [];
  }
}
let guineaPig;
let blinkTimer = 0;
let isBlinking = false;

function setup() {
  createCanvas(400, 400);
  guineaPig = new GuineaPig(width / 2, height / 2);
}

function draw() {
  background(255);
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
    noStroke(); // 모든 도형 외곽선 제거

    // 몸통
    fill(240, 180, 140);
    ellipse(0, 0, 100, 80);

    // 귀
    fill(220, 150, 130);
    ellipse(-30, -40, 20, 30);
    ellipse(30, -40, 20, 30);

    // 눈
    fill(0);
    if (!isBlinking) {
      ellipse(-20, -10, 10, 10);
      ellipse(20, -10, 10, 10);
    } else {
      rect(-25, -10, 10, 2);
      rect(15, -10, 10, 2);
    }

    // 코
    fill(150, 70, 70);
    triangle(0, 0, -5, 5, 5, 5);

    // 수염 (선은 유지)
    stroke(100);
    strokeWeight(1);
    line(-20, 5, -40, 10);
    line(-20, 10, -40, 15);
    line(20, 5, 40, 10);
    line(20, 10, 40, 15);

    pop();
  }
}
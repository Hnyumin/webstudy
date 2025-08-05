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
    drawYumin();
  }
}

function drawYumin() {
    createCanvas(400,400);
    background("white");
    
    translate(60,35);
    
    //x,y
    stroke("lightgreen")
    strokeWeight(20)
    
  //ㅎ  
  //x1,y1,x2,y2
    line(100,90,100,100)
    line(70,100,130,100)
    
    ellipseMode(CENTER)
    ellipse(100,135,50,50)
    
  //ㅏ
    line(165,90,165,165)
    line(190,130,170,130)
    
  //ㄴ
    line(100,190,100,220)
    line(170,220,100,220)
  
  }

function drawFace() {
    background("#FFFF24");
  
    //얼굴, 귀
    noStroke();
    fill("lightgreen");
    ellipseMode(CENTER);
    ellipse(200,200,200,140);
    
    ellipse(90,200,100,120);
    ellipse(310,200,100,120);
  
    //눈
    fill("black");
    ellipse(160,200,35,40);
    ellipse(240,200,35,40);
  
    stroke("white");
    strokeWeight(15);
    point(155,195);
    strokeWeight(7);
    point(170,205);
    strokeWeight(15);
    point(235,195);
    strokeWeight(7);
    point(250,205);
  
    //머리카락. 마우스 따라가게
    stroke("red");
    strokeWeight(8);
    line(170,150, mouseX-40, mouseY-50); // 왼쪽 선
    line(200,150, mouseX, mouseY-50);    // 가운데 선
    line(230,150, mouseX+40, mouseY-50); // 오른쪽 선
  
    //코
    noStroke();
    fill("red");
    ellipse(200,210,20,15);
  }
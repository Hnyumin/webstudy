let isBlinking = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  //얼굴
  push();
    translate(200,200); 
    ellipseMode(CENTER);
  
    let w = map(mouseX, 0, width, 100, 400);
  let h = map(mouseY, 0, height, 30, 200);
  
  w = constrain(w, 200, 300);
  h = constrain(h, 100, 250);

  let isBlinking = w > h;
  
    fill("red");
    noStroke("0");
    ellipse(0, 0, w, h);
    pop();
  
  //왼쪽눈
  push();
    translate(200,200);
    fill("yellow");
    stroke("black");
    strokeWeight("10");
    ellipse(-70,-20,70,70)
    pop();
  
  //오른쪽눈
   push();
    translate(200,200);
    fill("yellow");
    stroke("black");
    strokeWeight("10");
    ellipse(70,-20,70,70)
    pop();
  
  //입
  push();
    translate(200,200); 
    rectMode(CENTER);
  
    fill("black");
    noStroke("0");
    rect(0, 0, 50, 10, 20);
    pop();
  
  //눈꺼풀
  if (isBlinking){
  push();
    translate(200,200);
    noFill();
    stroke("black");
    strokeWeight("10")
    arc(-70,-20,40,40,0,PI); 
    arc(70,-20,40,40,0,PI);
    pop();
    
  } else {
    push();
    fill('black');
    noStroke();
    ellipse(-70,-20,40,40);
    ellipse(70,-20,40,40);
    pop();
  }
}
function mousePressed(){
  isBlinking = !isBlinking;
}
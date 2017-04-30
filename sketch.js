var x = 0;
var speed = 3;
var cnv;

function setup() {
  cnv = createCanvas(750, 30);
    cnv.position(370, 350);
    cnv.style('z-index', '2');
}

function draw() {
  background(51);
  stroke(255);
  strokeWeight(2);
  noFill();
  ellipse(x, 20, 10, 10);

  if (x > 750) {
    speed = -3;
  } else if (x < -5) {
      speed = 3;
  }

 x = x + speed;
}

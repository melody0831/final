var x = 0;
var speed = 3;
var cnv;

function setup() {
  cnv = createCanvas(30, 30);
    cnv.position(30, 50);
    cnv.style('z-index', '2');
}

function draw() {
  background(230);
  stroke(0);
  strokeWeight(2);
  noFill();
  ellipse(x, 20, 10, 10);

  if (x > 30) {
    speed = -3;
  } else if (x < -1) {
      speed = 3;
  }

 x = x + speed;
}

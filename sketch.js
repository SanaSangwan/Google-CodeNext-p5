let angle = 0;
let scalar = 50;

function setup() {
  createCanvas(400, 400);
  background(240);
  noFill();
}

function draw() {
  translate(width / 2, height / 2);
  stroke(sin(angle) * 255, cos(angle) * 255, abs(sin(angle + PI / 2)) * 255);

  beginShape();
  for (let i = 0; i < TWO_PI; i += PI / 6) {
    let x = cos(i + angle) * scalar;
    let y = sin(i + angle) * scalar;
    vertex(x, y);
  }
  endShape(CLOSE);

  angle += 0.02;
  scalar += sin(angle) * 0.2;

  if (scalar > 200 || scalar < 0) {
    scalar = 50;
  }
}
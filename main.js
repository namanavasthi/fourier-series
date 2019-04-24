let time = 0;

let wave = [];

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  translate(200, 200);

  let radius = 100;

  stroke(255);
  noFill();
  ellipse(0, 0, radius * 2);

  let x = radius * cos(-time);
  let y = radius * sin(-time);

  wave.unshift(y);

  line(0, 0, x, y);

  fill(255, 0, 0);
  stroke(255, 0, 0);
  ellipse(x, y, 8);

  stroke(255);
  translate(200, 0);

  line(x - 200, y, 0, wave[0]);

  beginShape();
  noFill();
  for (let i = 0; i < wave.length; i++) {
    vertex(i, wave[i]);
  }
  endShape();

  time += 0.02;
}

let time = 0;

let wave = [];

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  translate(200, 200);

  let radius = 75;

  let n = 1;
  // plot the points on circle(s)
  // ref : https://en.wikipedia.org/wiki/Fourier_series
  radius = radius * (4 / (n * PI));
  let x = radius * cos(n * -time);
  let y = radius * sin(n * -time);

  // create the base circle(s)
  stroke(255);
  noFill();
  ellipse(0, 0, radius * 2);

  // save y co-ordinate values in an array
  wave.unshift(y);

  // plot the radius
  line(0, 0, x, y);

  // plot the point(s) on the circle(s)
  fill(255, 0, 0);
  stroke(255, 0, 0);
  ellipse(x, y, 8);

  // clear the stroke color and traslate to plot the wave
  stroke(255);
  translate(200, 0);

  // create the line from the wave to the circle(s)
  line(x - 200, y, 0, wave[0]);

  // create the sine shape
  beginShape();
  noFill();
  for (let i = 0; i < wave.length; i++) {
    vertex(i, wave[i]);
  }
  endShape();

  time += 0.02;

  // clean up the wave array
  if (wave.length > 250) {
    wave.pop();
  }
}

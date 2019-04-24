// ref : https://en.wikipedia.org/wiki/Fourier_series

let time = 0;

let wave = [];

function setup() {
  createCanvas(700, 400);
  slider = createSlider(1, 100, 5);
  slider.style("width", "50%");
  slider.style("height", "20px");
}

function draw() {
  // setup canvas
  background(0);
  translate(200, 200);

  // (x,y) co-ordinates for the circle
  let x = 0;
  let y = 0;

  // color offset value
  let colorOffset = Math.ceil(255 / slider.value());

  for (let i = 0; i < slider.value(); i++) {
    let prevx = x;
    let prevy = y;

    // nth harmonic of the series
    let n = i * 2 + 1;

    // calculating the nth harmonic co-ordinate value
    let radius = 75 * (4 / (n * PI));
    x += radius * cos(n * -time);
    y += radius * sin(n * -time);

    // create the base circle(s)
    stroke(255, 255 - i * colorOffset, 255 - i * colorOffset);
    noFill();
    ellipse(prevx, prevy, radius * 2);

    // plot the radius
    line(prevx, prevy, x, y);
  }

  // save y co-ordinate values in an array
  wave.unshift(y);

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

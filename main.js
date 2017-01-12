var value = 0;
var osc = [];

function setup() {
  // Set up the visualization to fill the entire window
  createCanvas(window.innerWidth, window.innerHeight);

  osc[0] = new p5.Oscillator('sine');
  osc[0].start();
  osc[0].freq(440);
  osc[0].amp(0);
}

function draw() {
  fill(value);
  rect(0, 0, width, height);
}

function deviceMoved() {
  if (value > 255) {
    value = 0;
  }
  if (accelerationX > 15) {
    console.log(accelerationZ, osc[0]);
    value = value + 5;
    osc[0].amp(0.4, 0.1);
  } else {
    osc[0].amp(0,0.1);
  }
}

function touchStarted() {
// osc[0].amp(0.2,0.4);
}

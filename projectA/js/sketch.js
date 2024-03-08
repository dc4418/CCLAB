let x = []; 
let y = [];
function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container")
  x[0] = random(width);
  y[0] = random(height);
  x[1] = random(width);
  y[1] = random(height);
}

function draw() {
  background(220);
  drawBee(x[0], y[0], 100);
  //drawBee(x[1], y[1], 50);
  move();
}

function drawBee(x, y, s) {
  push();
  translate(x, y);
  strokeWeight(4);
  fill("yellow")
  circle(0, 0, s);
  fill(0);
  circle(s*0.2, 0, s*.1);
  circle(s*0.4, 0, s*.1);
  strokeWeight(8)
  line(s*.05,-48,s*.05,48)
  line(-20,-42,-20,42)
  
   triangle(-s * 0.02, -s * 0.5, -s * 0.2 - 20, -s * 0.5 - 20, -s * 0.2 + 20, -s * 0.5 - 10);
  triangle(s * 0.2, -s * 0.5, s * 0.2 - 20, -s * 0.5 - 20, s * 0.2 + 20, -s * 0.5 - 10);
  // arc(0, 0, s*0.3, s*0.3, 0, PI);
  // horns
triangle(-s * 0.5, -s * 0.1, -s * 0.5, s * 0.1, -s * 0.6, 0);
  pop();
}

function move(){
  x[0]=width*noise(frameCount*0.001);
  y[0]=height*noise(frameCount*0.005);
  x[1]=width*noise(frameCount*0.005);
  y[1]=height*noise(frameCount*0.01);
}

let flowers = [];
let flowerCount = 12;
let petalCount = 10;
let petalSize = 30;
let flowerSize = 40;
let centerSize = 50;
//flower diameters
let numLines = 10;
let lines = [];
//wind
let x = [];
let y = [];
let beeFly =10
let beeColor = "yellow"; 
// Initial color of the bee
let speedX = 0;
let speedY = 0;
function setup() {
  let mycanvas=createCanvas(800, 500);
  mycanvas.parent("p5-canvas-container")
  noStroke();
  fill(255, 165, 0);
  circle(width - 10, 20, random(60, 80));
  g = random(height - 40, height - 1);
  g2 = random(height - 0.1, height + 10);

  // Setup for first sketch: flowers
  for (let i = 0; i < flowerCount; i++) {
    let flower = {
      x: random(width),
      y: random(height / 2, height),
    };
    flowers.push(flower);
  }

  // set up for second sketch: lines
  for (let i = 0; i < numLines; i++) {
    lines.push([
      random(width),
      random(0.5 * height, height),
      random(-1, 1),
      random(-1, 1),
      0.1,
      random(20, 40),
    ]);
  }

  // Setup for third sketch: bees
  x[0] = random(width);
  y[0] = random(height);
  x[1] = random(width);
  y[1] = random(height);
}

function draw() {
  background("skyblue");
  fill("green");
  rect(0, height / 2.8, width);

  // Draw flowers
  for (let i = 0; i < flowers.length; i++) {
    let flower = flowers[i];
    for (let j = 0; j < petalCount; j++) {
      let angle = (TWO_PI * j) / petalCount;
      let x = flower.x + cos(angle) * flowerSize;
      let y = flower.y + sin(angle) * flowerSize;
      let r = map(
        sin(frameCount / 60),
        -1,
        1,
        petalSize * 0.8,
        petalSize * 1.2
      );
      let petalColor = color(random(255), random(255), random(255));
      fill(petalColor);
      ellipse(x, y, r, petalSize);
    }
    fill(255, 165, 0);
    circle(width -10, 20, random(60, 80));
    noStroke();
    for (let i = 0; i < 3; i++) {
      let R = i * 40 + 50;
      for (let angle = 0; angle < 2 * PI; angle += PI / 5) {
        let zz = width - 10 + R * cos(angle);
        let yy = 20 + R * sin(angle);
        circle(zz, yy, 10);
        //sun
          // Display instructions
      }
    }
    fill(255, 255, 0);
    ellipse(flower.x, flower.y, centerSize, centerSize);
  }
  drawCloud(300, 40, 120, 30);
  drawCloud(200, 30, 120, 30);
  drawCloud(100, 40, 120, 30);
  drawCloud(30, 15, 120, 30);
  drawCloud(400, 40, 120, 30);
  drawCloud(400, 40, 120, 30);
  drawCloud(500, 30, 120, 30);
  drawCloud(580, 40, 120, 30);
  drawCloud(680, 45, 120, 30);

  // Draw  wind
  for (let i = 0; i < numLines; i++) {
    let lineData = lines[i];
    let x = lineData[0];
    let y = lineData[1];
    let xSpeed = lineData[2];
    let ySpeed = lineData[3];
    let acceleration = lineData[4];
    let length = lineData[5];

    xSpeed += acceleration;

    x -= 0.09 * xSpeed;

    if (x > width) {
      x = 0;
    }

    y += 0.01 * ySpeed;

    if (y > height) {
      y = 0;
    }

    stroke(255, 0, 0);
    line(x, y, x + length, y);

    lines[i] = [x, y, xSpeed, ySpeed, acceleration, length];
  }

  // Draw bees
  drawBee(x[0], y[0], 100);
   drawBee(x[1], y[1], 100);
  move();
    fill(0);
  textAlign(CENTER);
  textSize(20);
  text('Press "w" to fly with bee1 Press "x" to fly with bee2', width/2, height - 20);
          fill(0);
  textAlign(CENTER);
  textSize(20);
  text('Press "b" to change bees to black  Press"y" to change bees to yellow', width/2, height - 40);

}

function drawBee(x, y, s) {
  push();
  translate(x, y);
  strokeWeight(4);
  fill(beeColor); // Color of the bee
  circle(0, 0, s);
  fill(0);
  circle(s * 0.2, 0, s * 0.1);
  circle(s * 0.4, 0, s * 0.1);
  strokeWeight(8);
  line(s * 0.05, -48, s * 0.05, 48);
  line(-20, -42, -20, 42);
  triangle(
    -s * 0.02,
    -s * 0.5,
    -s * 0.2 - 20,
    -s * 0.5 - 20,
    -s * 0.2 + 20,
    -s * 0.5 - 10
  );
  triangle(
    s * 0.2,
    -s * 0.5,
    s * 0.2 - 20,
    -s * 0.5 - 20,
    s * 0.2 + 20,
    -s * 0.5 - 10
  );
  triangle(-s * 0.5, -s * 0.1, -s * 0.5, s * 0.1, -s * 0.6, 0); // horns
  pop();
}

// Bee movement
function move() {
  
    x[0] = width * noise(frameCount * 0.001);
  if (y[0]<=400){
    y[0] += 10 * noise(frameCount * 0.005);
  }
    x[1] = width * noise(frameCount * 0.005);
    y[1] = height * noise(frameCount * 0.01);
if (keyIsPressed && key === 'w') {
    y[0] -= beeFly;
  }
  if (keyIsPressed && key === 'x') {
    y[1] -= beeFly;
  }
  }console.log(y[0])



function drawCloud(x, y, width, height) {
  // inner circle of cloud
  fill("rgba(255,255,255,0.79)"); // bit of transparency for the cloud
  noStroke();
  ellipse(x, y, width / 2, height / 2);
  ellipse(x - width / 8, y - height / 8, width / 2, height / 6);
  ellipse(x + width / 8, y - height / 4, width / 2, height / 6);
  ellipse(x + width / 16, y, width / 4, height / 6);
  ellipse(x - width / 24, y, width / 4, height / 6);
  ellipse(x, y + height / 8, width / 4, height / 6);
  ellipse(x, y + height / 4, width / 4, height / 6);
}
function keyPressed() {
  // If 'b' or 'B' is pressed, change bee color to black
  if (key === "b" || key === "B") {
    beeColor = "black";
    beeFly=20
    
  }
   if (key === "y" || key === "Y") {
    beeColor = "yellow";
       beeFly=10
}
}

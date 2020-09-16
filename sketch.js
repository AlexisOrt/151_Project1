let angle = 0;
let w = 48;
let ma;
let maxD; 
let speed = 2; 

function setup() {
  createCanvas(400,400, WEBGL);
  ma = atan(1/sqrt(2));
  maxD = dist(0,0,200,200);
}

function draw() {
  background(255, 204, 0);
  ortho(-300, 300, 300, -300, 0, 1000000); 
  rotateX(-QUARTER_PI);
  rotateY(ma);

  // translate(width/2, height/2);
  // rectMode(CENTER);

  // rotateX(angle * 0.25);
  
  for (let z = 0; z < height; z += w) {
    for (let x = 0; x < width; x += w) {
    push();
    let d = dist(x,z,width/2,height/2);
    let offset = map(d, 0, maxD, -2,2); 
    let a = angle + offset;
    let h = floor(map(sin(a), -1,1,100,160));
    translate(x - width/2, z - height / 2);
    box(w , h, w); 
    // rect(x - width / 2 + w / 2, 0, w - 2, h );
    pop();
    }
  }
  angle += 0.1;

  if(mouseIsPressed) {
    fill(50, 55, 100); 
  } else {
    fill('magenta');
  }

  if (keyIsPressed) {
    
  }
  
  let rad = 60; // Width of the shape
  let xpos, ypos; // Starting position of shape
  
  let xspeed = 2.8; // Speed of the shape
  let yspeed = 2.2; // Speed of the shape
  
  let xdirection = 1; // Left or Right
  let ydirection = 1; // Top to Bottom
  
  function setup() {
    createCanvas(720, 400);
    noStroke();
    frameRate(30);
    ellipseMode(RADIUS);
    // Set the starting position of the shape
    xpos = width / 2;
    ypos = height / 2;
  }
  
  function draw() {
    background(102);
  
    // Update the position of the shape
    xpos = xpos + xspeed * xdirection;
    ypos = ypos + yspeed * ydirection;
  
    // Test to see if the shape exceeds the boundaries of the screen
    // If it does, reverse its direction by multiplying by -1
    if (xpos > width - rad || xpos < rad) {
      xdirection *= -1;
    }
    if (ypos > height - rad || ypos < rad) {
      ydirection *= -1;
    }
  
    // Draw the shape
    ellipse(xpos, ypos, rad, rad);
  }
  

}
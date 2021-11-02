function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  stroke(200,200,200);
  strokeWeight(5);
  circle(400,400,200);
  stroke(200,200,200);
  strokeWeight(5);
  circle(200,200,200);
  stroke(200,200,200);
  strokeWeight(5);
  circle(0,0,200);
  stroke(100,100,100);
  strokeWeight(10);
  rect(0,400,400,-200);
  stroke(150,150,150);
  strokeWeight(5);
  arc(
    200,
    200,
    200,
    200,
    Math.PI/180*90,
    Math.PI/180*270,
    CHORD
  )
  
}


// überlagernde Sachen zeichnen?
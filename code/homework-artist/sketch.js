function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  stroke(25);
  strokeWeight(5);
  fill(255);
  square(0,0,400);
  fill(25);
  stroke(25);
  strokeWeight(3);
  ellipse(200,200,140,168);
  fill(25);
  ellipse(100,100,70,80);
  fill(25);
  stroke('#123456');
  strokeWeight(3);
  circle(80,150,22);
  fill('#123456');
  stroke(0,200,20);
  strokeWeight(3);
  triangle(120,170,150,200,120,200);
  fill(0,200,20);
  stroke(25);
  strokeWeight(3);
  rect(220,100,100,25);
  arc(
    340,
    320,
    200,
    200,
    Math.PI / 180 * -90,
    Math.PI / 180 * 160,
    PIE
  )


}

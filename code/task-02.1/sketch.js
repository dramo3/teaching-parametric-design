function setup() {
  createCanvas(400, 400);
}

function draw() {
  frameRate(1);
  background('white');
  stroke('black');
  strokeWeight(random(20));

  beginShape();
  for (let angle = 0; angle < 360; angle += 15){
    const radius = random(10, 500 );
    const x = radius * cos(Math.PI / 180 * angle);
    const y = radius * sin(Math.PI / 180 * angle);

    if (angle < 180) {
      fill(random(121,255), random(121,255), random(121,255));
        curveVertex(x + random(400) ,y + random(400));
      
    }   else if (angle > 180) {
      fill(random(120), random(120), random(120));
      curveVertex(x + random(400),y + random(400));
      
    }
      
endShape(CLOSE);
    
}
}
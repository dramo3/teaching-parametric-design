function setup() {
  createCanvas(400, 400);
}

function draw() {
  //noLoop();
  frameRate(3);
  background(100);
  stroke('red');


  beginShape();
  for (let fun = 0; fun < 100; fun += 2) {
    let fun = random(-100, 100);
    let a = fun;
    let b = fun * 20;

 triangle(200 + a, 200 + b, 300 + a, 200 + b, 250 + a, 300 + b)

  }
endShape();

}


 /* beginShape();
  for (let space = -100; space < 400; space += 20) {
    const spass = random(40, 80);
    const x = spass + space;
    const y = spass + space;

vertex(x + 200 , y + 200);
vertex(x + 100 , y + 100);
vertex(x + 50 , y + 50);
vertex(x + 250 , y + 250);

}

  endShape(CLOSE);
*/

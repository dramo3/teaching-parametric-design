const sketchWidth = 400;
const sketchHeight = 400;

function setup() {
  createCanvas(400, 400, SVG);
}

function draw() {
  background(255);

let x1 = Math.random(3);
let y1 = Math.random(5);
let x2 = Math.random(8);
let y2 = Math.random(13);
let x3 = Math.random(21);
let y3 = Math.random(34);
let x4 = Math.random(55);
let y4 = Math.random(89);


let totalPts = 100;
let steps = totalPts + 1;


let rand = 0;


let frames = 8;


  for (let dia = -sketchWidth; dia <= sketchWidth; dia += 50){
  
    noFill();
    stroke('red');
    strokeWeight(1);

    
    // translate(200, 200);
    // rotate(QUARTER_PI * Math.random(0, 300));

    // bezier(
    //   x1 + random(-rand, rand), 
    //   y1 * dia, 
    //   x2 + random(-rand, rand), 
    //   y2 * dia, 
    //   x3 + random(-rand, rand), 
    //   y3 * dia, 
    //   x4 + random(-rand, rand), 
    //   y4 * dia
    //   )
      
    // 
  }
  
    

  for (let i = 1; i < steps; i++) {
    
    stroke('black');
    point(
      (sketchWidth / steps) * i,
       sketchHeight / 2 + random(-rand, rand)
       );
stroke('red');
       bezier(
        x1 + random(-rand, rand), 
        (sketchHeight / steps) * i, 
        x2 + random(-rand, rand), 
        (sketchHeight / steps) * i, 
        x3 + random(-rand, rand), 
        (sketchHeight / steps) * i, 
        x4 + random(-rand, rand), 
        (sketchHeight / steps) * i
        )

    rand += random(-500, 500);

    // stroke('black');
    // rect(
    //   (sketchWidth / steps) * i,
    //    sketchHeight / 2 + random(-rand, rand),
    //    random(40, 120),
    //    random(200, 280)

    //    );

  }

  for (let i = 1; i < frames; i++) {

    push();
    // translate(200, 200);
    noFill();
  stroke('black');
    rect(
      (sketchWidth / random(4)),
       sketchHeight / 2 + random(-rand, rand),
       random(40, 120),
       random(200, 280)

       );
       pop();
    }
     noLoop();
    // frameRate(2);

    // save();
}

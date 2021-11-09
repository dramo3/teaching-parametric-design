const sketchWidth = 400;
const sketchHeight = 400;

// let colorValues = [50, 100, 150]



function setup() {
  createCanvas(sketchWidth, sketchHeight);
}
function draw() {

   /* erster Lösungsversuch:
background(255);
stroke('green');
let triSizeA = 10;
for(let x = -10; x <= sketchWidth; x += triSizeA * 4,5) {
  for(let y = -10; y <= sketchHeight; y += triSizeA * 4,5) {
    triangle(
      20 + x,
      20 + y,
      40 + x,
      20 + y,
      20 + x,
      40 + y
    )
    // if (x < 200){
    //  fill(55);
    // } else if (x >= 201){
    // noFill();
    // } 
  }
  
let triSizeB = 10;
for(let x = -8; x <= sketchWidth; x += triSizeB * 4,5) {
  for(let y = -8; y <= sketchHeight; y += triSizeB * 4,5) {
    triangle(
      40 + x,
      20 + y,
      40 + x,
      40 + y,
      20 + x,
      40 + y
    )
    // if (x > 100){
    //  fill(55);
    //  } else {
    //  noFill();
    // } 
  }
  
  
  
}
}


noLoop();
fill('white');
stroke(255);
square(80, 80, 240)

*/




// zweiter Lösungsversuch:

// let xValues = [-10, 20, 350, 400];

background(255);
stroke('green');
strokeWeight(1.5);

// ich will verschiedene werte für x ansteuern = mehrere Zeilen machen
let triSizeA = 10;
for(let x = -10; x <= sketchWidth; x += triSizeA * 4,5) {
  for(let y = -10; y <= sketchHeight; y += triSizeA * 4,5) {
    triangle(
      20 + x,
      20 + y,
      40 + x,
      20 + y,
      20 + x,
      40 + y
    )
    if (x < 400){
      fill(55,55,55);
     } /* else if (x > 340 && x<400){
     noStroke();
    } */
  }

  // warum wird das erste Dreieck nicht gefüllt?
  
let triSizeB = 10;
for(let x = -8; x <= sketchWidth; x += triSizeB * 4,5) {
  for(let y = -8; y <= sketchHeight; y += triSizeB * 4,5) {
    triangle(
      40 + x,
      20 + y,
      40 + x,
      40 + y,
      20 + x,
      40 + y
    );
    
  }
  
  
  
}
}

noLoop();
fill('white');
stroke(255);
square(80, 80, 240)



}

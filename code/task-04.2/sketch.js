const sketchWidth = 400;
const sketchHeight = 400;



let noiseVal;
let noiseScale = 0.02;

let a = 0;


function setup() {
  createCanvas(400, 400);
  // frameRate(5);
  // noLoop();
}

function draw() {
  background(0);



  // Draw the left half of image
  for (let y = 0; y < sketchHeight; y++) {
    for (let x = 0; x < sketchWidth; x++) {
      // noiseDetail of the pixels octave count and falloff value
      noiseDetail(2, 0.2);
      noiseVal = noise((random(0,-x)) * noiseScale, (random(0,-y)) * noiseScale);
      stroke(noiseVal * 255);
      point(x, y);
      line(x, y, x + 100, y + 100);
    }
  }  
}  








function keyPressed(){
  if(keyCode === 83){
    save();
  }
}
// console.log(keyCode);
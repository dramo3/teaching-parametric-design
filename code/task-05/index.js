const jscad = require('@jscad/modeling')


const {line, arc, circle, ellipse, rectangle, cube, sphere, cylinder, cuboid, roundedCuboid, geodesicSphere, ellipsoid, roundedCylinder, cylinderElliptic, torus} = jscad.primitives;
const {extrudeRectangular, extrudeLinear, extrudeRotate} = jscad.extrusions;
const {colorize, colorNameToRgb} = jscad.colors;
const {union, subtract, intersect, scission} = jscad.booleans;
const {translate, rotate, scale, center, align} = jscad.transforms;

// const a = Math.random(10);

/*
Generating a stamp that is always different.
It should vary between -1 and 1 offset in z-axis.


*/

const main = () => {

  // const a = Math.random(10);
  const shapes = [];
  const helpLines = [];
  const arr = [1,2,3,5,8];


  for ( let i = 0; i < 10; i ++){
    for ( let j = 0; j < 20; j += 2){
      for ( let k = 0; k < 20; k += 2){
    const x = 4;
    //const a = Math.random(arr[4]);


  shapes.push(
    cylinder({
      center: [0 + j, 0 + i, 0 ],
      height: 1 + j,
      radius: 1,
      segments: x + j
      }));
  }}};
  for ( let g = -2; g < 3; g += 1 ){
  helpLines.push(
    line([
      [-10 , 0 + g],
      [120 , 0 + g]
    ]));
  };

  const lines = rotate([Math.PI / 2, 0, 0], helpLines);

  
  const unionStamp = union(shapes);
  return [unionStamp, lines];
  console.log(a);
};



//   return allPrimitives.map((primitive, index) => {
//     return translate([(index % 4 - 2) * 6, Math.floor(index / 4 - 2) * 6, 0], primitive)
//   });
// };
 module.exports = { main };
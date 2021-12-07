const jscad = require('@jscad/modeling')
const {polygon, line, arc, circle, ellipse, rectangle, cube, sphere, cylinder, cuboid, roundedCuboid, geodesicSphere, ellipsoid, roundedCylinder, cylinderElliptic, torus} = jscad.primitives;
const {extrudeRectangular, extrudeLinear, extrudeRotate} = jscad.extrusions;
const {colorize, colorNameToRgb} = jscad.colors;
const {union, subtract, intersect, scission} = jscad.booleans;
const {translate, rotate, scale, center, align} = jscad.transforms;
const {expand, offset} = jscad.expansions;

const allSegs = 8;
const thingHeight = 5;

const main = () => {
   const eOne = arc({
    center: [0, 7],
    radius: 1,
    startAngle: Math.PI / 180 * 80,
    endAngle: Math.PI / 180 * 280, //full arc
    segments: allSegs // level of detail
  }); 
  const eTwo = arc({
    center: [0, 1],
    radius: 1,
    startAngle: Math.PI / 180 * 80,
    endAngle: Math.PI / 180 * 320, //full arc
    segments: allSegs // level of detail
  });

  const l = line([
    [6, 9],
    [6, 0],
    [6.3, 0]
  ]);

  const iDot = circle({
    center: [9, -2],
    radius: 0.1,
    startAngle: 0,
    endAngle: Math.PI * 2, //full arc
    segments: 32 // level of detail
  });
  
  const i = line([
    [11, 9],
    [11, 1.4]
  ]);

  /*
  const a = polygon({
    points: [ 
      [13, -2],
      [17, 9],
      [20, -2],
      
    ]
  });
  */

  /*
  const a = ellipse({
    center: [17, 5],
    radius: [10,10],
    startAngle: Math.PI / 180 * 45,
    endAngle: Math.PI / 180 * 120 , //full arc
    segments: 32 // level of detail
  });
  */
  

  const aOne = line([
    [10.5, -1.5],
    [14, 9.5]
  ]);

  const aTwo = line([
    
    [18, 9.5],
    [22, -1.5]
  ]);


  const sOne = arc({
    center: [25.5, 6.5],
    radius: 1,
    startAngle: Math.PI / 180 * 45,
    endAngle: Math.PI / 180 * 270, //full arc
    segments: allSegs // level of detail
  });
   const sTwo = arc({
    center: [25, 0.5],
    radius: 1,
    startAngle: Math.PI / 180 * 200,
    endAngle: Math.PI / 180 * 90, //full arc
    segments: allSegs // level of detail
  }); 

  /*
    const l = arc({
      center: [9, 4],
      radius: 5,
      startAngle: Math.PI / 180 * 120,
      endAngle: Math.PI / 180 * 300, //full arc
      segments: allSegs // level of detail
    }); 
  */
  const offsetShape = offset({
    delta: 2,
    corners: 'round',
    segments: 20,
  }, eOne, eTwo, l, i, aOne, aTwo, sOne, sTwo);
  
  const expandArc = expand({
    delta: 2,
    corners: 'round',
    segments: 100,
  },offsetShape, iDot);

  /*
  const finalShape = union([
    expandArc
  ]);
  */
  
  const extrudeShape = extrudeLinear({
    height: thingHeight,
    twistAngle: Math.PI / 180 * 350, // maybe 350?
    twistSteps: 1
  }, expandArc);


  const shape = rotate([0, Math.PI / 180 * 90, Math.PI / 180 * 349], cylinder({
    center: [thingHeight * -0.5, 9, 10],
    height: 50,
    radius: 1,
    segments: 32
  }));
  
 

  const sub = union(extrudeShape);

  const fin = subtract(sub, shape);

  


  /*
  const finalShape = union([
    extrudeShape
  ]);
  */
  return [fin];
};

module.exports = { main };
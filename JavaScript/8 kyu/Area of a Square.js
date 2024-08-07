// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

// [IMAGE OF A RED SQUARE WITH 1/4 OF A CIRCLE GOING FROM BOTTOM LEFT TO TOP RIGHT]

// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

function squareArea(A) {
  let diameter = (4 * A) / Math.PI;
  let radius = diameter / 2;
  let areaOfSquare = radius * radius;
  return Number(areaOfSquare.toFixed(2));
}

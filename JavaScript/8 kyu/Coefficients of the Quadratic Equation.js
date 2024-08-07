// In this Kata you are expected to find the coefficients of quadratic equation of the given two roots (x1 and x2).

// Equation will be the form of ax^2 + bx + c = 0

// Return type is a Vector (tuple in Rust, Array in Ruby) containing coefficients of the equations in the order (a, b, c).

// Since there are infinitely many solutions to this problem, we fix a = 1.

// Remember, the roots can be written like (x-x1) * (x-x2) = 0
// Example

// quadratic(1,2) = (1, -3, 2)

// This means (x-1) * (x-2) = 0; when we do the multiplication this becomes x^2 - 3x + 2 = 0
// Example 2

// quadratic(0,1) = (1, -1, 0)

// This means (x-0) * (x-1) = 0; when we do the multiplication this becomes x^2 - x + 0 = 0
// Notes

//     Inputs will be integers.
//     When x1 == x2, this means the root has the multiplicity of two

function quadratic(x1, x2) {
  let result = [1];
  let sum = x1 + x2;
  let product = x1 * x2;
  result.push(-sum, product);
  return result;
}

// the result array already has a "1" in it because the Kata itself said that a would always be equal to 1.
// Also, it is known that if the roots of a quadratic equation ax² + bx + c = 0 are x1 and x2, then:
// x1 + x2 = -b/a
// x1 * x2 = c * a

// Since a = 1, we get:
// x1 + x2 = -b/a = -b/1 = -b (-sum)
// x1 * x2 = c * a = c * 1 = c (product)

// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

// If you can, try writing it in only one line of code.

function findMultiples(integer, limit) {
  let count = 1;
  let result = [];
  while (integer * count <= limit) {
    count = result.push(integer * count); // Interestingly enough, this makes "count" equal to the new length of the "result" array. Basically, returning a push() method gives you the length of the array you pushed something into.
  }
  return result.slice(1);
}

// The code below does the exact same thing, but it's easier to understand:

function findMultiples(integer, limit) {
  let count = 1;
  let result = [];
  while (integer * count <= limit) {
    result.push(integer * count);
    count = result.length;
  }
  return result.slice(1);
}

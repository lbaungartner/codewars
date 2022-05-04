// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x) {
  let stringsToNumbers = x.map(Number);
  return stringsToNumbers.reduce((acc, c) => acc + c, 0);
}

// Makes every element on the array x an integer using the .map() method, and then sums all of them using the .reduce() method.

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
  let sum = array.reduce((acc, c) => acc + c, 0);
  return array.length > 0 ? sum / array.length : 0;
}

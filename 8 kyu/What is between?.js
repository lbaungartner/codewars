// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a, b) {
  return Array(b - a + 1) // Makes an array that have the correct amount of elements inside of it.
    .fill() // Fills the array with "undefined" elements.
    .map((element, index) => a + index); // Adds a to the index of each element in the array.
}

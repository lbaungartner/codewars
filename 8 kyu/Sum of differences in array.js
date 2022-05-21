// Your task is to sum the differences between consecutive pairs in the array in descending order.

// For example:

// sumOfDifferences([2, 1, 10])

// Returns 9

// Descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).

function sumOfDifferences(arr) {
  let sorted = arr
    .sort(function (a, b) {
      return a - b;
    })
    .reverse();
  let newA = [];
  for (let i = 1; i < sorted.length; i++) {
    if (arr === [] || arr.length === 1) {
      return 0;
    } else {
      newA.push(sorted[i] - sorted[i - 1]);
    }
  }
  if (newA.length === 1) {
    return Math.abs(
      newA.reduce(
        (PreviousValue, currentValue) => PreviousValue + currentValue,
        0
      )
    );
  } else {
    return Math.abs(newA.reduce((acc, c) => acc + c, 0));
  }
}

//This abomination is probably the worst code I've ever done, but it works. I'm not gonna pretend to know why of how, though.

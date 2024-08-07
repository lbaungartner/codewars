// Return the Nth Even Number

// Example(Input --> Output)

// 1 --> 0 (the first even number is 0)
// 3 --> 4 (the 3rd even number is 4 (0, 2, 4))
// 100 --> 198
// 1298734 --> 2597466

// The input will not be 0.

function nthEven(n) {
  if (n === 1) {
    return 0;
  } else {
    return (n - 1) * 2;
  }
}

// I realize now that returning (n -1) * 2 would work if n === 1 as well (making the if/else unnecessary), but since the answer I submitted to the Kata on Codewars was just like it is above, I kept it intact in here as well.

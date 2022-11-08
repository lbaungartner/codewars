// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.

function switchItUp(number) {
  return number === 1
    ? "One"
    : number === 2
    ? "Two"
    : number === 3
    ? "Three"
    : number === 4
    ? "Four"
    : number === 5
    ? "Five"
    : number === 6
    ? "Six"
    : number === 7
    ? "Seven"
    : number === 8
    ? "Eight"
    : number === 9
    ? "Nine"
    : "Zero";
}

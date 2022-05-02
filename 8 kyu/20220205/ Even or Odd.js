// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// Numbers divided by 2 with remainder 0 are even, and numbers divided by 2 with remainder 1 are odd. Using modulus we're able to use those remainders to determine whether a number is even or not.

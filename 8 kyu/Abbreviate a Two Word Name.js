// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name) {
  let arr1 = name.split(" ")[0];
  let arr2 = name.split(" ")[1];
  return arr1[0].toUpperCase() + "." + arr2[0].toUpperCase();
}

// Write a function to split a string and convert it into an array of words.

// Examples (Input -> Output):

// * "Robin Singh" ==> ["Robin", "Singh"]

// * "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

function stringToArray(string) {
  return string.split(" ");
}

// The .split() simply splits a string into a ordered list of substrings, puts them all in an array and returns that array. In this case, it splitted the string every time there was a white space.

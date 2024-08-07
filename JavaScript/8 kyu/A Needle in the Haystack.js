// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])

// should return "found the needle at position 5" (in COBOL "found the needle at position 6")

function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}

// The indexOf() method returns the index of a given element, so by just concatenating the index of the element "needle" to the "found the need at position " string we arrive at the desired answer for the problem.

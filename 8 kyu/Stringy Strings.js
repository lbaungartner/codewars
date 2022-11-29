// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.

function stringy(size) {
  let arr2 = [];
  let arr = Array.from(Array(size), (e, i) => i + 1);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) {
      arr2.push(1);
    } else {
      arr2.push(0);
    }
  }
  return arr2.join("");
}

function invert(array) {
  let invertedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === []) {
      return [];
    } else {
      invertedArray.push(array[i] * -1);
    }
  }
  return invertedArray;
}

// In one of the tests it asked to invert 0 to -0, which makes no mathematical sense, but I did it anyway just so I could complete the challenge.

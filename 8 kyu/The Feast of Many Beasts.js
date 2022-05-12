// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

function feast(beast, dish) {
  let beastNameSplit = beast.replace(/ /g, "").split("");
  let dishNameSplit = dish.replace(/ /g, "").split("");
  let beastFirstLetter = beastNameSplit.shift();
  let beastLastLetter = beastNameSplit.pop();
  let dishFirstLetter = dishNameSplit.shift();
  let dishLastLetter = dishNameSplit.pop();

  if (
    beastFirstLetter === dishFirstLetter &&
    beastLastLetter === dishLastLetter
  ) {
    return true;
  } else {
    return false;
  }
}

// I did the above as a first try, but improved it afterwards:

function feast(beast, dish) {
  let beastNameSplit = beast.replace(/ /g, "").split("");
  let dishNameSplit = dish.replace(/ /g, "").split("");

  if (
    beastNameSplit.shift() === dishNameSplit.shift() &&
    beastNameSplit.pop() === dishNameSplit.pop()
  ) {
    return true;
  } else {
    return false;
  }
}

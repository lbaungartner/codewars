// Task

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
// Examples

// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
  let indices = [];

  array
    .filter((v, i) => v % 2 && indices.push(i))
    .sort((a, b) => a - b)
    .forEach((v, i) => (array[indices[i]] = v));

  return array;
}

// This one was very hard for me to understand how it works and I was only able to do the Kata by searching for a solution on the internet. As I understood it, it goes like this:

// Considering array = [5, 3, 2, 8, 1, 4], we are first filtering it so we only get the odd numbers and also push their indices to a new, empty array:

// With this, we now have array = [5, 3, 1] and indices = [0, 1, 4].

// Next we sort array into ascending order, so array = [1, 3, 5].

// And now comes the hardest part:

// We will apply each one of those values in array ([1, 3, 5]) into the original array ([5, 3, 2, 8, 1, 4]). Where v equals the value of the elements in array = [1, 3, 5] and i equals the indices of said elements:

// .forEach((v, i) => (array[indices[i]] = v))

// .forEach((1, 0) => (array[indices[0]] = 1))

// .forEach((1, 0) => (array[0] = 1))

// We now applied the value of 1 to the index 0 of the original array = [5, 3, 2, 8, 1, 4], so it is now array = [1, 3, 2, 8, 1, 4]. Next one:

// forEach((v, i) => (array[indices[i]] = v))

// forEach((3, 1) => (array[indices[1]] = 3))

// forEach((3, 1) => (array[1] = 3))

// We now applied the value of 3 to the index 1 of the array = [1, 3, 2, 8, 1, 4], so it is now array = [1, 3, 2, 8, 1, 4] (it didn't change anything, since 3 was already on index 1 of the original array). The last one:

// .forEach((v, i) => (array[indices[i]] = v))

// .forEach((5, 2) => (array[indices[2]] = 5))

// .forEach((5, 2) => (array[4] = 5))

// At last, we applied the value of 5 to the index 4 of the array = [1, 3, 2, 8, 1, 4], so it is now array = [1, 3, 2, 8, 5, 4];

// I admit that this Kata was way too hard for me and I wouldn't be able to do it on my own with the experience and knowledge of JS I have at the moment, but I can't say I'm not happy to at least be able to understand it. It shows the progress I'm having towards mastering the language.

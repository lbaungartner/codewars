// Convert number to reversed array of digits

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// Example:

// 348597 => [7,9,5,8,4,3]
// 0 => [0]

function digitize(n) {
  return ("" + n).split("").reverse().map(Number);
}

// When you "add" a number to a string the interpreter converts your number to a string and concatenates both together, so that's what's happening in the ("" + n) part. Now that we have a string of numbers, we can split those into single digits and make an array out of them using the split() method. Then we reverse the array and use the map() method passing the Number constructor to turn each string in the array into a number.

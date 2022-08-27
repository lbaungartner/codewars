// Your job is to write a function which increments a string, to create a new string.

//     If the string already ends with a number, the number should be incremented by 1.
//     If the string does not end with a number. the number 1 should be appended to the new string.

// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(string) {
  let numsOfString = [];
  let lettersOfString = [];
  for (let i = 0; i < string.split("").length; i++) {
    if (string.split("")[i] == Number(string.split("")[i])) {
      numsOfString.push(string[i]);
    } else {
      lettersOfString.push(string[i]);
    }
  }
  let numberLength = numsOfString.length;

  if (numsOfString.length >= 1) {
    numsOfString = (parseInt(numsOfString.join("")) + 1).toString();
  } else {
    numsOfString = 1;
  }
  while (numsOfString.length < numberLength) {
    numsOfString = "0" + numsOfString;
  }
  return lettersOfString.join("") + numsOfString;
}

// This one was literally taking me days to solve and I still couldn't do it.
// At first I tried to do it in a way that sort of kept the zeros instead of adding them at the end with the while loop, and it was actually a pretty smart idea (that I obviously didn't thought of; I just took it from a guy on the internet), but it had problems when it came to a number going from 99 to 100, or 999 to 1000, etc. Anyway, in the end (after many, MANY tries) I just gave up and searched for a solution on the internet, which turned out to be much simplier and is the one which helped me solve it. No, I didn't just copied and pasted it here. I took my time to fully understanted the solution and made some pretty relevant changes on it. The biggest one is in the way I extracted the string's numbers. The guy used String.prototype.match(), RegEx, ternary operators, etc., but I preferred to do it the way I was originally doing in my first tries, which used arrays. It may be a worse version of the solution, but I like it. Here goes the original one taken from this link (https://stackoverflow.com/questions/21122338/how-to-increment-a-string-in-javascript) and done by Gabriel Guérin:

function incrementString(string) {
  // Extract string's number
  var number = string.match(/\d+/) === null ? 0 : string.match(/\d+/)[0];

  // Store number's length
  var numberLength = number.length;

  // Increment number by 1
  number = (parseInt(number) + 1).toString();

  // If there were leading 0s, add them again
  while (number.length < numberLength) {
    number = "0" + number;
  }

  return string.replace(/[0-9]/g, "").concat(number);
}

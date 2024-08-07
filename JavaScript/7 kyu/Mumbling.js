// This time no story, no theory. The examples below show you how to write function accum:
// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  let newStringAsAnArray = [];
  let split = s.split("");
  for (let i = 0; i < split.length; i++) {
    if (i === 0) {
      newStringAsAnArray.push(split[i]);
    } else if (i >= 1) {
      newStringAsAnArray.push(
        split[i].toUpperCase() + split[i].repeat(i).toLowerCase()
      );
    }
  }
  return newStringAsAnArray.join("-");
}

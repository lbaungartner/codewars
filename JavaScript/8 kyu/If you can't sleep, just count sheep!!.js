// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num) {
  let arr = Array.from(Array(num).keys());
  if (num === 0) {
    return "";
  } else if (num === 1) {
    return "1 sheep...";
  } else {
    return (arr = arr.map((i) => i + 1 + " sheep...")).join("");
  }
};

// Such a bad way to do it, but hey, it works!

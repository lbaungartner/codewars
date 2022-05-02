// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
// Examples

// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url) {
  return url.split("#").shift();
}

// First we split the string into an array with two elements, where the first element is everything that comes before the #, and the second element is everything that comes after. Then, by using the .shift() method, we get as a result the first element of this array (which is removed from the array and returned).

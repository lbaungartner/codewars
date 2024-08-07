// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

// The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.
// Examples:

// findNb(1071225) --> 45

// findNb(91716553919377) --> -1

function findNb(m) {
  let numOfCubes = 0;
  while ((numOfCubes ** 2 * (numOfCubes + 1) ** 2) / 4 < m) {
    numOfCubes++;
  }
  if ((numOfCubes ** 2 * (numOfCubes + 1) ** 2) / 4 === m) {
    return numOfCubes;
  } else {
    return -1;
  }
}

// Here I used the mathematical formula of the sum of cubes of N natural numbers two times; once to get number of cubes needed to reach the volume "m" and then again just to check if the volume of all those cubes added together actually matched "m" perfectly. If it did, then everything was okay and I just returned the number of cubes I got from the while loop; if not, then I return -1 just the Kata asked.

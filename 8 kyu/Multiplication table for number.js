// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// For example, a multiplication table (string) for number == 5 looks like below:

// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50
// P. S. You can use \n in string to jump to the next line.

// Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.

function multiTable(number) {
  return (
    "1 * " +
    number.toString() +
    " = " +
    (1 * number).toString() +
    "\n" +
    "2 * " +
    number.toString() +
    " = " +
    (2 * number).toString() +
    "\n" +
    "3 * " +
    number.toString() +
    " = " +
    (3 * number).toString() +
    "\n" +
    "4 * " +
    number.toString() +
    " = " +
    (4 * number).toString() +
    "\n" +
    "5 * " +
    number.toString() +
    " = " +
    (5 * number).toString() +
    "\n" +
    "6 * " +
    number.toString() +
    " = " +
    (6 * number).toString() +
    "\n" +
    "7 * " +
    number.toString() +
    " = " +
    (7 * number).toString() +
    "\n" +
    "8 * " +
    number.toString() +
    " = " +
    (8 * number).toString() +
    "\n" +
    "9 * " +
    number.toString() +
    " = " +
    (9 * number).toString() +
    "\n" +
    "10 * " +
    number.toString() +
    " = " +
    (10 * number).toString()
  );
}

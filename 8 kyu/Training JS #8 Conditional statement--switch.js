// In JavaScript, switch can replace multiple if statements.

// switch(n){
//   case 1:
//     //code block
//     break;
//   case 2:
//     //code block
//     break;
//   case ...:
//     //code block
//     break;

//   default:       //default is optional, sometimes it can be omitted
//     //code block
//                  //The last one does not need break
// }
// switch is the keyword and n is the variable to switch. case 1 means when n===1. Following the ":" you can add your code for what to do in that case. The keyword break is used as termination - if you forget break, the code will continue running through the other case statements and default until a break appears. default is always entered if you've reached it.

// In some instances, the switch statement is clearer than the if..else statement.

// For example, we can write a function to calculate what day today is, like this:

// function whatDayIsToday(n){
//   // getDay() is a method of Date() - we will learn this later
//   var day=new Date().getDay(),x;
//   switch (day){
//     case 0:
//       x="Today it's Sunday";
//       break;
//     case 1:
//       x="Today it's Monday";
//       break;
//     case 2:
//       x="Today it's Tuesday";
//       break;
//     case 3:
//       x="Today it's Wednesday";
//       break;
//     case 4:
//       x="Today it's Thursday";
//       break;
//     case 5:
//       x="Today it's Friday";
//       break;
//     case 6:
//       x="Today it's Saturday";
//       break;
//   }
//   return x;
// }
// Task
// Complete the function howManydays. It accepts 1 parameter month, which means the month of the year. Different months have a different number of days as shown in the table below. Return the number of days that are in month. There is no need for input validation: month will always be greater than 0 and less than or equal to 12.

// +---------------+-------------+
// |    month      |    days     |
// +---------------+-------------+
// |1,3,5,7,8,10,12|     31      |
// +---------------+-------------+
// |4,6,9,11       |     30      |
// +---------------+-------------+
// |2              |     28      |  (Do not consider the leap year)
// +---------------+-------------+
// Tip: Using default for most of the cases can reduce your work.

// When you have finished, click "Test" to test your code against initial tests and "Attempt" to test your code against all tests. If you pass in all tests you can click "Submit" to submit your code.

// #1: create your first JS function helloWorld
// #2: Basic data types--Number
// #3: Basic data types--String
// #4: Basic data types--Array
// #5: Basic data types--Object
// #6: Basic data types--Boolean and conditional statements if..else
// #7: if..else and ternary operator
// #8: Conditional statement--switch
// #9: loop statement --while and do..while
// #10: loop statement --for
// #11: loop statement --break,continue
// #12: loop statement --for..in and for..of
// #13: Number object and its properties
// #14: Methods of Number object--toString() and toLocaleString()
// #15: Methods of Number object--toFixed(), toExponential() and toPrecision()
// #16: Methods of String object--slice(), substring() and substr()
// #17: Methods of String object--indexOf(), lastIndexOf() and search()
// #18: Methods of String object--concat() split() and its good friend join()
// #19: Methods of String object--toUpperCase() toLowerCase() and replace()
// #20: Methods of String object--charAt() charCodeAt() and fromCharCode()
// #21: Methods of String object--trim() and the string template
// #22: Unlock new skills--Arrow function,spread operator and deconstruction
// #23: methods of arrayObject---push(), pop(), shift() and unshift()
// #24: methods of arrayObject---splice() and slice()
// #25: methods of arrayObject---reverse() and sort()
// #26: methods of arrayObject---map()
// #27: methods of arrayObject---filter()
// #28: methods of arrayObject---every() and some()
// #29: methods of arrayObject---concat() and join()
// #30: methods of arrayObject---reduce() and reduceRight()
// #31: methods of arrayObject---isArray() indexOf() and toString()
// #32: methods of Math---round() ceil() and floor()
// #33: methods of Math---max() min() and abs()
// #34: methods of Math---pow() sqrt() and cbrt()
// #35: methods of Math---log() and its family
// #36: methods of Math---kata author's lover:random()
// #37: Unlock new weapon---RegExp Object
// #38: Regular Expression--"^","$", "." and test()
// #39: Regular Expression--"?", "*", "+" and "{}"
// #40: Regular Expression--"|", "[]" and "()"
// #41: Regular Expression--""
// #42: Regular Expression--(?:), (?=) and (?!)

function howManydays(month) {
  var days = 0;
  switch (month) {
    case 1:
      days = 31;
      break;
    case 2:
      days = 28;
      break;
    case 3:
      days = 31;
      break;
    case 4:
      days = 30;
      break;
    case 5:
      days = 31;
      break;
    case 6:
      days = 30;
      break;
    case 7:
      days = 31;
      break;
    case 8:
      days = 31;
      break;
    case 9:
      days = 30;
      break;
    case 10:
      days = 31;
      break;
    case 11:
      days = 30;
      break;
    case 12:
      days = 31;
      break;
  }
  return days;
}

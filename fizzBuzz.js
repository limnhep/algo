/*
    i: integer
    o: an array of strings that consists of numbers and strings if met under a certain condition
    e: order of operations matters
*/
var fizzBuzz = function (n) {
  const resultArr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      resultArr.push('FizzBuzz');
    } else if (i % 3 === 0) {
      resultArr.push('Fizz');
    } else if (i % 5 === 0) {
      resultArr.push('Buzz');
    } else {
      resultArr.push(i.toString());
    }
  }
  return resultArr;
};

// time: O(n)
// space: O(n)
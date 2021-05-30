/*
  You are given an array of positive numbers from 1 to n, such that all numbers from 1 to n are present except one number ‘x’. You have to find ‘x’. The input array is not sorted.
*/

let missingNumber = function (input) {
  let actualSum = 0;
  for (let num of input) actualSum += num;
  const n = input.length + 1;
  const sumOfN = Math.floor(n * (n + 1) / 2);
  return sumOfN - actualSum;
};

const testArr = [1, 5, 3, 4];
console.log('The missing number is 2. Therefore, the expected result should be: 2 => ', missingNumber(testArr));

/*
  TIME: O(N) where N is the number of elements in the input array
  SPACE: O(1)
*/
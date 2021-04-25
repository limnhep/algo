/*
A self-dividing number is a number that is divisible by every digit it contains.

For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

Also, a self-dividing number is not allowed to contain the digit zero.

Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

Example 1:
Input:
left = 1, right = 22
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
Note:

The boundaries of each input argument are 1 <= left <= right <= 10000.
*/

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */

/*
    i: an integer, left and right bound
    o: an array containing a list of self dividing numbers
    ec: assume that we are working non-negative numbers
    strategy: traverse from left to upper bound and check if each number is a self dividing number, if it is then push it to the result array.
*/

var selfDividingNumbers = function (left, right) {
  const result = [];
  for (let i = left; i <= right; i++) {
    if (isSelfDividingNumber(i)) result.push(i);
  }
  return result;
};

var isSelfDividingNumber = function (digits) {
  const nums = digits.toString();
  for (let num of nums) {
    if (digits % Number(num) !== 0 || num === 0) return false;
  }
  return true;
}

// time: O(n^2) due to double looping - traversing over the each digit from lower bound to upper bound and also traversing to check each number to see if it's a valid selfDividingNumber
// space: O(n) due to the space container, result.

// test case

const leftBound = 1;
const rightBound = 22;
const output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22];

const test = selfDividingNumbers(leftBound, rightBound);
console.log('Expected the output to be: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22] ', test); // CHECK
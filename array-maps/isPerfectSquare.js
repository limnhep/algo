/*
Given a positive integer num, write a function which returns True if num is a perfect square else False.

Follow up: Do not use any built-in library function such as sqrt.



Example 1:

Input: num = 16
Output: true
Example 2:

Input: num = 14
Output: false


Constraints:

1 <= num <= 2^31 - 1

*/

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  if (num < 1) return false;
  if (num === 0) return false;
  let left = 1;
  let right = num;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (mid * mid === num) return true;
    if (mid * mid <= num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
};

// time: O(logn)
// space: O(1)
/*
Given an integer, find its square root without using the built-in square root function. Only return the integer part (truncate the decimals).

Example #
Input: 16

Output: 4

Input: 8

Output: 2

Explanation: Square root of 8 is 2.83..., return integer part 2
*/

function square_root(n) {
  let left = 0;
  let right = n;
  let result = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (mid * mid <= n) {
      left = mid + 1;
      result = mid;
    } else {
      right = mid - 1;
    }
  }
  return result;
}

// time: O(logn)
// space: O(1)
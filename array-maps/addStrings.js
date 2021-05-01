/*
Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.



Example 1:

Input: num1 = "11", num2 = "123"
Output: "134"
Example 2:

Input: num1 = "456", num2 = "77"
Output: "533"
Example 3:

Input: num1 = "0", num2 = "0"
Output: "0"


Constraints:

1 <= num1.length, num2.length <= 104
num1 and num2 consist of only digits.
num1 and num2 don't have any leading zeros except for the zero itself.

*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let carry = 0;
  let result = '';
  let i = num1.length - 1;
  let j = num2.length - 1;
  while (i >= 0 || j >= 0) {
    const d1 = i < 0 ? 0 : parseInt(num1.charAt(i));
    const d2 = j < 0 ? 0 : parseInt(num2.charAt(j));
    const sum = d1 + d2 + carry;
    const d3 = sum % 10;
    carry = Math.floor(sum / 10);
    result = d3 + result;
    i--;
    j--;
  }
  if (carry === 1) result = carry + result;
  return result;
};

// time: O(n)
// space: O(1)
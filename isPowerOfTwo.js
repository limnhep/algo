/*
Given an integer n, return true if it is a power of two. Otherwise, return false.

An integer n is a power of two, if there exists an integer x such that n == 2x.



Example 1:

Input: n = 1
Output: true
Explanation: 20 = 1
Example 2:

Input: n = 16
Output: true
Explanation: 24 = 16
Example 3:

Input: n = 3
Output: false
Example 4:

Input: n = 4
Output: true
Example 5:

Input: n = 5
Output: false


Constraints:

-231 <= n <= 231 - 1


Follow up: Could you solve it without loops/recursion?
*/

/**
 * @param {number} n
 * @return {boolean}
 */

/*
    i: an integer
    o: a bolean indicating that the number is power of two, which means that the last remainder will be 1
    ec: assumes that there is none
    strategy:
        - by default, n = 0 is false because 2 to the power of 0 is 1.
        - as long as n is modulo by 2, divide n by 2 until the remainder is 1
        - return true if the raminder is 1; otherwise, false.
*/
var isPowerOfTwo = function (n) {
  if (n === 0) return false;
  while (n % 2 === 0) n /= 2;
  return n === 1;
};

// time: O(logn)
// space: O(1)
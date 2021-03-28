/*
Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

You may return any answer array that satisfies this condition.



Example 1:

Input: [3,1,2,4]
Output: [2,4,3,1]
The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.


Note:

1 <= A.length <= 5000
0 <= A[i] <= 5000
*/

/**
 * @param {number[]} A
 * @return {number[]}
 */

/*
    i: nums, non-negative integers
    o: nums, in-place, left-side -> even numbers, right-side -> odd numbers
    e: na, assuming
    strategy:
        a. swap if it's odd, do so until reaching the right-hand side of the array
*/
var sortArrayByParity = function (A) {
  let left = 0;
  let right = 0;
  while (right < A.length) { // while not reaching the end
    if (A[right] % 2 !== 1) {
      [A[left], A[right]] = [A[right], A[left]];
      left++;
    }
    right++;
  }
  return A;
};

// time: O(n)
// space: O(1)
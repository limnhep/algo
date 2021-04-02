/*
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.



Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]


Constraints:

nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[i] <= 109
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

/*
    input: nums1 and nums2, both represent an array of integers where nums1's length could hold both integers in nums1 and nums2
    output: an array of integers that contains all the elements of nums1 and as well as nums2
    edge cases: punctuations, symbols, just numbers only!
    strategy:
        - traverse over eacn element but replace 0s with the element from nums2
        - return sorted nums1
*/
var merge = function (nums1, m, nums2, n) {
  for (let i = 0; i < nums2.length; i++) {
    nums1[i + m] = nums2[i];
  }
  return nums1.sort((a, b) => a - b);
};

// time: O(nlogn), where n is the length of the array
// space: O(nlogn)
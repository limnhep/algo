/*

Given an array of integers nums and an integer k, return the number of unique k-diff pairs in the array.

A k-diff pair is an integer pair (nums[i], nums[j]), where the following are true:

0 <= i < j < nums.length
|nums[i] - nums[j]| == k
Notice that |val| denotes the absolute value of val.



Example 1:

Input: nums = [3,1,4,1,5], k = 2
Output: 2
Explanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).
Although we have two 1s in the input, we should only return the number of unique pairs.
Example 2:

Input: nums = [1,2,3,4,5], k = 1
Output: 4
Explanation: There are four 1-diff pairs in the array, (1, 2), (2, 3), (3, 4) and (4, 5).
Example 3:

Input: nums = [1,3,1,5,4], k = 0
Output: 1
Explanation: There is one 0-diff pair in the array, (1, 1).
Example 4:

Input: nums = [1,2,4,4,3,3,0,9,2,3], k = 3
Output: 2
Example 5:

Input: nums = [-1,-2,-3], k = 1
Output: 2


Constraints:

1 <= nums.length <= 104
-107 <= nums[i] <= 107
0 <= k <= 107

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  nums = k === 0 ? nums : Array.from(new Set(nums)); // [3, 1, 4, 5]
  const uniqueHashMap = new Map();
  let uniquePairs = 0;
  for (const num of nums) {
    if (uniqueHashMap.get(num + k) === 1) uniquePairs++;
    if (num + k !== num - k && uniqueHashMap.get(num - k) === 1) uniquePairs++;
    uniqueHashMap.set(num, uniqueHashMap.get(num) + 1 || 1);
  }
  return uniquePairs;
};

// time: O(n)
// space: O(n)

// alternative

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  const uniqueHashMap = new Map();
  let uniquePairs = 0;
  for (const num of nums) {
    uniqueHashMap.set(num, uniqueHashMap.get(num) + 1 || 1);
  }
  uniqueHashMap.forEach((val, key) => {
    if (k === 0) {
      if (val > 1) uniquePairs++;
    } else {
      if (uniqueHashMap.has(key + k)) uniquePairs++;
    }
  })
  return uniquePairs;
};

// time: O(n)
// space: O(n)

// time: O(n)
// space: O(n)
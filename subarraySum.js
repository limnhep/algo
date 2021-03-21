/*
Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.



Example 1:

Input: nums = [1,1,1], k = 2
Output: 2
Example 2:

Input: nums = [1,2,3], k = 3
Output: 2


Constraints:

1 <= nums.length <= 2 * 104
-1000 <= nums[i] <= 1000
-107 <= k <= 107
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const map = new Map();
  let sum = 0, count = 0;
  map.set(0, 1); // starting point
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map.has(sum - k)) count += map.get(sum - k);
    map.set(sum, map.get(sum) + 1 || 1); // by default, the value of the corresponding property is 1
  }
  return count;
};

// time: O(n) where n is number of elements in the given input array
// space: O(n) where n is the distinct identifier

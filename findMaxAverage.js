/*
Given an array consisting of n integers, find the contiguous subarray of given length k that has the maximum average value. And you need to output the maximum average value.

Example 1:

Input: [1,12,-5,-6,50,3], k = 4
Output: 12.75
Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75


Note:

1 <= k <= n <= 30,000.
Elements of the given array will be in the range [-10,000, 10,000].
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  if (nums.length <= 1) return nums[0];
  const result = [];
  let left = 0, right = 0, sum = 0;
  for (right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (right - left + 1 >= k) {
      result.push(sum / k);
      sum -= nums[left];
      left++;
    }
  }
  return Math.max.apply(null, result);
};

// time: O(n) where n is the element in the given array
// space: O(n) where n is the average of the contiguous subarray
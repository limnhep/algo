/*
Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

Example 1:

Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let priorMax = nums[0],
    priorMin = nums[0],
    result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let currMax = Math.max(priorMax * nums[i], nums[i], priorMin * nums[i]);
    let currMin = Math.min(priorMax * nums[i], nums[i], priorMin * nums[i]);

    priorMax = currMax;
    priorMin = currMin;
    result = Math.max(currMax, result);
  }
  return result;
};

// alternative solution:

var maxProduct = function (nums) {
  let max = -Infinity,
    currMax = 1,
    currMin = 1;
  for (let i = 0; i < nums.length; i++) {
    let prevMax = currMax;
    currMax = Math.max(nums[i] * prevMax, nums[i], currMin * nums[i]);
    currMin = Math.min(nums[i] * prevMax, nums[i], currMin * nums[i]);
    max = Math.max(max, currMax);
  }
  return max;
};

// time: O(n)
// space: O(1)
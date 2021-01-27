/*
    i: an array of numbers, both negative and positive integers;
    o: a number that denotes as the largest sum within the array;
    e: if length is 0, then return the element at index 0
    strategy: create a placeholder and identify a maximum possible sum by comparing the maximum sum with the sum of iterated elements
*/
var maxSubArray = function (nums) {
  let maximum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > 0) {
      nums[i] += nums[i - 1];
    }
    maximum = Math.max(maximum, nums[i]);
  }
  return maximum;
};
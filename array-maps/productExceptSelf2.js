/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
    @param {number[]} nums
    @return {number[]}
    @strategy:
        => create two variables (left and right pointer) and set it one to 1
        => traverse from right to left element and multiply it by right
        => tragerse from left to right element and multiply it by left
        => return the result
*/
var productExceptSelf = function (nums) {
  const resultNums = [];
  let left = 1;
  let right = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    resultNums[i] = right;
    right *= nums[i];
  }
  for (let j = 0; j < nums.length; j++) {
    resultNums[j] *= left;
    left *= nums[j];
  }
  return resultNums;
};

/*
  time: O(n)
  space: O(n)
*/
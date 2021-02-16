/*
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]
*/

var findDisappearedNumbers = function (nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    let num = Math.abs(nums[i]);
    let index = num - 1;
    nums[index] = Math.abs(nums[index]) * -1;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) result.push(i + 1);
  }
  return result;
};

// alternative solution using Map():

var findDisappearedNumbers = function (nums) {
  const result = [];
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], true);
  }
  for (let i = 1; i <= nums.length; i++) {
    if (!map.has(i)) result.push(i);
  }
  return result;
};

// alternative solution using Set():

var findDisappearedNumbers = function (nums) {
  const result = [];
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
  }
  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) result.push(i);
  }
  return result;
};

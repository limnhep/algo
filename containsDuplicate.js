/*
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

  Example 1:

Input: [1, 2, 3, 1]
Output: true
Example 2:

Input: [1, 2, 3, 4]
Output: false
Example 3:

Input: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
Output: true
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const set = new Set();
  let start = 0,
    end = nums.length - 1;
  while (start < Math.ceil(nums.length / 2)) {
    set.add(nums[start]);
    set.add(nums[end]);
    start++;
    end--;
  }
  return set.size !== nums.length;
};

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // expect true
console.log(containsDuplicate([1, 2, 3, 4])); // expect false;

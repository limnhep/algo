/**
 * @param {number[]} nums
 * @return {boolean}
 */

/*
    @param {number[]} nums
    @return {boolean}
    @strategy:
        => does time matter? if it doesn't, sort the array and compare the current element to the next element
        => does space matter? if it doesn't, create a new set add the elements to the set and compare the array's length to the set size
*/

var containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length; i++) {
    const prevNum = nums[i - 1];
    const currNum = nums[i];
    if (prevNum === currNum) return true;
  }
  return false;
};

/*
  time: O(n)
  space: O(n)
*/
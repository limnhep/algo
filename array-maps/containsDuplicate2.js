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
  const uniques = new Set();
  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    uniques.add(currNum);
  }
  return nums.length !== uniques.size ? true : false;
};

/*
  time: O(n)
  space: O(n)
*/
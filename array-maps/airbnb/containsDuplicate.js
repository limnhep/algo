/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.



Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true


Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */

/*
    i: an array of integers
    o: a boolean if any of the elements in nums appears twice
    ec: no symbol, no punctuation, only integer
    strategy:
        - create a set and traverse over each element inside the array
        - if the element is in the set
            - return true because it means that it appears twice
        - by default, return false
*/
var containsDuplicate = function (nums) {
  const set = new Set();
  for (let num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }
  return false;
};

// time: O(n)
// space: O(n)
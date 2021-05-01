/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?



Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1


Constraints:

1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */

/*
    i: an array of intergers
    o: an integer where the integer only appears once
    ec: no punctuation, no symbol, integer(s) only
    strategy:
        - create an object
        - traverse over each element
            - if it appears in the object, then set to +=1
            - otherwise, set it to 1
        - traverse over each string in the object
            - if the value of the property is 1
                - return the key in Number data type
*/
var singleNumber = function (nums) {
  const obj = {};
  for (let num of nums) {
    if (num in obj) {
      obj[num]++;
    } else {
      obj[num] = 1;
    }
  }
  for (let key in obj) {
    if (obj[key] === 1) return Number(key);
  }
};

// time: O(n)
// space: O(n)

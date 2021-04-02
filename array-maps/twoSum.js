/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.



Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]


Constraints:

2 <= nums.length <= 103
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/*
    input: an array of integers => [2,7,11,15], an integer target => 9
    output: an array of indices [0,1]
    strategy:
        - create an object to store each property (key:pair) => (potentialPair:index)
        - traverse over each element inside the array and find the potentialPair
            - if it exists, then return the array containing the current element index and the pair's index
    - It's guaranteed to have exactly one solution

*/
var twoSum = function (nums, target) {
  const obj = {};
  // [3,2,4], 6
  // {'3':0, '2':1}
  for (let i = 0; i < nums.length; i++) {
    let currEl = nums[i];
    let potentialPair = target - currEl;
    if (potentialPair in obj) {
      return [obj[potentialPair], i]; // => [1,2]
    } else {
      obj[currEl] = i;
    }
  }
};

// time: O(n), where n is the length of the elements inside the array
// space: O(n), where n is the length of the elements inside the array

/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.



Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23


Constraints:

1 <= nums.length <= 3 * 104
-105 <= nums[i] <= 105


Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

*/

/*
/**
 * @param {number[]} nums
 * @return {number}
 */
/*
    input: an array of integers (negative or positive), nums
    output: an integer, largest sum
    edge cases: no symbol, no punctuation, just number only
    strategy:
        - create two variables to store the local and global max
        - traverse over each element starting at position 1
        - keep track of the local and global max
        - return global max
*/
var maxSubArray = function (nums) {
  let localMax = nums[0];
  let globalMax = nums[0];
  for (let i = 1; i < nums.length; i++) {
    // [5,4,-1,7,8]
    // localMax = 23, globalMax = 23
    localMax = Math.max(nums[i], localMax + nums[i]);
    globalMax = Math.max(globalMax, localMax);
  }
  return globalMax;
};

// time: O(n), where n is the length of the array
// space: O(1)
* /


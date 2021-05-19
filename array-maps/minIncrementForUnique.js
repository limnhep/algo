/*

Given an array of integers nums, a move consists of choosing any nums[i], and incrementing it by 1.

Return the least number of moves to make every value in nums unique.



Example 1:

Input: nums = [1,2,2]
Output: 1
Explanation:  After 1 move, the array could be [1, 2, 3].
Example 2:

Input: nums = [3,2,1,2,1,7]
Output: 6
Explanation:  After 6 moves, the array could be [3, 4, 1, 2, 5, 7].
It can be shown with 5 or less moves that it is impossible for the array to have all unique values.


Note:

0 <= nums.length <= 40000
0 <= nums[i] < 40000

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function (nums) {
  nums.sort((a, b) => a - b); // [1,1,2,2,3,7]
  let leastMoves = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] >= nums[i]) {
      const incrementBy = nums[i - 1] - nums[i] + 1; // 1
      nums[i] += incrementBy; // 2
      // console.log('nums[i] => ',
      //            nums[i]);
      leastMoves += incrementBy; // 1
    }
  }
  // console.log('nums => ',
  //             nums);
  return leastMoves;
};

// time: O(nlogn)
// space: O(1)
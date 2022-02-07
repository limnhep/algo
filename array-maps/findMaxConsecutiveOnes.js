/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  if (nums.length === 1 && nums[0] === 1) return 1;
  let count = 0;
  let maxCount = 0;
  for (const num of nums) {
    if (num === 0) count = 0;
    if (num === 1) count += 1;
    maxCount = Math.max(maxCount, count);
  }
  return maxCount;
};

/*
  time: O(n)
  space: O(1)
*/
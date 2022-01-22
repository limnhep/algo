/**
 * @param {number[]} nums
 * @return {number}
 */

/*
    @param {number[]} nums
    @return {number}

    @strategy
        => find the pivotal point where nums on the right is less than the number on the left
*/
var findMin = function (nums) {
  if (nums.length === 1) return nums[0];
  let left = 0;
  let right = nums.length - 1;
  if (nums[right] > nums[0]) return nums[0]; // implies that the sorted array didn't rotate
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[right] > nums[mid]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return nums[left];
};

/*
  time: O(logn) // cut in halves
  space: O(1)
*/
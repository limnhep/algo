const search = (nums, target) = {
  for(let i = 0; i<nums.length; i++) { // brute force approach where nums is in chronological order and therefore, iterate over each element until we find nums[i]
    if (num[i] === target) return i; // if nums[i] exists, then return the current element
  }
return undefined; // otherwise, return undefined
}

// time: O(n)
// space: O(1)

// alternative solution:

var search = function (nums, target) {
  if (nums.indexOf(target) > -1) return nums.indexOf(target);
  return -1;
};

// alternative solution:

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // check to see if the left side is sorted
  // check to see if the right side is sorted
  // if they are sorted, check if the value is less than or equal to the target
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (nums[mid] === target) return mid;

    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] <= target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;

};



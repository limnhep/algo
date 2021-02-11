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


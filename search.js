const search = (nums, target) = {
  for(let i = 0; i<nums.length; i++) { // brute force approach where nums is in chronological order and therefore, iterate over each element until we find nums[i]
    if (num[i] === target) return i; // if nums[i] exists, then return the current element
  }
return undefined; // otherwise, return undefined
}
/*
    i: an array of nums;
    o: an array of nums with nums > 0 on the left side and 0s on the right side;
    e: none, assuming.
    strategy: swap the smallest with the largest as long as the number element isn't 0;
*/
var moveZeroes = function (nums) {
  let i = 0,
    j = 0;
  while (j < nums.length) {
    if (nums[j] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
    j++;
  }
  return nums;
};

// time: O(logn)
// space: O(1)

// alternative solution

var moveZeros = function (nums) {
  const nonZeroArr = nums.filter(val => val !=== 0);
  const zeroArrLength = nums.length - nonZeroArr.length;
  const zeroArr = new Array(zeroArrLength).fill(0);
  return [...nonZeroArr, ...zeroArr];
}

// time: O(n)
// space: O(n)
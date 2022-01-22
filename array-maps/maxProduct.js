/**
 * @param {number[]} nums
 * @return {number}
 */

/*
    @param {number[]} nums
    @return {number}
    @strategy
        => keep track of the product min
        => keep track of the product max
        => get the highest produt max

*/
var maxProduct = function (nums) {
  let prevMin = nums[0];
  let prevMax = nums[0];
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let currNum = nums[i];
    let currMin = Math.min(currNum, currNum * prevMin, currNum * prevMax);
    let currMax = Math.max(currNum, currNum * prevMin, currNum * prevMax);

    prevMin = currMin;
    prevMax = currMax;
    result = Math.max(result, currMax);
  }
  return result;
};

/*
  time: O(n)
  space: O(1)
*/
/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.



Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []


Constraints:

0 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const triplets = [];
  let target = 0;
  if (nums.length < 3) return triplets;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > target) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let start = i + 1,
      end = nums.length - 1;
    while (start < end) {
      let currSum = nums[i] + nums[start] + nums[end];
      if (currSum === target) {
        triplets.push([nums[i], nums[start], nums[end]]);
        while (nums[start] === nums[start + 1]) start++;
        while (nums[end] === nums[end - 1]) end--;
        start++;
        end--;
        continue;
      }
      if (currSum < target) {
        start++;
        continue;
      }
      if (currSum > target) {
        end--;
        continue;
      }
    }
  }
  return triplets;
};

// alternative solution

function suggestThreeProducts(itemPrices) {
  var res = []
  itemPrices.sort(function (a, b) { return a - b })
  for (var i = 0; i < itemPrices.length; i++) {
    if (itemPrices[i] > 200)
      break
    if (i == 0 || itemPrices[i - 1] != itemPrices[i])
      twoProducts(itemPrices, i, res)
  }
  return res
}

function twoProducts(itemPrices, i, res) {
  var seen = new Set()
  j = i + 1
  while (j < itemPrices.length) {
    var complement = 200 - itemPrices[i] - itemPrices[j]
    if (seen.has(complement)) {
      res.push([itemPrices[i], itemPrices[j], complement])
      while (j + 1 < itemPrices.length && itemPrices[j] == itemPrices[j + 1])
        j += 1
    }
    seen.add(itemPrices[j])
    j += 1
  }
}

var itemPrices = [100, 75, 150, 200, 50, 65, 40, 30, 15, 25, 60]
console.log(suggestThreeProducts(itemPrices))
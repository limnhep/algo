/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.



Example 1:


Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9


Constraints:

n == height.length
0 <= n <= 3 * 104
0 <= height[i] <= 105
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let totalWater = 0;
  for (let i = 0; i < height.length; i++) {
    let leftPointer = i;
    let rightPointer = i;
    let maxLeft = 0;
    let maxRight = 0;
    while (leftPointer >= 0) {
      maxLeft = Math.max(maxLeft, height[leftPointer]);
      leftPointer--;
    }
    while (rightPointer < height.length) {
      maxRight = Math.max(maxRight, height[rightPointer]);
      rightPointer++;
    }
    const currMin = Math.min(maxLeft, maxRight) - height[i];
    if (currMin >= 0) totalWater += currMin;
  }
  return totalWater;
};

// time: O(n^2)
// space: O(1)

// Alternative solution

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxLeft = 0;
  let maxRight = 0;
  let totalWater = 0;
  while (left < right) {
    if (height[left] <= height[right]) {
      if (height[left] >= maxLeft) {
        maxLeft = height[left];
      } else {
        totalWater += maxLeft - height[left];
      }
      left++;
    } else {
      if (height[right] >= maxRight) {
        maxRight = height[right];
      } else {
        totalWater += maxRight - height[right];
      }
      right--;
    }
  }
  return totalWater;
};

// time: O(n)
// space: O(1)
// Given an array of integers nums.

// A pair (i,j) is called good if nums[i] == nums[j] and i < j.

// Return the number of good pairs.



// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.
// Example 3:

// Input: nums = [1,2,3]
// Output: 0


// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

/*
    strategy: iterate over each num in nums; if num exists inside obj, then set counter to value of property, and also increase the value of the property by 1; otherwise, by default set it to 1; return counter;
*/
var numIdenticalPairs = function (nums) {
  const obj = {};
  let counter = 0;
  for (const num of nums) {
    if (obj[num]) {
      counter += obj[num];
      obj[num]++;
    } else {
      obj[num] = 1;
    }
  }
  return counter;
};

// time: O(logN)
// space: O(1)
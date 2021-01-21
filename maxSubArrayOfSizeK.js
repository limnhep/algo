// Given an array of positive numbers and a positive number 'k', find the maximum sum of any contiguous subarray of size 'k'

// In other words, find the max sum of the given window k as the window slides to the right

const maxSubArrayOfSizeK = (array, k) => {
  const resultArr = [];
  let sum = 0,
    startIndex = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i]; // traverse over each element inside the array
    if (i >= k - 1) { // push 'sum' to resultArr when i is equivalent to the window size, 'k'
      resultArr.push(sum);
      sum -= array[start]; // remove the first element after the sum is pushed
      start++; // increment start by one
    }
  }
  return resultArr.sort((a, b) => a - b)[resultArr.length - 1]; // find the max sum
}

// time: O(n + nlogn)
// space: O(n) based on the input array

// Alternative solution:

const maxSubArrayOfSizeK = (array, k) => {
  let windowSum = 0,
    maxSum = 0,
    start = 0;
  for (let i = 0; i < array.length; i++) {
    windowSum += array[i];
    if (i >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= array[start];
      start++;
    }
  }
  return maxSum;
}

// time: O(n)
// space: O(1)

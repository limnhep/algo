/*
  Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

  Example 1:

  Input: [2, 1, 5, 1, 3, 2], k=3
  Output: 9
  Explanation: Subarray with maximum sum is [5, 1, 3].
  Example 2:

  Input: [2, 3, 4, 1, 5], k=2
  Output: 7
  Explanation: Subarray with maximum sum is [3, 4].
*/

/*
  i: an array of positive integers
  o: an integer that denotes as the maximum sum of any contiguous subarray of size 'k'
  strategy:
    // iterate over each element
      // while the range >= k
        // find the max sum
          // subtract the sum from the left hand side
          // add the left hand size by one
    // return the max sum
*/

const maxSubArrayofSizeK = (arr, k) => {
  let max = 0;
  let left = 0;
  let right = 0;
  let sum = 0;
  for (right = 0; right < arr.length; right++) {
    sum += arr[right];
    while (right - left + 1 >= k) {
      max = Math.max(max, sum);
      sum -= arr[left];
      left++;
    }
  }
  return max;
}

// TIME: O(N) where n is the number of given input array
// SPACE: O(1)

const array = [2, 1, 5, 1, 3, 2];
const kSize = 3;
console.log('Expected 9: ' + maxSubArrayofSizeK(array, kSize)); // CHECK
const array1 = [2, 3, 4, 1, 5];
const kSize1 = 2;
console.log('Expected 7: ' + maxSubArrayofSizeK(array1, kSize1)); // CHECKj
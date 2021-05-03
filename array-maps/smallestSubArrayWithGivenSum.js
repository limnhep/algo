/*
  Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

  Example 1:

  Input: [2, 1, 5, 2, 3, 2], S=7
  Output: 2
  Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2].
  Example 2:

  Input: [2, 1, 5, 2, 8], S=7
  Output: 1
  Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].
  Example 3:

  Input: [3, 4, 1, 1, 6], S=8
  Output: 3
  Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1]
  or [1, 1, 6].
*/

/*
  i: an array of positive number only, and a given size k
  o: an integer that denotes as the smallest sum subarray of the given array
  strategy:
    // iterate over each element
      // while the sum is >= the size k
        // find the smallest sub range where range is right - left + 1
        // substract the sum from the left hand size
        // add left by one
    // return the min
*/

const smallestSubArrayWithGivenSum = (arr, k) => {
  let min = Infinity;
  let left = 0;
  let sum = 0;
  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    while (sum >= k) {
      min = Math.min(min, right - left + 1);
      sum -= arr[left];
      left++;
    }
  }
  return min;
}

const array = [2, 1, 5, 2, 8];
const sizeK = 7;
const result = smallestSubArrayWithGivenSum(array, sizeK);
console.log('Expected 1: ', result);

const array1 = [2, 1, 5, 2, 3, 2];
const sizeK1 = 7;
const result1 = smallestSubArrayWithGivenSum(array1, sizeK1);
console.log('Expected 2: ', result1);

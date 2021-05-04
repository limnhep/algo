/*
  Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.

  Example 1:

  Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
  Output: 6
  Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.
  Example 2:

  Input: Array=[0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], k=3
  Output: 9
  Explanation: Replace the '0' at index 6, 9, and 10 to have the longest contiguous subarray of 1s having length 9.
*/

const lengthOfLongestSubstring = (arr, k) => {
  let maxLen = 0;
  let left = 0;
  let maxOnes = 0;
  for (let right = 0; right < arr.length; right++) {
    if (arr[right] === 1) maxOnes += 1;
    while (right - left + 1 - maxOnes > k) {
      if (arr[left] === 1) maxOnes -= 1;
      left++;
    }
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}

// TIME: O(N)
// SPACE: O(1)

const exampleArr = [0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1];
const sizeK = 2;
const result = lengthOfLongestSubstring(exampleArr, sizeK);
console.log('Expected 6: ', result);
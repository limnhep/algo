/*
  Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter, find the length of the longest substring having the same letters after replacement.

  Example 1:

  Input: String="aabccbb", k=2
  Output: 5
  Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".
  Example 2:

  Input: String="abbcb", k=1
  Output: 4
  Explanation: Replace the 'c' with 'b' to have a longest repeating substring "bbbb".
  Example 3:

  Input: String="abccde", k=1
  Output: 3
  Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".
*/

const lengthOfLongestSubArray = (str, k) => {
  const frequencyMap = {};
  let left = 0;
  let maxLen = 0;
  let maxRepeatChar = 0;
  for (let right = 0; right < str.length; right++) {
    const rightChar = str[right];
    frequencyMap[rightChar] = (frequencyMap[rightChar] || 0) + 1;
    maxRepeatChar = Math.max(maxRepeatChar, frequencyMap[rightChar]);
    while (right - left + 1 - maxRepeatChar > k) {
      const leftChar = str[left];
      frequencyMap[leftChar]--;
      left++;
    }
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}

// TIME: O(N)
// SPACE: O(1), the fixed range is going to be 26 characters given that the input is lower case string only.

const exampleStr = 'aabccbb';
const kSize = 2;
const result = lengthOfLongestSubArray(exampleStr, kSize);
console.log('Expected 5: ' + result); // CHECK

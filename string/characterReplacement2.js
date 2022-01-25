/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

/*
    @param {string} s
    @param {number} k
    @return {number}
    @strategy
        - use two pointers technique and a hashMap to store each key value pair => key {character} and value {number}
        - if the substring substracted the most appeared characters exceeds k, then move left pointer otherwise keep on moving right pointer
        - get the max length
*/

var characterReplacement = function (s, k) {
  const sFrequencyHashMap = {};
  let left = 0;
  let right = 0;
  let maxFreq = 0;
  let maxLen = Number.NEGATIVE_INFINITY;
  for (right = 0; right < s.length; right++) {
    const rightChar = s[right];
    sFrequencyHashMap[rightChar] = (sFrequencyHashMap[rightChar] || 0) + 1;
    maxFreq = Math.max(maxFreq, sFrequencyHashMap[rightChar]);
    if (right - left + 1 - maxFreq > k) {
      const leftChar = s[left];
      sFrequencyHashMap[leftChar] = sFrequencyHashMap[leftChar] - 1;
      left++;
    }
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
};

/*
  time: O(n) where n is the number of characters in the given string
  space: O(n) where n is the number of key pair value stored in the given hash map
*/
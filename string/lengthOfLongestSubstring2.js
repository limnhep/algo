/**
 * @param {string} s
 * @return {number}
 */

/*
    @param {string} s
    @return {number}
    @strategy:
        - use two pointers technique and a hashmap to store each pair value (key value pair => key - character {character} and pair - index {number})
        - if found in the hashMap, retrieve its index
        - get the length of the max substring
*/

var lengthOfLongestSubstring = function (s) {
  const sHashMap = {};
  let left = 0;
  let right = 0;
  let maxLen = 0;
  for (right = 0; right < s.length; right++) {
    const rightChar = s[right];
    if (rightChar in sHashMap) {
      left = Math.max(left, sHashMap[rightChar] + 1);
    }
    sHashMap[rightChar] = right;
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
};

/*
  time: O(n) where n is the number of characters in the input string
  space: O(n) where n is the number of key-pair value in the hashMap
*/
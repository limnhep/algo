/*
  Given a string, find the length of the longest substring, which has no repeating characters.

  Example 1:

  Input: String="aabccbb"
  Output: 3
  Explanation: The longest substring without any repeating characters is "abc".
  Example 2:

  Input: String="abbbb"
  Output: 2
  Explanation: The longest substring without any repeating characters is "ab".
  Example 3:

  Input: String="abccde"
  Output: 3
  Explanation: Longest substrings without any repeating characters are "abc" & "cde".
*/

/*
  i: a string of characters
  o: an integer that denotes as the longest substring, distinct characters only
  strategy:
    - if the length of the string is less than or equal to one, then the result should be either zero or one
    - iterate over each character in the given string
      - if the character is seen inside the hashMap, then it indicates that it's no longer unique, and therefore, left hand-side pointer must be reset to the max of the left or the index position of the character + 1 because array is zero-based index
      - assign the property at the given string to the current position
      - save the maxLen between the maxLen and the new range
    - return the max range value
*/

const nonRepeatSubStr = (str) => {
  if (str.length <= 1) return str.length;
  const hashMap = {};
  let left = 0;
  let maxSubStrLen = 0;
  for (let right = 0; right < str.length; right++) {
    const rightChar = str[right];
    if (rightChar in hashMap) left = Math.max(left, hashMap[rightChar] + 1);
    hashMap[rightChar] = right;
    maxSubStrLen = Math.max(maxSubStrLen, right - left + 1);
  }
  return maxSubStrLen;
}

// TIME: O(N) where N is the number of characters in the given string
// SPACE: O(N) where N is the number of characters stored in the hashMap; however, if it's alpha characters a-z, then it should a fixed size of 26 characters. Hence, it will be O(1)

const string = 'aabccbb';
const result = nonRepeatSubStr(string);
console.log('Expect 3: ' + result);
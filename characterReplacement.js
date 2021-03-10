/*
Given a string s that consists of only uppercase English letters, you can perform at most k operations on that string.

In one operation, you can choose any character of the string and change it to any other uppercase English character.

Find the length of the longest sub-string containing all repeating letters you can get after performing the above operations.

Note:
Both the string's length and k will not exceed 104.

Example 1:

Input:
s = "ABAB", k = 2

Output:
4

Explanation:
Replace the two 'A's with two 'B's or vice versa.


Example 2:

Input:
s = "AABABBA", k = 1

Output:
4

Explanation:
Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let rightPointer = 0;
  let leftPointer = 0;
  let max = 0;
  const obj = {};
  while (rightPointer < s.length) {
    const char = s[rightPointer];
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
    if (obj[char] > max) {
      max = obj[char];
    }
    if ((rightPointer - leftPointer + 1 - max) > k) {
      obj[s[leftPointer]]--;
      leftPointer++;
    }
    rightPointer++;
  }
  return rightPointer - leftPointer;
};

// time: O(n)
// space: O(n)
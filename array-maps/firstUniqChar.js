/*
Given a string s, return the first non-repeating character in it and return its index. If it does not exist, return -1.



Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1


Constraints:

1 <= s.length <= 105
s consists of only lowercase English letters.

*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const obj = {};
  for (let i = 0; i < s.length; i++) {
    if (s[i] in obj) {
      obj[s[i]]++;
    } else {
      obj[s[i]] = 1;
    }
  }
  for (let str of s) {
    if (obj[str] === 1) return s.indexOf(str);
  }
  return -1;
};

// time: O(n)
// space: O(n)
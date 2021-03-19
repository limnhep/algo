/*
Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode"
return 2.


Note: You may assume the string contains only lowercase English letters.
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
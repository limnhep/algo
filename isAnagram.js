/*
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const obj = {};
  if (s.length !== t.length) return false;
  for (let str of s) {
    obj[str] = (obj[str] || 0) + 1;
  }
  for (let char of t) {
    if (!obj[char]) return false;
    obj[char]--;
  }
  return true;
};

// time: O(n);
// space: O(1);
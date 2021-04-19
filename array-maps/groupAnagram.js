/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.



Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]


Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lower-case English letters.
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const obj = {};
  const result = [];
  for (const str of strs) {
    const strArr = Array(26).fill(0);
    for (const char of str) {
      const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
      strArr[index] += 1;
    }
    const key = strArr;
    if (key in obj) {
      obj[key].push(str);
    } else {
      obj[key] = [str];
    }
  }
  for (const key in obj) {
    result.push(obj[key]);
  }
  return result;
};

// time: O(n x k), where n is the length of the array and k is the length of each string
// space: O(n x k)
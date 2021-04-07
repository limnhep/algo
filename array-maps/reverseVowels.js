/*
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.



Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"


Constraints:

1 <= s.length <= 3 * 105
s consist of printable ASCII characters.
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const stack = [];
  const result = [];
  const vowels = /[aeiou]/i;
  for (let str of s) {
    if (vowels.test(str)) stack.push(str);
  }
  for (let char of s) {
    if (vowels.test(char)) {
      result.push(stack.pop());
    } else {
      result.push(char);
    }
  }
  return result.join('');
};

// time: O(n)
// space: O(n)
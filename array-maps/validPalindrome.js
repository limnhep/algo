/*
Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

Example 1:
Input: "aba"
Output: True
Example 2:
Input: "abca"
Output: True
Explanation: You could delete the character 'c'.
Note:
The string will only contain lowercase characters a-z. The maximum length of the string is 50000.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let j = s.length - 1;
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] !== s[j]) {
      return isPalindrome(removeOneChar(s, i)) || isPalindrome(removeOneChar(s, j));
    }
    j--;
  }
  return true;
};

var isPalindrome = function (s) {
  return s.split('').reverse().join('') === s;
}

var removeOneChar = function (s, index) {
  return s.substr(0, index) + s.substr(index + 1);
}

// time: O(n)
// space: O(1)


// alternative soution to isPalindrome

var isPalindrome = function (s) {
  let j = s.length - 1;
  for (let i = 0; i <= Math.floor(s.length / 2); i++) {
    if (s[i] !== s[j]) return false;
    j--;
  }
  return true;
}
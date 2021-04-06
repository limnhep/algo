/*
Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.



Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.


Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const rmSpecialChars = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
  let j = rmSpecialChars.length - 1;
  for (let i = 0; i <= Math.floor(rmSpecialChars.length / 2); i++) {
    if (rmSpecialChars[i] !== rmSpecialChars[j]) return false;
    j--;
  }
  return true;
};

// time: O(n)
// space: O(1)
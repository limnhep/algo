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

const isPalindrome = (string) => {
  let left = 0,
    right = string.length - 1;
  while (left < right) {
    if (string[left] !== string[right]) return false;
    left++;
    right--;
  }
  return true;
}

// with edge cases:

var isPalindrome = function (s) {
  const rmExcess = s.replace(/[^a-z0-9$]/gi, '');
  const reverseS = rmExcess.split('').reverse().join('');
  return reverseS.toLowerCase() === rmExcess.toLowerCase();
};

// time: O(n)
// space: O(n) -> is used to filter non-alphanumeric characters
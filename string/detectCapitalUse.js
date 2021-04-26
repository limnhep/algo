/*
We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Given a string word, return true if the usage of capitals in it is right.



Example 1:

Input: word = "USA"
Output: true
Example 2:

Input: word = "FlaG"
Output: false


Constraints:

1 <= word.length <= 100
word consists of lowercase and uppercase English letters.
*/

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  if (word === word.toLowerCase()) return true;
  if (word === word.toUpperCase()) return true;
  if (word[0] === word[0].toUpperCase() && word.slice(1) === word.slice(1).toLowerCase()) return true;
  return false;
};

// time: O(n)
// space: O(n) if in a situation where slice is involved because you're making a copy of the entire array excluding the first element

// test case

const input = 'USA';
const output = true;

const test = detectCapitalUse(input);
console.log('Expected the output to be: true ', test); // CHECK
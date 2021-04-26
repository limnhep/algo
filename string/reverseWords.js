/*
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.



Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Example 2:

Input: s = "God Ding"
Output: "doG gniD"


Constraints:

1 <= s.length <= 5 * 104
s contains printable ASCII characters.
s does not contain any leading or trailing spaces.
There is at least one word in s.
All the words in s are separated by a single space.
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const result = [];
  s.split(' ').forEach(word => result.push(word.split('').reverse().join('')));
  return result.join(' ');
};

// time: O(n)
// space: O(n)

// test case

const input = "Let's take LeetCode contest";
const output = "s'teL ekat edoCteeL tsetnoc";

const test = reverseWords(input);
console.log('Expected the output to be: "s\'teL ekat edoCteeL tsetnoc" ', test); // CHECK
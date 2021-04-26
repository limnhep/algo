/*
Write a function that reverses a string. The input string is given as an array of characters s.



Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]


Constraints:

1 <= s.length <= 105
s[i] is a printable ascii character.


Follow up: Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

/*
    first approach: swap the last element with the first element and continue to do until we reach the middle of the array
*/
var reverseString = function (s) {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]];
  }
  return s;
};

// time: O(n)
// space: O(1)

// test case

const input = ["h", "e", "l", "l", "o"];
const output = ["o", "l", "l", "e", "h"];

const test = reverseString(input);
console.log('Expected the output to be: ["o", "l", "l", "e", "h"] ', test); // CHECK
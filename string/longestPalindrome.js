/*
	@param {string} s
	@return {string}
	@strategy:
		- brute force approach: use double loop to get combination of every character, and check if the combination is a palindrome, get the longest one
			- time: O(n^3) space: O(n^2)
		- expand mid approach: traverse over each element and expand from the middle, for palindrome to be valid, it can be either in odd or even length as long as its forward character and backward character are the same.
			- time: O(n^2) space: O(n)
	- solve this problem using expand mid approach:
		- always check w/ the contraint and see the number of characters you're working with
		- check to see if the length of the string is less than 2 because it is then return the string since a character is a valid palindrome
		- check to see if the length is empty, if it is, then return an empty string
		- create an empty variable to store the longest substring
		- traverse over each index
			- find odd and even palindrome
				- odd expands where left and right index are the same
				- even expands where left is the next index and right is the initial index provided
				- create a helper function to see if the characters are the same starting from the middle and expand outward
					- note that the helper function will return a substring (in Java, it's okay to use the native .substring() method; however, in JavaScript, make sure to .slice method because .substr is no longer mantained and .substring acts different in some cases although initially .slice and .substring seem to have common characteristics like include the start and exclude the end index. Also, it's best practice to .slice() since it's returned a new string and not modify the original string)
				- the helper function essentially check if the characters expanding from the middle index are same (for the palindrome to be valid)
				- if the length of the odd substring is greater than the current longestSubstr, then reassign the longestSubstr to odd
				- otherwise, check if the longest of the even substring is greater than the current longestSubstr, then reassign the longestSubstr to even
				- return the longestSubstr

Time Complexity Analysis:
	Time: O(n^2) where n is the number of characters in the input string
	Space: O(n) where n is the number of characters in the substring
*/

var longestPalindrome = function (s) {
  if (s.length < 2) return s;
  if (s === null) return "";
  let longestSubstr = "";
  for (let i = 0; i < s.length; i++) {
    let odd = expandMid(s, i, i);
    let even = expandMid(s, i + 1, i);
    if (odd.length > longestSubstr.length) {
      longestSubstr = odd;
    }
    if (even.length > longestSubstr.length) {
      longestSubstr = even;
    }
  }
  return longestSubstr;
};

const expandMid = function (s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return s.slice(left + 1, right);
}

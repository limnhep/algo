/**
 * @param {string} s
 * @return {boolean}
 */

/*
    @param {string} s
    @return {boolean}
    @strategy
        - remove non-alphanumeric characters from the input string
        - use while to test to see if the left pointer and right pointer are the same -> should match until the middle
            - if they are not the same for any reason, return false
        - by default return true
*/

var isPalindrome = function (s) {
  const regex = /[^a-zA-Z0-9]/ig;
  const modifiedS = s.replaceAll(regex, "").split(" ").join("").toLowerCase();
  let left = 0;
  let right = modifiedS.length - 1;
  while (left < right) {
    if (modifiedS[left] !== modifiedS[right]) return false;
    left++;
    right--;
  }
  return true;
};

/*
  time: O(n)
  space: O(1)
*/
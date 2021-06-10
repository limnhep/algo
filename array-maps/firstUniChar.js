/*
  Given a string s, return the first non-repeating character in it and return its index. If it does not exist, return -1.



  Example 1:

  Input: s = "leetcode"
  Output: 0
  Example 2:

  Input: s = "loveleetcode"
  Output: 2
  Example 3:

  Input: s = "aabb"
  Output: -1


  Constraints:

  1 <= s.length <= 105
  s consists of only lowercase English letters.
*/

/**
 * @param {string} s
 * @return {number}
 */

/*
    i: a string of characters
    o: the first non-repeating character's index position
    ec: assumes that there is none, no weird edge cases
    strategy:
        approach 1:
            - create a variable hashMap to store each character and its frequency
            - traverse over each letter inside the string
                - add its character and its frequency
            - traverse over the hashMap
                - if its frequency is 1 because that represents the non-repeating character
                - return its index position
            - by default, return -1
*/

const firstUniqChar = function (s) {
  const frequencyHashMap = {};
  for (let i = 0; i < s.length; i++) {
    frequencyHashMap[s[i]] = (frequencyHashMap[s[i]] + 1 || 1);
  }
  for (let j = 0; j < s.length; j++) {
    if (frequencyHashMap[s[j]] === 1) return j;
  }
  return -1;
}

/*
  time and space complexity analysis:
      - time: O(n) where n is the length of the string
      - space: O(n) where n is the number of characters in the hashMap
*/
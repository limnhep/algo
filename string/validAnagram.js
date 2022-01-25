/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/*
    @param {string} s
    @param {string} t
    @return {boolean}
    @strategy
        - if s !== t or s > t and s < t then return false
        - create a hashMap to store key-pair value => key {character} and value {number} of frequency of each character
        - traverse over s and t at the same time; howver add 1 if character in s appears and subtract 1 if character in t appears
        - the value of the object is 0 then it implies that it's a valid anagram
*/
var isAnagram = function (s, t) {
  if (s.length !== t.length || s.length > t.length || s.length < t.length) return false;
  const charFrequencyHashMap = {};
  for (let i = 0; i < s.length && i < t.length; i++) {
    const sChar = s[i];
    const tChar = t[i];
    charFrequencyHashMap[sChar] = (charFrequencyHashMap[sChar] || 0) + 1;
    charFrequencyHashMap[tChar] = (charFrequencyHashMap[tChar] || 0) - 1;
  }
  return Object.values(charFrequencyHashMap).filter(el => el !== 0).length === 0;
};

/*
  time: O(n) where n is the number of characters in the given string
  space: O(n) where n is the number of characters in the hashMap
*/
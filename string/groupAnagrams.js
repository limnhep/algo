/**
 * @param {string[]} strs
 * @return {string[][]}
 */

/*
    @param {string[]} strs
    @return {string[][]}
    @strategy
        - create a hashMap to store key-value pairs where key {string} and value {string[]}
        - create a results {string[]} to add groupAnagram(s)
        - traverse over each string of strs {string[]}
            - create an array of 26 0s to store indices
        - if the same 26 indices are found, then it indicates that it's an anagram, push that finding to the results {string[][]}
*/

var groupAnagrams = function (strs) {
  const results = [];
  const anagramsHashMap = {};
  for (const str of strs) {
    const strIndices = Array(26).fill(0);
    for (const char of str) {
      const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
      strIndices[index] += 1;
    }
    if (strIndices in anagramsHashMap) {
      anagramsHashMap[strIndices].push(str);
    } else {
      anagramsHashMap[strIndices] = [str];
    }
  }
  for (const anagrams of Object.keys(anagramsHashMap)) {
    results.push(anagramsHashMap[anagrams]);
  }
  return results;
};

/*
  time: O(nxm) where n is the number of elements in the given array where m is the number of character in the given string
  space: O(nxm)
*/

/*
  Alternative Option:
*/

var groupAnagrams = function (strs) {
  const anagramsHashMap = {};
  for (const str of strs) {
    const charArr = str.split("").sort();
    const strValues = charArr.join("");
    if (strValues in anagramsHashMap) {
      anagramsHashMap[strValues].push(str);
    } else {
      anagramsHashMap[strValues] = [str];
    }
  }
  return Object.values(anagramsHashMap);
};

/*
  time: O(nlogn)
  space: O(n)
*/
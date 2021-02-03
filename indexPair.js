// Given a text string and words(a list of strings), return all index pairs[i, j] so that the substring text[i]...text[j] is in the list of words.



//   Example 1:

// Input: text = "thestoryofleetcodeandme", words = ["story", "fleet", "leetcode"]
// Output: [[3, 7], [9, 13], [10, 17]]
// Example 2:

// Input: text = "ababa", words = ["aba", "ab"]
// Output: [[0, 1], [0, 2], [2, 3], [2, 4]]
// Explanation:
// Notice that matches can overlap, see "aba" is found in [0, 2] and[2, 4].


//   Note:

// All strings contains only lowercase English letters.
//   It's guaranteed that all strings in words are different.
// 1 <= text.length <= 100
// 1 <= words.length <= 20
// 1 <= words[i].length <= 50
// Return the pairs[i, j] in sorted order(i.e.sort them by their first coordinate in case of ties sort them by their second coordinate).
/**
 * @param {string} text
 * @param {string[]} words
 * @return {number[][]}
 */

/*
    decomposition: identify the sub-pair index in 'words'
    pattern: each word in 'words' starts at i and ends at word.length - 1
    data abstraction: a string and a list of string
    algorithm:
        1. loop over each char in text
        2. loop over each word in words
        3. see if each copy of the text starting the index to word.length matches each word in the array
            3a. if it does, push that to the array
        4. return the result
*/
var indexPairs = function (text, words) {
  const result = [];
  const sortedWords = words.sort((a, b) => a.length - b.length); // arrange from the smallest to the largest
  for (let i = 0; i < text.length; i++) {
    sortedWords.forEach(word => {
      if (text.slice(i, i + word.length) === word) result.push([i, i + word.length - 1]);
    })
  }
  return result;
};

// time: O(n ^ 2)
// space: O(n)




/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const reverseWords = [];
  const stringArray = s.split(" ");
  for (const word of stringArray) {
    const reverseWord = word.split("").reverse().join("");
    reverseWords.push(reverseWord);
  }
  return reverseWords.join(" ");
};

/*
  time: O(n)
  space: O(1)
*/
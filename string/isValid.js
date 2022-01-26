/**
 * @param {string} s
 * @return {boolean}
 */

/*
    @param {string}
    @return {boolean}
    @strategy
        - create a hashMap to store close and open brackets
        - create a stack to store each character
        - traverse over each character
            - if character is not in the matchedHashMap, then push it to the stack
            - if it is, it implies that it is one of the close brackets, pop the stack to see if it matches the brackets
                - if it doesn't match, it implies that it's invalid, thus false
        - if the stack is empty, then true
*/

var isValid = function (s) {
  const matchBrackets = {
    ")": "(",
    "}": "{",
    "]": "["
  }
  const stack = [];
  for (const char of s) {
    if (!(char in matchBrackets)) {
      stack.push(char);
    }
    if (char in matchBrackets) {
      const openBracket = stack.pop();
      if (openBracket !== matchBrackets[char]) return false;
    }
  }
  return stack.length === 0;
};

/*
  time: O(n) where n is the number of characters in the given string
  space: O(1)
*/
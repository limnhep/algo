
/*
    i: a string of characters;
    o: a boolean that deters if the input str has the same number of bracket types and in the correct order;
    e: none, assuming;
    strategy:
    1. create a placeholder for stack, openBrackets, closeBrackets, and an object that has a key/pair value of both close and open brackets;
    2. if the current element contains openBrackets, push it to the stack; else if the current element contains closeBrackets, pop it from the stack, and if the character that gets popped doesn't match the value of the key, then return false;
    3. return !stack.length;
*/
var isValid = function (s) {
  const stack = [],
    openBrackets = '{[(',
    closeBrackets = '}])',
    matches = {
      ')': '(',
      ']': '[',
      '}': '{'
    };
  for (let char of s) {
    if (openBrackets.includes(char)) {
      stack.push(char);
    } else if (closeBrackets.includes(char)) {
      const lastChar = stack.pop();
      if (matches[char] !== lastChar) return false;
    }
  }
  return !stack.length;
};

// time: O(n)
// space: O(1)
const isBalanced = (str) => {
  const stack = [];
  const open = '({[';
  const close = ')}]';
  const matches = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (open.includes(char)) {
      stack.push(char);
    } else if (close.includes(char)) {
      const lastChar = stack.pop();
      if (matches[char] !== lastChar) {
        return false;
      }
    }
  }
  return !stack.length; // if 1 => true, 0 => false; !0 => true; !anything other number then it's false
}

// time: O(n)
// space: O(n)

//Alternative Solution

function isBalanced1(str) {
  const stack = [];
  const closingParen = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
      stack.push(str[i]);
    } else {
      let lastValue = stack.pop();
      if (str[i] !== closingParen[lastValue]) return false;
    }
  }
  return !stack.length;
}

// time: O(n)
// space: O(n)
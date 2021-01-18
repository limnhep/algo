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
  return !stack.length; // if 1 => true, 0 => false
}
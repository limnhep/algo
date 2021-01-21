function isUnique(str) {
  let chars = str.split('').sort();
  for (let i = 1; i < str.length; i++) {
    if (char[i] !== char[i - 1]) return false;
  }
  return true;
}

// ALTERNATIVE SOLUTION:

function isUnique(str) {
  let chars = {};
  for (let i = 0; i < str.length; i++) {
    const currEl = str[i];
    if (chars[currEl]) return false;
    chars[currEl] = true;
  }
  return true;
}

// ALTERNATIVE SOLUTION USING new Set()

function isUnique(str) {
  return new Set(str).size === str.length;
}
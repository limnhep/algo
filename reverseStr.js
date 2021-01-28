// reverse with one-liner

var reverseString = function (s) {
  return s.reverse();
};

// time: O(n)
// space: O(1)

// alternative solution: swap

var reverseString = function (s) {
  let initialInd = 0,
    lastInd = s.length - 1;
  while (initialInd <= lastInd) {
    const temp = s[initialInd];
    s[initialInd] = s[lastInd];
    s[lastInd] = temp;
    initialInd++;
    lastInd--;
  }
};

// time: O(n)
// space: O(n)

var reverseString = function (s) {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]];
  }
};

// time: O(n)
// space: O(1)
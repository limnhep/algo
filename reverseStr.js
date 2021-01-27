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
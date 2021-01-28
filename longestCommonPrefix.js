/*
    i: given an input of an array of strs
    o: find the longest common prefix
    strategy:
        1. first sort the array to find the longest string within the array
        2. iterate over the longest string among other strings
            2a. if the character between the first element versus other elements are differed, then break
            2b. otherwise, append to str
        3. return the str
*/
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';
  strs.sort();
  let str = '',
    firstEl = strs[0],
    lastEl = strs[strs.length - 1];
  for (let i = 0; i < firstEl.length; i++) {
    if (firstEl[i] !== lastEl[i]) {
      break;
    }
    str += firstEl[i];
  }
  return str;
};

// time: O(n)
// space: O(1)
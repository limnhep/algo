/**
 * @param {string} s
 * @return {number}
 */
/*
    @param {string} s
    @return {number}
    @strategy:
        - expand and count from the middle
        - return the counts for both even and odd combinations
*/

var countSubstrings = function (s) {
  let evenCounts = 0;
  let oddCounts = 0;
  for (let i = 0; i < s.length; i++) {
    oddCounts += expandMid(s, i, i);
    evenCounts += expandMid(s, i, i + 1);
  }
  return oddCounts + evenCounts;
};

const expandMid = function (s, left, right) {
  let counts = 0;
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
    counts++;
  }
  return counts;
}

/*
  time: O(n^2)
  space: O(1)
*/
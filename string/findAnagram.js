/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const resultIndices = [];
  const charFrequency = {};
  let left = 0;
  let right = 0;
  let matched = 0;
  for (const char of p.split("")) {
    charFrequency[char] = (charFrequency[char] || 0) + 1;
  }
  for (right = 0; right < s.length; right++) {
    let rightChar = s[right];
    if (rightChar in charFrequency) {
      charFrequency[rightChar]--;
      if (charFrequency[rightChar] === 0) matched++;
    }
    if (matched === Object.keys(charFrequency).length) resultIndices.push(left);
    if (right >= p.length - 1) {
      let leftChar = s[left];
      left++;
      if (leftChar in charFrequency) {
        if (charFrequency[leftChar] === 0) matched--;
        charFrequency[leftChar]++;
      }
    }
  }
  return resultIndices;
};

/*
  time: O(n)
  space: O(n)
*/
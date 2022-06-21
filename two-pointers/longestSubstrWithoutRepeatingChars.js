(function main() {

  const longestSubstrWithoutRepeatingCharsFunc = (str) => {
    const charFrequencyHashMap = {};
    let left = 0;
    let right = 0;
    let maxWindow = 0;
    for (right = 0; right < str.length; right++) {
      const rightChar = str[right];
      if (rightChar in charFrequencyHashMap) {
        left = Math.max(left, charFrequencyHashMap[rightChar] + 1);
      };
      charFrequencyHashMap[rightChar] = right;
      maxWindow = Math.max(maxWindow, right - left + 1);
    };
    return maxWindow;
  };

  const sampleStr = "abccabcabcc"
  const longestSubstrWithoutRepeatingCharsResult = longestSubstrWithoutRepeatingCharsFunc(sampleStr);
  console.log(longestSubstrWithoutRepeatingCharsResult); // 3

  /*
    time: O(n)
    space: O(1)
  */
})();

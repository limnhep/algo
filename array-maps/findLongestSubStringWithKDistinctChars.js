(function main() {
  const findLongestSubStringWithKDistinctChars = (str, k) => {
    const charFrequencyCounts = {};
    let left = 0;
    let right = 0;
    let maxStrLen = Number.NEGATIVE_INFINITY;
    for (right = 0; right < str.length; right++) {
      const rightChar = str[right];
      charFrequencyCounts[rightChar] = (charFrequencyCounts[rightChar] || 0) + 1;
      if (Object.keys(charFrequencyCounts).length > k) {
        const leftChar = str[left];
        charFrequencyCounts[leftChar] = charFrequencyCounts[leftChar] - 1;
        if (charFrequencyCounts[leftChar] === 0) delete charFrequencyCounts[leftChar];
        left++;
      }
      maxStrLen = Math.max(maxStrLen, right - left + 1);
    }
    return maxStrLen;
  }
  const inputStr = "araaci";
  const inputK = 2;
  console.log(findLongestSubStringWithKDistinctChars(inputStr, inputK)); // 4
})();

/*
  Time: O(n)
  Space: O(k) where k is the number of characters in the HashMap;
*/
(function main() {
  const longestSubstrinKDistinct = (str, k) => {
    const charsFrequency = {};
    let left = 0;
    let right = 0;
    let maxCharsLen = Number.NEGATIVE_INFINITY;
    let maxLen = Number.NEGATIVE_INFINITY;
    for (right = 0; right < str.length; right++) {
      const rightChar = str[right];
      charsFrequency[rightChar] = (charsFrequency[rightChar] || 0) + 1;
      maxCharsLen = Math.max(maxCharsLen, charsFrequency[rightChar]);
      if (right - left + 1 - maxCharsLen > k) {
        const leftChar = str[left];
        charsFrequency[leftChar] = charsFrequency[leftChar] - 1;
        if (charsFrequency[leftChar] === 0) delete charsFrequency[leftChar];
        left++;
      }
      maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
  }
  const inputStr = "aabccbb";
  const inputStr1 = "abbcb";
  const inputStr2 = "abccde";
  const inputK = 2;
  const inputK1 = 1;
  const inputK2 = 1;
  const result = longestSubstrinKDistinct(inputStr, inputK);
  const result1 = longestSubstrinKDistinct(inputStr1, inputK1);
  const result2 = longestSubstrinKDistinct(inputStr2, inputK2);
  console.log(result, result1, result2);
})();
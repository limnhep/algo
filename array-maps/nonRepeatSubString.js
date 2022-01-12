(function main() {
  const nonRepeatSubString = (str) => {
    const charsFrequency = {};
    let left = 0;
    let right = 0;
    let nonRepeat = Number.NEGATIVE_INFINITY;
    for (right = 0; right < str.length; right++) {
      const rightChar = str[right];
      charsFrequency[rightChar] = (charsFrequency[rightChar] || 0) + 1;
      if (charsFrequency[rightChar] > 1) {
        const leftChar = str[left];
        charsFrequency[leftChar] = charsFrequency[leftChar] - 1;
        if (charsFrequency[leftChar] === 0) delete charsFrequency[leftChar];
        left++;
      }
      nonRepeat = Math.max(nonRepeat, right - left + 1);
    }
    return nonRepeat;
  }
  const inputStr = "aabccbb";
  const inputStr1 = "abbbb";
  const resultNonRepeatSubString = nonRepeatSubString(inputStr);
  const resultNonRepeatSubString1 = nonRepeatSubString(inputStr1);
  console.log(resultNonRepeatSubString); // 3
  console.log(resultNonRepeatSubString1); // 2
})();
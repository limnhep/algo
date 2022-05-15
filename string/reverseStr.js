(function main() {

  /*
      note: Only accounted for lower case characters
  */
  const ASSERT = require("assert");
  const reverseStrBruteForce = (str) => {
    let resultReverseStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      const currChar = str[i];
      resultReverseStr += currChar;
    };
    return resultReverseStr;

    /*
    time: O(n^2)
    space: O(n) due to appended characters
    */
  };

  const reverseStrOptimized = (str) => {
    const reverseStrArr = str.split("");
    let start = 0;
    let end = reverseStrArr.length - 1;
    while (start <= end) {
      const temp = reverseStrArr[start];
      reverseStrArr[start] = reverseStrArr[end];
      reverseStrArr[end] = temp;
      start++;
      end--;
    };
    return reverseStrArr.join("");

    /*
    time: O(n)
    space: O(1)
    */
  };

  try {
    const sampleInputStr = "str";
    const expectedResultReverseStr = "rts";
    const resultReverseStrBruteForce = reverseStrBruteForce(sampleInputStr);
    ASSERT.equal(resultReverseStrBruteForce, expectedResultReverseStr);
    console.log(`PASSED => ${resultReverseStrBruteForce === expectedResultReverseStr}`);
  } catch (ERR) {
    console.log(`FAILED => Error Message: ${ERR}`);
  };

  try {
    const sampleInputStr = "hello";
    const expectedResultReverseStr = "olleh";
    const resultReverseStrOptimized = reverseStrOptimized(sampleInputStr);
    ASSERT.equal(resultReverseStrOptimized, expectedResultReverseStr);
    console.log(`PASSED => ${resultReverseStrOptimized === expectedResultReverseStr}`);
  } catch (ERR) {
    console.log(`FAILED => Error Message: ${ERR}`);
  };
})();
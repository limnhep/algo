(function main() {
  /*
      @param {numbers[] - sortedArr}
      @param {number - target}
      @return {numbers[] - result}
      @requirement
          => given a sorted array and a target number
      @strategy
          => use left pointer (opposite) method
              => find two numbers that add up to target number
              => since array is sorted,
                  => if twoSum greater than target, it implies that move left pointer; otherwise, move the right pointer
      @time
          => O(n/2) => O(n)
          => O(1)
  */
  const assert = require("assert");
  const twoSumFunc = (sortedArr, target) => {
    let resultTwoSum = [-1, -1];
    let left = 0;
    let right = sortedArr.length - 1;
    while (right > left) {
      const currSum = sortedArr[left] + sortedArr[right];
      if (currSum === target) {
        resultTwoSum = [left, right];
        return resultTwoSum
      };
      if (currSum > target) {
        right--;
      } else {
        left++;
      };
    };
    return resultTwoSum;
  };

  try {
    const sampleSortedArr = [2, 3, 4, 5, 8, 11, 18];
    const sampleTarget = 8;
    const resultTwoSumFunc = twoSumFunc(sampleSortedArr, sampleTarget);
    assert.deepEqual(resultTwoSumFunc, [1, 3]);
    console.log("PASSED");
  } catch (ERR) {
    console.log("FAILED: ", ERR);
  };
})();

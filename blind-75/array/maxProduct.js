(function main() {
  /*
      Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

A subarray is a contiguous subsequence of the array.



Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.

  */

  const maxProduct = (numbers) => {
    let globalMin = numbers[0];
    let globalMax = numbers[0];
    let productMax = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      const currNum = numbers[i];
      let currMin = Math.min(currNum, currNum * globalMin, currNum * globalMax);
      let currMax = Math.max(currNum, currNum * globalMin, currNum * globalMax);

      globalMin = currMin;
      globalMax = currMax;
      productMax = Math.max(productMax, globalMax);
    }
    return productMax;
  }

  const inputNumbers = [2, 3, -2, 4];
  const result = maxProduct(inputNumbers);
  console.log(`Expected 6 as the result => ${result}`);
})();
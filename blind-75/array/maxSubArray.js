(function main() {
  /*
      Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

  A subarray is a contiguous part of an array.

  Example 1:

  Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
  Output: 6
  Explanation: [4,-1,2,1] has the largest sum = 6.
  Example 2:

  Input: nums = [1]
  Output: 1
  Example 3:

  Input: nums = [5,4,-1,7,8]
  Output: 23

  @param {number[]}
  @return number
  @requirement
      => find maxSubArray of the input array => numbers
  @strategy
      => keep track of the current element
          => get the currMax, which is the currNum and currMax + currNum
          => globalMax is the currMax or the current storage

  time and space complexity analysis:
    => time: O(n)
    => space: O(1)
  */

  const maxSubArray = (numbers) => {
    let currMax = numbers[0];
    let globalMax = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      const currNum = numbers[i];
      currMax = Math.max(currNum, currMax + currNum);
      globalMax = Math.max(currMax, globalMax);
    }
    return globalMax;
  }

  const inputNums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  const inputNums1 = [5, 4, -1, 7, 8];
  const result = maxSubArray(inputNums);
  const result1 = maxSubArray(inputNums1);
  console.log(`=> Expected 6 => ${result}`);
  console.log(`=> Expected 23 => ${result1}`);
})();
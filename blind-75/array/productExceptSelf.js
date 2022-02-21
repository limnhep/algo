/*
        Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

    The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

    You must write an algorithm that runs in O(n) time and without using the division operation.



    Example 1:

    Input: nums = [1,2,3,4]
    Output: [24,12,8,6]
    Example 2:

    Input: nums = [-1,1,0,-3,3]
    Output: [0,0,9,0,0]

    @param {number[]}
    @result {number[]}
    @requirement
        => get the product of number[] such that each element contains the product of all the elements except for itself
    @strategy
        => must solve in one run
            => have two pointers, left and right, both are starting at 1
            => have a result array to store the result elements
                => start the computation from right to left and then left to right
        => time and space complexity analysis for this algorithm is:
            => O(n)
            => O(n) for storing each element
*/

(function main() {
  const productExceptSelf = (numbers) => {
    const result = [];
    let left = 1;
    let right = 1;
    for (let i = numbers.length - 1; i >= 0; i--) {
      result[i] = right;
      right *= numbers[i];
    }
    for (let j = 0; j < numbers.length; j++) {
      result[j] *= left;
      left *= numbers[j];
    }
    return result;
  }

  const inputNums = [1, 2, 3, 4];
  const inputNums1 = [-1, 1, 0, -3, 3];
  const result = productExceptSelf(inputNums);
  const result1 = productExceptSelf(inputNums1);
  console.log(`=> Expected [24, 12, 8, 6] => ${result}`);
  console.log(`=> Expected [0, 0, 9, 0, 0] => ${result1}`);
})();
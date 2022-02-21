/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

/*
    @param {number[], target}
    @return {number}
    @requirement
        => given an array of integers (whole), get two indices that add up to the target
    @strategy
        => does space matter?
            => if it does, then hashMap might not be a good idea
                => one strategy is to sort, and then use binary sort from smallest to largest number
                => after, one can use binary search to get two numbers that add up to the target
        => does time matter?
            => if it does, then hashMap would be a good idea, store key-value pair => key being the number and the value being its index
*/

(function main() {
  const twoSum = (numbers, target) => {
    const numFrequencyHashMap = {};
    for (let i = 0; i < numbers.length; i++) {
      const number = numbers[i];
      const complimentaryPair = target - number;
      if (complimentaryPair in numFrequencyHashMap) {
        return [i, numFrequencyHashMap[complimentaryPair]];
      }
      numFrequencyHashMap[number] = i;
    }
  }
  const inputNums = [1, 2, 3,];
  const target = 3;
  console.log(twoSum(inputNums, target)); // [1, 0]
})();
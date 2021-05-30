/*
  Given an array of integers and a value, determine if there are any two integers in the array whose sum is equal to the given value. Return true if the sum exists and return false if it does not.
*/

let findSumOfTwo = function (intArr, targetSum) {
  const potentialPairHashSet = new Set();
  for (const num of intArr) {
    const potentialPair = targetSum - num;
    if (potentialPairHashSet.has(potentialPair)) return true;
    potentialPairHashSet.add(num);
  }
  return false;
};

/*
  TIME: O(N)
  SPACE: O(N)
*/

const testArr = [2, 1, 8, 4, 7, 3];
const targetArr = [3, 1, 2, 4];
for (const target of targetArr) {
  const output = findSumOfTwo(testArr, target);
  console.log(`findSumOfTwo(testArr,${target}) => ${output}`);
}
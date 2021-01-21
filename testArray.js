/**
 * Interview Questions: map() vs filter() vs reduce()
 *
 * Q: What do map(), filter() and reduce() do?
 */

// Both map() and filter() are returning a new array;

const nums = [1, 2, 3];

const multiplyByTwo = (arr) => arr.map((value) => value * 2);

console.log(multiplyByTwo(nums));

const assertArrays = (testArr, resultArr) => {
  if (testArr.length !== resultArr.length) return false;
  if (Array.isArray(testArr) && Array.isArray(resultArr)) {
    for (let i = 0; i < testArr.length; i++) {
      if (testArr[i] !== resultArr[i]) return false;
    }
    return true;
  }
}
const resultOfNums = multiplyByTwo(nums);
const resultExpected = [2, 4, 6];
const resultCheck = assertArrays(resultOfNums, resultExpected);
console.log('Assert Arrays: ', resultCheck);




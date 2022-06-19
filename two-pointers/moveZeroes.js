(function main() {

  /*
      @param {numbers[]}
      @return {numbers[]}
      @requirement
          => move zeroes to one-direction in-place
          @strategy
              => use two pointer technique
              => traverse over each element
                  => if fast is not zero, then swap, number @fast with number @slow
                  => move slow when fast is not zero
              => return the input array: numbers[]
  */

  /*
      time and space complexity analysis:
          time: O(n)
          space: O(1) => modified array in-place
  */

  const assert = require("assert");

  const moveZeroes = (numbers) => {
    let slow = 0;
    for (let fast = 0; fast < numbers.length; fast++) {
      if (numbers[fast] !== 0) {
        let zero = numbers[slow];
        numbers[slow] = numbers[fast];
        numbers[fast] = zero;
        slow++;
      };
    };
    return numbers;
  };

  const lists = ["1 0 2 0 0 7", "3 1 0 1 3 8 9"];
  for (const list of lists) {
    const strListToNumList = list.split(" ").map(str => parseInt(str, 10));
    const resultMoveZeroes = moveZeroes(strListToNumList);
    console.log("resultMoveZeroes: ", resultMoveZeroes);
  };

  try {
    const sampleStr = "1 0 2 0 0 7";
    const strToNumList = sampleStr.split(" ").map(str => parseInt(str, 10));
    const resultMoveZeroes = moveZeroes(strToNumList);
    assert.deepEqual(resultMoveZeroes, [1, 2, 7, 0, 0, 0]);
    console.log("PASSED");
  } catch (ERR) {
    console.log("FAILED");
    console.log("EXPECTED: [ 1, 2, 7, 0, 0, 0 ]");
    console.log(ERR);
  };
})();

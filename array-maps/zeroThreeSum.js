/*
  @param: an array of intergers
  @return: an array of arrays
*/


(function main() {
  const zeroThreeSum = (arr) => {
    arr.sort((a, b) => a - b);
    const triplets = [];
    for (let i = 0; i < arr.length; i++) {
      if (i > 0 && arr[i] === arr[i - 1]) continue;
      searchPair(arr, -arr[i], i + 1, triplets);
    }
    return triplets;
  }
  const searchPair = (array, targetSum, left, triplets) => {
    let right = array.length - 1;
    while (left < right) {
      let sum = array[left] + array[right];
      if (sum === targetSum) {
        triplets.push([-sum, array[left], array[right]]);
        left++;
        right--;
      }
      while (left < right && array[left] === array[left - 1]) left++;
      while (left < right && array[right] === array[right + 1]) right--;
      if (sum > targetSum) right--;
      if (sum < targetSum) left++;
    }
  }
  const inputArr = [-2, -1, 0, 10, 1, 2, 3];
  const result = zeroThreeSum(inputArr);
  console.log(result);
})();

/*
  time: O(nlogn)
  space: O(1)
*/
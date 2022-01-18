(function main() {
  const bubbleSort = (array) => {
    for (let i = array.length - 1; i >= 0; i--) {
      for (let j = 1; j < i; j++) {
        if (array[j - 1] > array[j]) {
          let temp = array[j - 1];
          array[j - 1] = array[j];
          array[j] = temp;
        }
      }
    }
    return array;
  }

  const zeroThreeSum = (array) => {
    const triplets = [];
    bubbleSort(array);
    for (let i = 0; i < array.length; i++) {
      if (i > 0 && array[i - 1] === array[i]) continue;
      searchPairs(array, -array[i], i + 1, triplets);
    }
    return triplets;
  }

  const searchPairs = (array, targetSum, left, triplets) => {
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

  const inputArray = [0, -1, 1, 2, 3, 4, 5, -2, -2];
  const resultThreeZeroSum = zeroThreeSum(inputArray);
  console.log(resultThreeZeroSum);
})();

/*
  Time: O(n^2) due to bubble sort
  Space: O(n)
*/
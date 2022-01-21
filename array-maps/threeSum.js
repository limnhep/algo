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

  const threeSum = (array, target) => {
    bubbleSort(array);
    const triplets = [];
    for (let i = 0; i < array.length; i++) {
      if (i > 0 && array[i - 1] === array[i]) continue;
      searchPairs(array, target, i + 1, triplets, array[i]);
    }
    return triplets;
  }

  const searchPairs = (array, targetSum, left, triplets, currentNum) => {
    let right = array.length - 1;
    while (left < right) {
      let sum = array[left] + array[right] + currentNum;
      if (sum === targetSum) {
        triplets.push([currentNum, array[left], array[right]]);
        left++;
        right--;
        while (left < right && array[left] === array[left + 1]) left++;
        while (left < right && array[right] === array[right - 1]) right--;
      }
      if (sum > targetSum) right--;
      if (sum < targetSum) left++;
    }
  }

  const inputArr = [-1, 0, 1, -2, 0, 2, 1, 2, 3, 4];
  const resultThreeSum = threeSum(inputArr, 0);
  console.log(resultThreeSum);
})();

// time: O(n^2)
// space: O(n)
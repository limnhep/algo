(function main() {
  const sortedSquaredArr = (arr) => {
    const sortedArr = [];
    let left = 0;
    let right = arr.length - 1;
    let highestIndex = arr.length - 1;
    while (left <= right) {
      let leftSquare = arr[left] * arr[left];
      let rightSquare = arr[right] * arr[right];
      if (leftSquare > rightSquare) {
        sortedArr[highestIndex] = leftSquare;
        left++;
      } else {
        sortedArr[highestIndex] = rightSquare;
        right--;
      }
      highestIndex--;
    }
    return sortedArr;
  }
  const inputArr = [-2, -1, 0, 2, 3];
  const resultArr = sortedSquaredArr(inputArr);
  console.log(resultArr);
})();

/*
  time: O(n) where n is the number of elements in the input array
  space: O(n) where n is the number of elements in the result sorted array
*/
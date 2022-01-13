(function main() {
  const removeDuplicates = (arr) => {
    let nonDuplicateIndex = 1;
    let index = 1;
    while (index < arr.length) {
      if (arr[nonDuplicateIndex - 1] !== arr[index]) {
        arr[nonDuplicateIndex] = arr[index];
        nonDuplicateIndex++;
      }
      index++;
    }
    arr.splice(nonDuplicateIndex, arr.length - nonDuplicateIndex);
    return arr;
  }
  const inputArr = [2, 3, 3, 3, 6, 9, 9];
  const result = removeDuplicates(inputArr);
  console.log(result);
})();
/*
  time: O(n)
  space: O(1)
*/
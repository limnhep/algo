const searchSortedArr = (sortedNums) => {
  let min = 0;
  let max = sortedNums.length - 1;
  while (min <= max) {
    let mid = min + Math.floor((max - min) / 2);
    if (sortedNums[mid] === target) return mid;
    if (target > sortedNums[mid]) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  return -1;
}

// time: O(log(n))
// space: O(1)

// shorten alterantive:

function search(numbers, target) {
  let min = 0;
  let max = numbers.length - 1;
  while (min <= max) {
    let mid = min + Math.floor((max - min) / 2);
    if (numbers[mid] === target) {
      return mid;
    }
    if (target < numbers[mid]) max = mid - 1;
    else min = mid + 1
  }
  return - 1;
}

// time: O(log(n))
// space: O(1)

// mergeArrays using spread operator and .sort() method

const mergeArrays = (arr1, arr2) => {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

// time: O(nlogn)
// space: O(1)



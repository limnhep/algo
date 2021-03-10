// Given an array of elements, consisted of integers, remove all even elements;

function removeEven(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

// time: O(n) where n is the number of elements in the given input array
// space: O(n) where each is stored in the result array
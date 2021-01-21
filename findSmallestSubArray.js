// Given an array of integer and a sum, find the minimum length that sums up to the given sum; if not found, return 0

// i: an array of integer and a sum
// o: length that denotes as the minimum number of elements that adds up to the given sum

const findSmallestSubArrayLength = (array, sum) {
  let total = 0,
    start = 0,
    minLength = Infinity;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
    while (sum >= total) {
      minLength = Math.min(minLength, i - start + 1);
      total -= array[start];
      start++;
    }
  }
  if (minLength === Infinity) return 0;
  return minLength;
}

// time: O(n)
// space: O(1)
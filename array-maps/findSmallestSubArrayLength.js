(function main() {
  const findSmallestSubArrayLength = (array, s) => {
    let right = 0;
    let left = 0;
    let sum = 0;
    let minLen = Number.POSITIVE_INFINITY;
    for (right = 0; right < array.length; right++) {
      sum += array[right];
      while (sum >= s) {
        minLen = Math.min(minLen, right - left + 1);
        sum -= array[left];
        left++;
      }
    }
    return minLen;
  }

  const arr = [2, 1, 5, 2, 8];
  const k = 7;
  console.log(findSmallestSubArrayWithGivenSum(arr, k)); // 1
})()

/*
  Time: O(n)
  Space: O(1)
*/
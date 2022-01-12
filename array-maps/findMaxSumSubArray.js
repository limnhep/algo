(function main() {
  const findMaxSumSubArray = (array, k) => {
    let maxSum = 0;
    let sum = 0;
    let left = 0;
    let right = 0;
    for (right = 0; right < array.length; right++) {
      sum += array[right];
      if (right >= k - 1) {
        maxSum = Math.max(sum, maxSum);
        sum -= array[left];
        left++;
      }
    }
    return maxSum;
  }

  const arr = [2, 1, 5, 1, 3, 2];
  const k = 3;
  console.log(findMaxSumSubArray(arr, k));
})()
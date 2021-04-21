/*
A mountain array is defined as an array that:

Has at least 3 elements.
Has an element with the largest value called the “peak”, at an index k. The array elements monotonically increase from the first element to A[k], and then monotonically decreases from A[k + 1] to the last element of the array. Thus creating a “mountain” of numbers.
Find the index of the peak element. Assume there are no duplicates.

Example #
Input: 0 1 2 3 2 1 0

Output: 3

Explanation: The largest element is 3 and its index is 3.
*/

function peak_of_mountain_array(arr) {
  let left = 0;
  let result = -1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[left] >= arr[i]) {
      result = left;
    } else {
      left++;
    }
  }
  return result;
}

// time: O(n)
// space: O(1)

// Alternative solution:

function peak_of_mountain_array(arr) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (mid === arr.length - 1 || arr[mid] >= arr[mid + 1]) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;
}

// time: O(logn)
// space: O(1)
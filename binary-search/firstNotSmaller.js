/*
Given an array of integers sorted in increasing order and a target, find the index of the first element in the array that is larger or equal to the target. Assume that it is guaranteed to find a satisfying number.

Example #
Input: arr = [1, 3, 3, 5, 8, 8, 10],target = 2

Output: 1

Explanation: the first element larger than 2 is 3, which has index 1.
*/

function first_not_smaller(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let boundaryIndex = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] >= target) {
      boundaryIndex = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return boundaryIndex;
}

// time: O(logn)
// space: O(1)
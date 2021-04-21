/*
Given a sorted array of integers and a target integer, find the first occurrence of the target and return its index. Return -1 if the target is not in the array.

Example #
Input:arr = [1, 3, 3, 3, 3, 6, 10, 10, 10, 100],target = 3

Output:1

Explanation: The first occurrence of 3 is at index 1.
*/

function find_first_occurrence(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let boundaryIndex = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
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
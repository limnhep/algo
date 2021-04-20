/*
An array of boolean values is divided into two sections: the left section consists of all false, and the right section consists of all true. Find the boundary of the right section, i.e. the index of the first true element. If there is no true element, return -1.

Example #
Input: arr = [false, false, true, true, true]

Output: 2

Explanation: first true's index is 2.
*/

function findBoundary(arr) {
  let left = 0;
  let right = arr.length - 1;
  let boundaryIndex = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === true) {
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
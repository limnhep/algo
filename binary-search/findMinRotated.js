/*
A sorted array was rotated at an unknown pivot. For example, [10, 20, 30, 40, 50] becomes [30, 40, 50, 10, 20]. Find the index of the minimum element in this array.

Example #
Input: [30, 40, 50, 10, 20]

Output: 3

Explanation: The smallest element is 10 and its index is 3

*/

function findMinRotated(n) {
  let left = 0;
  let right = n.length - 1;
  const lastEl = n[n.length - 1];
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (n[mid] <= lastEl) {
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
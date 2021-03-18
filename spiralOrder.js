/*
Given an m x n matrix, return all elements of the matrix in spiral order.



Example 1:


Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:


Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]


Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const result = [];
  if (matrix.length === 0) return result;
  let right1 = 0, right2 = matrix.length - 1;
  let corner1 = 0, corner2 = matrix[0].length - 1;
  while (right1 <= right2 && corner1 <= corner2) {
    for (let corner = corner1; corner <= corner2; corner++) {
      result.push(matrix[right1][corner]);
    }
    for (let right = right1 + 1; right <= right2; right++) {
      result.push(matrix[right][corner2]);
    }
    if (right1 < right2 && corner1 < corner2) {
      for (let corner = corner2 - 1; corner > corner1; corner--) result.push(matrix[right2][corner]);
      for (let right = right2; right > right1; right--) result.push(matrix[right][corner1]);
    }
    right1++;
    right2--;
    corner1++;
    corner2--;
  }
  return result;
};

// time: O(n)
// space: O(n)
/*
Given a 2D integer array matrix, return the transpose of matrix.

The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

Example 1:

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[1,4,7],[2,5,8],[3,6,9]]
Example 2:

Input: matrix = [[1,2,3],[4,5,6]]
Output: [[1,4],[2,5],[3,6]]


Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 1000
1 <= m * n <= 105
-109 <= matrix[i][j] <= 109
*/

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  const transposedMatrix = [];
  for (let i = 0; i < matrix[0].length; i++) {
    const tempMatrix = [];
    for (let j = 0; j < matrix.length; j++) {
      tempMatrix.push(matrix[j][i]);
    }
    transposedMatrix.push(tempMatrix);
  }
  return transposedMatrix;
};

// time: O(n^2)
// space: O(n)

// test case

const input = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const output = [[1, 4, 7], [2, 5, 8], [3, 6, 9]];

const test = transpose(input);
console.log('Expected the output to be: [[1, 4, 7], [2, 5, 8], [3, 6, 9]] ', test); // CHECK
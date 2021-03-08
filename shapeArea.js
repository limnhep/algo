/*
Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.



Example

For n = 2, the output should be
shapeArea(n) = 5;
For n = 3, the output should be
shapeArea(n) = 13.
Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

Guaranteed constraints:
1 ≤ n < 104.

[output] integer

The area of the n-interesting polygon.
*/

function shapeArea(n) {
  let result = [];
  if (n <= 1) return 1;
  result[0] = 1;
  result[1] = 5;
  for (let i = 3; i <= n; i++) {
    result[i - 1] = result[i - 2] + (4 * (i - 1));
  }
  return result[n - 1];
}

// time: O(n);
// space: O(n);

// alternative solution:

function shapeArea(n) {
  return n * n + ((n - 1) * (n - 1));
}

// time: O(1)
// space: O(1)
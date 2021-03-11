/*
In a row of trees, the i-th tree produces fruit with type tree[i].

You start at any tree of your choice, then repeatedly perform the following steps:

Add one piece of fruit from this tree to your baskets.  If you cannot, stop.
Move to the next tree to the right of the current tree.  If there is no tree to the right, stop.
Note that you do not have any choice after the initial choice of starting tree: you must perform step 1, then step 2, then back to step 1, then step 2, and so on until you stop.

You have two baskets, and each basket can carry any quantity of fruit, but you want each basket to only carry one type of fruit each.

What is the total amount of fruit you can collect with this procedure?



Example 1:

Input: [1,2,1]
Output: 3
Explanation: We can collect [1,2,1].
Example 2:

Input: [0,1,2,2]
Output: 3
Explanation: We can collect [1,2,2].
If we started at the first tree, we would only collect [0, 1].
Example 3:

Input: [1,2,3,2,2]
Output: 4
Explanation: We can collect [2,3,2,2].
If we started at the first tree, we would only collect [1, 2].
Example 4:

Input: [3,3,3,1,2,1,1,2,3,3,4]
Output: 5
Explanation: We can collect [1,2,1,1,2].
If we started at the first tree or the eighth tree, we would only collect 4 fruits.


Note:

1 <= tree.length <= 40000
0 <= tree[i] < tree.length
*/

// Find the largest subarray length with two distinct characters

/**
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function (tree) {
  const basket = new Map();
  let left = 0, right = 0, max = - Infinity;
  for (right = 0; right < tree.length; right++) {
    basket.set(tree[right], basket.get(tree[right]) + 1 || 1);
    while (basket.size > 2) {
      if (basket.get(tree[left]) === 1) {
        basket.delete(tree[left]);
      } else {
        basket.set(tree[left], basket.get(tree[left]) - 1);
      }
      left++;
    }
    max = Math.max(max, right - left + 1);
  }
  return max;
};

// time: O(n) where n is the element inside the given array
// space: O(n) where n is the number of properties stored in basket


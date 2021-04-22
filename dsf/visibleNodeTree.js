/*
In a binary tree, a node is considered “visible” if no node on the root-to-itself path has a greater value. The root is always “visible” since there are no other nodes between the root and itself. Given a binary tree, count the number of “visible” nodes.

Example #
Input:



Output: 3
*/

function visibleNodeTree(root) {
  return dfs(root, Number.NEGATIVE_INFINITY);
}

function dfs(root, max) {
  if (!root) return 0; // same as root === null
  let total = 0;
  if (root.val >= max) total++;
  total += dfs(root.left, Math.max(root.val, max));
  total += dfs(root.right, Math.max(root.val, max));
  return total;
}

// time: O(n)
// space: O(n) --  if the tree is not balanced
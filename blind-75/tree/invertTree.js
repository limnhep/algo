/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

/*
    @param {TreeNode} root
    @return {TreeNode}
    @strategy
        => DFS
            => if empty, return null
            => swap the left subtree with the right subtree
            => return the root
*/
var invertTree = function (root) {
  if (!root) return null;
  let temp = root.left;
  root.left = root.right;
  root.right = temp;
  invertTree(root.left);
  invertTree(root.right);
  return root;
};

/*
  time and space complexity:
      time: O(n) since each node is visited once
      space: O(n) since it's a recursion, n is the height of the tree
*/

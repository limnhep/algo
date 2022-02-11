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
 * @return {number[]}
 */

/*
    postorderTraversal => root, left, right subtree
    inorderTraversal => left, root, right substree
    postorderTraversal => left, right, root subtree
*/
var inorderTraversal = function (root) {
  const result = [];
  if (root === null) return result;
  return treeTraversal(root, result);
};

const treeTraversal = function (root, result) {
  if (root !== null) {
    treeTraversal(root.left, result);
    result.push(root.val);
    treeTraversal(root.right, result);
  }
  return result;
}

/*
  time and space complexity analysis:
      - time: O(n)
      - space: O(n)
*/
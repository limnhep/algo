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
    preorderTraversal => root, left, right
    inorderTraversal => left, root, right
    postordeTraversal => left, right, root
*/
var postorderTraversal = function (root) {
  const result = [];
  if (root === null) return result;
  return treeTraversal(root, result);
};

const treeTraversal = function (root, result) {
  if (root !== null) {
    treeTraversal(root.left, result);
    treeTraversal(root.right, result);
    result.push(root.val);
  }
  return result;
}

/*
  time and space complexity analysis:
      - time: O(n)
      - space: O(n)
*/
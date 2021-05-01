/*
Given the root of a binary tree, return the preorder traversal of its nodes' values.



Example 1:


Input: root = [1,null,2,3]
Output: [1,2,3]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]
Example 4:


Input: root = [1,2]
Output: [1,2]
Example 5:


Input: root = [1,null,2]
Output: [1,2]


Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100


Follow up: Recursive solution is trivial, could you do it iteratively?
*/

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
    preorderTraversal is starting from root, left subtree, and then right substree.
    i: [1, null, 2, 3]
    o: [1, 2, 3]
*/

var preorderTraversal = function (root, result = []) {
  if (!root) return result;
  if (root !== null) {
    result.push(root.val);
    preorderTraversal(root.left, result);
    preorderTraversal(root.right, result);
  }
  return result;
};
// time: O(n)
// space: O(1)
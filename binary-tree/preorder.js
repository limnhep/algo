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
    @param {TreeNode} rooot
    @return {number[]}
    @requirement
        - preoorder traversal is visiting root, left, and then right
            - two ways to approach this problem:
                - one: doing it recursively
                - two: doing it iteratively
                    => for recursive:
                        - check if the root is null
                            - if not, then use recursion to recurse over the left and then the right subtree
*/

// approach 1: recursive approach

/*
var preorderTraversal = function(root) {
    const result = [];
    if (root === null) return result;
    return treeTraversal(root, result);
};

const treeTraversal = function(root, result) {
    if (root !== null) {
        result.push(root.val);
        treeTraversal(root.left, result);
        treeTraversal(root.right, result);
    }
    return result;
}
*/

// approach 2: iterative approach

var preorderTraversal = function (root) {
  const result = [];
  if (root === null) return result;
  const stack = [root];
  while (stack.length > 0) {
    const currNode = stack.pop();
    result.push(currNode.val);
    if (currNode.right !== null) stack.push(currNode.right);
    if (currNode.left !== null) stack.push(currNode.left);
  }
  return result;
}

/*
  time and space complexity analysis:
      - time: O(n)
      - space: O(n)
*/
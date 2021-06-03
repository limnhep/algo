/*
  Given a binary tree, return its level order traversal. The input is the root node of the tree. The output should be a list of lists containing tree nodes at each level.
*/

function levelOrderTraversal(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length) {
    const length = queue.length;
    let count = 0;
    const currentLevel = [];
    while (count < length) {
      const currentNode = queue.shift();
      currentLevel.push(currentNode);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
      count++;
    }
    result.push(currentLevel);
  }
  return result;
}

// time: O(n)
// space: O(n)

// alternative solution

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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root === null) return [];
  const queue = [root];
  const levels = [];
  while (queue.length !== 0) {
    const level = [];
    let queueLen = queue.length;
    for (let i = 0; i < queueLen; i++) {
      let node = queue.shift(); // remove the zeroth index
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      level.push(node.val);
    }
    levels.push(level);
  }
  return levels;
};

// time: O(n)
// space: O(n)
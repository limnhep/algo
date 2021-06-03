/*
  Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first. You should populate the values of all nodes in each level from left to right in separate sub-arrays.
*/

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};

const reverseLevelOrderTraversal = function (root) {
  const result = [];
  const queue = [root];
  if (!root) return result;
  while (queue.length > 0) {
    const currentLevel = [];
    let length = queue.length;
    let count = 0;
    while (count < length) {
      const currentNode = queue.shift();
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
      currentLevel.push(currentNode.value);
      count++
    }
    result.unshift(currentLevel);
  }
  return result;
}

var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Reverse level order traversal: ${reverseLevelOrderTraversal(root)}`)

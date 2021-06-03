/*
  Given a binary tree and a node, find the level order successor of the given node in the tree. The level order successor is the node that appears right after the given node in the level order traversal.
*/

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const findSuccessor = function (root, key) {
  if (!root) return null;
  const queue = [root];
  while (queue.length > 0) {
    let sizeLevel = queue.length;
    let count = 0;
    while (count < sizeLevel) {
      const currentNode = queue.shift();
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
      if (currentNode.value === key) break;
      count++;
    }
  }
  if (queue.length > 0) return queue[queue.length - 1];
  return null;
};


let root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
result = findSuccessor(root, 12)
if (result != null)
  console.log(result.val)
result = findSuccessor(root, 9)
if (result != null)
  console.log(result.val)

  // time: O(N)
  // space: O(N)
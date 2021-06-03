/*
  Given a binary tree, return its level order traversal but in alternate left to right order.
  BFS
*/

function zigzag_traversal(root) {
  if (root === null) return [];
  const result = [];
  const queue = [root];
  let flag = true;
  while (queue.length > 0) {
    let length = queue.length;
    let count = 0;
    const currentLevel = [];
    while (count < length) {
      const currentNode = queue.shift();
      currentLevel.push(currentNode);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
      count++;
    }
    if (!flag) currentLevel.reverse();
    result.push(currentLevel);
    flag = !flag;
  }
  return result;
}

// time: O(N)
// space: O(N) where N is the height of the tree

// alternative solution:

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


const traverse = function (root) {
  const result = [];
  const queue = [root];
  let leftToRight = true;
  if (!root) return result;
  while (queue.length > 0) {
    const currentLevel = [];
    let length = queue.length;
    let count = 0;
    while (count < length) {
      const currentNode = queue.shift();
      currentLevel.push(currentNode.value);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
      count++;
    }
    if (!leftToRight) result.push(currentLevel.reverse());
    if (leftToRight) result.push(currentLevel);
    leftToRight = !leftToRight;
  }
  return result;
};


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
root.right.left.left = new TreeNode(20)
root.right.left.right = new TreeNode(17)
console.log(`Zigzag traversal: ${traverse(root)}`)

// time: O(N) where N is the number of Nodes in the tree
// space: O(N)
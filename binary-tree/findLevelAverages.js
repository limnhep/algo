/*
  Given a binary tree, populate an array to represent the averages of all of its levels.
*/

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const findLevelAverages = function (root) {
  const result = [];
  const queue = [root];
  if (!root) return result;
  while (queue.length > 0) {
    let levelSize = queue.length;
    let count = 0;
    let sum = 0;
    while (count < levelSize) {
      const currentNode = queue.shift();
      sum += currentNode.value;
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
      count++;
    }
    result.push(sum / levelSize);
  }
  return result;
};


let root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.left.right = new TreeNode(2)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)

console.log(`Level averages are: ${findLevelAverages(root)}`)

// time: O(N)
// space: O(N)
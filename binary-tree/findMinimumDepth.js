/*
  Find the minimum depth of a binary tree. The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.
*/

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


const findMinimumDepth = function (root) {
  if (!root) return 0;
  const queue = [root];
  let minimumDepth = 0;
  while (queue.length > 0) {
    let levelSize = queue.length;
    let count = 0;
    minimumDepth += 1;
    while (count < levelSize) {
      const currentNode = queue.shift();
      if (!currentNode.left && !currentNode.right) return minimumDepth;
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
      count++;
    }
  }
};



var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Tree Minimum Depth: ${findMinimumDepth(root)}`)
root.left.left = new TreeNode(9)
root.right.left.left = new TreeNode(11)
console.log(`Tree Minimum Depth: ${findMinimumDepth(root)}`)

// time: O(N)
// space: O(N)

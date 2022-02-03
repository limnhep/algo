(function main() {
  class TreeNode {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  const findMaxDepth = (root) => {
    if (root === null) return 0;
    const queue = [root];
    let maxDepth = 0;
    while (queue.length > 0) {
      const queueLen = queue.length;
      maxDepth += 1;
      for (let i = 0; i < queueLen; i++) {
        const currNode = queue.shift();
        if (currNode.left !== null) queue.push(currNode.left);
        if (currNode.right !== null) queue.push(currNode.right);
      }
    }
    return maxDepth;
  }
  const root = new TreeNode(12);
  root.left = new TreeNode(7);
  root.right = new TreeNode(1);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);
  const maxDepthLevelTreeTraversalResult = findMaxDepth(root);
  console.log(maxDepthLevelTreeTraversalResult);
}());

/*
  time: O(n)
  space: O(n)
*/
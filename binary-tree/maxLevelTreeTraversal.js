(function main() {
  class TreeNode {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  const maxLevelTreeTraversal = (root) => {
    const treeList = [];
    const queue = [root];
    if (root === null) return treeList;
    while (queue.length > 0) {
      const currLevel = [];
      let queueLen = queue.length;
      let currMax = 0;
      for (let i = 0; i < queueLen; i++) {
        const currNode = queue.shift();
        currMax = Math.max(currMax, currNode.value);
        if (currNode.left !== null) queue.push(currNode.left);
        if (currNode.right !== null) queue.push(currNode.right);
      }
      treeList.push(currMax);
    }
    return treeList;
  }
  const root = new TreeNode(12)
  root.left = new TreeNode(7)
  root.right = new TreeNode(1)
  root.left.left = new TreeNode(9)
  root.left.right = new TreeNode(2)
  root.right.left = new TreeNode(10)
  root.right.right = new TreeNode(5)
  const maxLevelTreeTraversalResult = maxLevelTreeTraversal(root);
  console.log(maxLevelTreeTraversalResult);
}());

/*
  time: O(n)
  space: O(n)
*/
(function main() {
  class TreeNode {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  const avgLevelTreeTraversal = (root) => {
    const treeList = [];
    const queue = [root];
    if (root === null) return treeList;
    while (queue.length > 0) {
      const queueLen = queue.length;
      let sum = 0;
      for (let i = 0; i < queueLen; i++) {
        const currNode = queue.shift();
        sum += currNode.value;
        if (currNode.left !== null) queue.push(currNode.left);
        if (currNode.right !== null) queue.push(currNode.right);
      }
      treeList.push(sum / queueLen);
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
  const avgLevelTreeTraversalResult = avgLevelTreeTraversal(root);
  console.log(avgLevelTreeTraversalResult);
}());

/*
  time: O(n)
  space: O(n)
*/
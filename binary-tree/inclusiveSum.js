(function main() {
  class TreeNode {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  const treeTraversal = (root) => {
    const treeList = [];
    const queue = [root];
    if (root === null) return treeList;
    while (queue.length > 0) {
      let queueLen = queue.length;
      let nodeCount = 0;
      while (nodeCount < queueLen) {
        const currNode = queue.shift();
        treeList.push(currNode.value);
        if (currNode.left !== null) queue.push(currNode.left);
        if (currNode.right !== null) queue.push(currNode.right);
        nodeCount++;
      }
    }
    return treeList;
  }
  const binaryTreeInclusiveSum = (root, leftBoundary, rightBoundary) => {
    const traversalList = treeTraversal(root);
    const resultList = [];

    for (let i = 0; i < traversalList.length; i++) {
      const currNum = traversalList[i];
      if (currNum >= leftBoundary && currNum <= rightBoundary) resultList.push(currNum);
    }
    return resultList.reduce((acc, el) => acc += el, 0);
  }
  const treeNode = new TreeNode(0);
  treeNode.left = new TreeNode(1);
  treeNode.right = new TreeNode(2);
  const inclusiveSum = binaryTreeInclusiveSum(treeNode, 1, 2);
  console.log(inclusiveSum) // Expected: 3;
}());

/*
  time: O(n)
  space: O(n)
*/
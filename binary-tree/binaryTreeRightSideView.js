/*
  Given a binary tree, return the rightmost node of each level.
  BFS
*/

function binaryTreeRightSideView(root) {
  if (root === null) return [];
  const queue = [root];
  const result = [];
  while (queue.length > 0) {
    let length = queue.length;
    let count = 0;
    result.push(queue[0]);
    while (count < length) {
      const currentNode = queue.shift();
      if (currentNode.right) queue.push(currentNode.right);
      if (currentNode.left) queue.push(currentNode.left);
      count++;
    }
  }
  return result;
}

// time: O(n) where n is the node that visited at most once
// space: O(n) where n is the height of the binary tree

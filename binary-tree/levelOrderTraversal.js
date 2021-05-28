/*
  Given a binary tree, return its level order traversal. The input is the root node of the tree. The output should be a list of lists containing tree nodes at each level.
*/

function level_order_traversal(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length) {
    const length = queue.length;
    let count = 0;
    const currentLevel = [];
    while (count < length) {
      const currentNode = queue.shift();
      currentLevel.push(currentNode);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
      count++;
    }
    result.push(currentLevel);
  }
  return result;
}

// time: O(n)
// space: O(n)
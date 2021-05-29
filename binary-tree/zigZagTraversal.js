/*
  Given a binary tree, return its level order traversal but in alternate left to right order.
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
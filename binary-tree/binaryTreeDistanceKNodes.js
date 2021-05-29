/*
  Given a binary tree, a target node, and an integer K, find all nodes whose depth (level) is K away from the target node’s depth. The order of returned nodes does not matter.
*/

function binaryTreeDistanceKNodes(root, target, k) {
  const result = [];
  if (!root) return result;
  if (root) {
    const targetLevel = findTarget(root, target);
    bfs(root, targetLevel, k, result);
  }
  return result;
}

function findTarget(root, target) {
  let level = 0;
  const queue = [root];
  while (queue.length > 0) {
    let length = queue.length;
    let count = 0;
    level++;
    while (count < length) {
      const currentNode = queue.shift();
      if (currentNode === target) return level;
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
      count++;
    }
  }
  return level;
}

function bfs(root, targetLevel, k, result) {
  let level = 0;
  const queue = [root];
  while (queue.length > 0) {
    let length = queue.length;
    let count = 0;
    level++;
    while (count < length) {
      const currentNode = queue.shift();
      if (Math.abs(targetLevel - level) === k) result.push(currentNode);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
      count++;
    }
  }
}

// time: O(N)
// space: O(N)
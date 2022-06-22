/*
    @param {TreeNode} root
    @return {number}
    @strategy
        => DFS Approach
            => if root is empty, then return 0;
            => get the max of the left or right subtree
            => return 1 + max of the left or right subtree
*/

var maxDepth = function (root) {
  if (root === null) return 0;
  const max = Math.max(maxDepth(root.left), maxDepth(root.right));
  return 1 + max;
};

/*
  time: O(n)
  space: O(n) where is n is the height of the tree (the tree could be unbalanced).
*/

/*
  BFS Approach
*/

var maxDepth = function (root) {
  if (!root) return 0;
  const queue = [root];
  let level = 0;
  while (queue.length > 0) {
    const queueLength = queue.length;
    level++;
    for (let i = 0; i < queueLength; i++) {
      const currNode = queue.shift();
      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);
    };
  };
  return level;
};

/*
  time: O(n)
  space: O(n) where is n is the height of the tree (the tree could be unbalanced).
*/

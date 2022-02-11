/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

/*
    @param {TreeNode} root
    @return {number [][]}
    @requirement:
        - traverse level by level => bfs
            - utilize a queue to keep track of the root node
                - traverse and get the value of the root, then left, and then right subtree
                - after each level, push the array to the result array
                - return the result array
*/
var levelOrder = function (root) {
  const resultArr = [];
  if (root === null) return resultArr;
  const queue = [root];
  while (queue.length > 0) {
    const levelArr = [];
    const queueLen = queue.length;
    for (let i = 0; i < queueLen; i++) {
      const currNode = queue.shift();
      levelArr.push(currNode.val);
      if (currNode.left !== null) queue.push(currNode.left);
      if (currNode.right !== null) queue.push(currNode.right);
    }
    resultArr.push(levelArr);
  }
  return resultArr;
};


/*
  time and space complexity analysis:
      - time: O(n) - traverse through each node once
      - space: O(n)
*/
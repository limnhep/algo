
/*
    @param {TreeNode} p
    @param {TreeNode} q
    @return {boolean}
    @strategy
        => DFS Approach
            => Base Cases:
                => True: p and q are empty
                => False: p and q, one of them is not empty, or the value of left and right node is not the same
                => Check both left and right subtree
*/

var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

/*
  time: O(n)
  space: O(n) where n is the height of the tree
*/

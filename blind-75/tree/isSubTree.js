/*
    @param {TreeNode} root
    @param {TreeNode} subRoot
    @return {boolean}
    @strategy
        => DFS Approach
            => isSameTree to determine if subtree is the subtree of root
            => True: the subtree have the same value and structurally the same as the root
*/
var isSubtree = function (root, subRoot) {
  if (!subRoot) return true;
  if (!root) return false;
  if (isSameTree(root, subRoot)) return true;
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

const isSameTree = function (r, s) {
  if (!r && !s) return true;
  if (r && s && r.val === s.val) {
    return isSameTree(r.left, s.left) && isSameTree(r.right, s.right);
  };
  return false;
};

/*
  time: O(n) => n * m => root * subTree
  space: O(n) where n is the height of the tree
*/

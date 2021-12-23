/*
  @requirement: Check to see if the input Binary Tree has a path that sums up to the given input sum
  @param: TreeNode: root, int: sum
  @return: boolean
*/

class TreeNode {
  int value;
  TreeNode left;
  TreeNode right;

  TreeNode(int value) {
    this.value = value;
  }
}

class BinaryTreePathSum {
  public static boolean hasPathSum(TreeNode root, int sum) {
    if (root == null)
      return false;
    if (root.value == sum && root.left == null && root.right == null)
      return true;
    return (hasPathSum(root.left, sum - root.value) || hasPathSum(root.right, sum - root.value));
  }

  public static void main(String[] args) {
    TreeNode root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);
    boolean testTreePathSum = BinaryTreePathSum.hasPathSum(root, 7);
    System.out.println("Expect the result to be true: " + testTreePathSum); // Expect "true"
  }
}

/*
 * Complexity Analysis:
 *
 * Time: O(n) Space: O(n)
 */
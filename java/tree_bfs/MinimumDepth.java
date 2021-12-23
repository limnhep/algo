/*
 * @requirement:
 *
 * @param:
 *
 * @return:
 *
 */

import java.util.LinkedList;
import java.util.Queue;

import javax.naming.NoInitialContextException;

class TreeNode {
  int value;
  TreeNode left;
  TreeNode right;

  TreeNode(int value) {
    this.value = value;
  }
}

class MinimumDepth {
  public static int minimumDepth(TreeNode tree) {
    int minimumLevel = 0;
    if (tree == null)
      return minimumLevel;
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(tree);
    while (!queue.isEmpty()) {
      int levelSize = queue.size();
      minimumLevel++;
      for (int i = 0; i < levelSize; i++) {
        TreeNode currentNode = queue.poll();
        if (currentNode.left == null && currentNode.right == null)
          return minimumLevel;
        if (currentNode.left != null)
          queue.offer(currentNode.left);
        if (currentNode.right != null)
          queue.offer(currentNode.right);
      }
    }
    return minimumLevel;
  }

  public static void main(String[] args) {
    TreeNode root = new TreeNode(12);
    root.left = new TreeNode(7);
    root.right = new TreeNode(1);
    root.right.left = new TreeNode(10);
    root.right.right = new TreeNode(5);
    System.out.println("Tree Minimum Depth: " + MinimumDepth.minimumDepth(root));
    root.left.left = new TreeNode(9);
    root.right.left.left = new TreeNode(11);
    System.out.println("Tree Minimum Depth: " + MinimumDepth.minimumDepth(root));
  }
}
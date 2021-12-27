/*
 * @requirement:
 *
 * @param:
 *
 * @return:
 */

import java.util.LinkedList;
import java.util.Queue;

class TreeNode {
  int value;
  TreeNode left;
  TreeNode right;

  TreeNode(int value) {
    this.value = value;
  }
}

class LevelOrderSuccessor {
  public static TreeNode levelOrderSuccessor(TreeNode tree, int targetValue) {
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(tree);
    while (!queue.isEmpty()) {
      TreeNode currentNode = queue.poll();
      if (currentNode.left != null)
        queue.offer(currentNode.left);
      if (currentNode.right != null)
        queue.offer(currentNode.right);
      if (currentNode.value == targetValue)
        break;
    }
    return queue.peek();
  }

  public static void main(String[] args) {
    TreeNode root = new TreeNode(12);
    root.left = new TreeNode(7);
    root.right = new TreeNode(1);
    root.left.left = new TreeNode(9);
    root.right.left = new TreeNode(10);
    root.right.right = new TreeNode(5);
    TreeNode result = LevelOrderSuccessor.levelOrderSuccessor(root, 12);
    if (result != null)
      System.out.println(result.value + " ");
    result = LevelOrderSuccessor.levelOrderSuccessor(root, 9);
    if (result != null)
      System.out.println(result.value + " ");
  }
}
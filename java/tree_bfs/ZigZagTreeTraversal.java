/*
 * @requirement: Given a Binary Tree, get nodes from the current leve left to
 * right and then right to left and so on
 *
 * @param: TreeNode: tree
 *
 * @return: List<List<Integer>>
 */

import java.util.List;
import java.util.LinkedList;
import java.util.Queue;
import java.util.ArrayList;

class TreeNode {
  int value;
  TreeNode left;
  TreeNode right;

  TreeNode(int value) {
    this.value = value;
  }
}

class ZigZagTreeTraversal {

  public static List<List<Integer>> zigZagTreeTraversal(TreeNode tree) {
    List<List<Integer>> resultNodes = new ArrayList<List<Integer>>();
    if (tree == null)
      return resultNodes;
    Queue<TreeNode> queue = new LinkedList<>();
    boolean leftToRight = true;
    queue.offer(tree);
    while (!queue.isEmpty()) {
      int levelSize = queue.size();
      List<Integer> currentLevel = new LinkedList<>();
      for (int i = 0; i < levelSize; i++) {
        TreeNode currentNode = queue.poll();
        if (leftToRight) {
          currentLevel.add(currentNode.value);
        } else {
          currentLevel.add(0, currentNode.value);
        }
        if (currentNode.left != null)
          queue.offer(currentNode.left);
        if (currentNode.right != null)
          queue.offer(currentNode.right);
      }
      resultNodes.add(currentLevel);
      leftToRight = !leftToRight;
    }
    return resultNodes;
  }

  public static void main(String[] args) {
    // TreeNode tree = new TreeNode(1);
    // tree.left = new TreeNode(2);
    // tree.right = new TreeNode(3);
    // tree.left.left = new TreeNode(4);
    // tree.left.right = new TreeNode(5);
    // tree.right.left = new TreeNode(6);
    // tree.right.right = new TreeNode(7);
    // tree.left.left.left = new TreeNode(8);
    // tree.right.right.right = new TreeNode(9);
    TreeNode root = new TreeNode(22);
    root.left = new TreeNode(7);
    root.right = new TreeNode(1);
    root.left.left = new TreeNode(9);
    root.right.left = new TreeNode(10);
    root.right.right = new TreeNode(5);
    root.right.left.left = new TreeNode(20);
    root.right.left.right = new TreeNode(17);
    List<List<Integer>> result = ZigZagTreeTraversal.zigZagTreeTraversal(root);
    System.out.println(result); // [[22], [1, 7], [9, 10, 5], [17, 20]]
  }
}
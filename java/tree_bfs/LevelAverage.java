/*
  @requirement: Given a Binary Tree, find the average of all the TreeNodes at each level
  @param: TreeNode: root
  @return: List<Double>
*/

import java.util.List;
import java.util.Queue;
import java.util.ArrayList;
import java.util.LinkedList;

class TreeNode {
  int value;
  TreeNode left;
  TreeNode right;

  TreeNode(int value) {
    this.value = value;
  }
}

class LevelAverage {
  public static List<Double> levelAverage(TreeNode root) {
    List<Double> resultAverage = new ArrayList<>();
    if (root == null)
      return resultAverage;
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);
    while (!queue.isEmpty()) {
      int levelSize = queue.size();
      int sum = 0;
      for (int i = 0; i < levelSize; i++) {
        TreeNode currentNode = queue.poll();
        sum += currentNode.value;
        if (currentNode.left != null)
          queue.offer(currentNode.left);
        if (currentNode.right != null)
          queue.offer(currentNode.right);
      }
      resultAverage.add(((double) sum / levelSize));
    }
    return resultAverage;
  }

  public static void main(String[] args) {
    TreeNode root = new TreeNode(12);
    root.left = new TreeNode(7);
    root.right = new TreeNode(1);
    root.left.left = new TreeNode(9);
    root.left.right = new TreeNode(2);
    root.right.left = new TreeNode(10);
    root.right.right = new TreeNode(5);
    List<Double> result = LevelAverage.levelAverage(root);
    System.out.print("Level averages are: " + result); // [12.0, 4.0, 6.5]
  }
}
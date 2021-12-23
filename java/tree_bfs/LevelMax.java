/*
  @requirement:
  @param:
  @return:
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

class LevelMax {
  public static List<Integer> levelMax(TreeNode tree) {
    List<Integer> resultLevelMax = new ArrayList<>();
    if (tree == null)
      return resultLevelMax;
    int max = 0;
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(tree);
    while (!queue.isEmpty()) {
      int levelSize = queue.size();
      for (int i = 0; i < levelSize; i++) {
        TreeNode currentNode = queue.poll();
        max = Math.max(max, currentNode.value);
        if (currentNode.left != null)
          queue.offer(currentNode.left);
        if (currentNode.right != null)
          queue.offer(currentNode.right);
      }
      resultLevelMax.add(max);
      max = 0;
    }
    return resultLevelMax;
  }

  public static void main(String[] args) {
    TreeNode root = new TreeNode(12);
    root.left = new TreeNode(7);
    root.right = new TreeNode(1);
    root.left.left = new TreeNode(9);
    root.left.right = new TreeNode(2);
    root.right.left = new TreeNode(10);
    root.right.right = new TreeNode(5);
    List<Integer> result = LevelMax.levelMax(root);
    System.out.print("Level Maxes are: " + result); // [12, 7, 10
  }
}
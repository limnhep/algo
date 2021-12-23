/*
 * @requirement: Given a root of a binary tree, get every value from each level
 *
 * @param: TreeNode: root
 *
 * @return: ArrayList<ArrayList<Integer>>: an array containing every node value
 * of each level
 */

import java.util.ArrayList;
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

class LevelOrderTraversal {
  public static ArrayList<ArrayList<Integer>> traverse(TreeNode root) {
    ArrayList<ArrayList<Integer>> resultTreeNodes = new ArrayList<ArrayList<Integer>>();
    if (root == null)
      return resultTreeNodes;
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);
    while (!queue.isEmpty()) {
      int levelSize = queue.size();
      ArrayList<Integer> currentLevel = new ArrayList<>();
      for (int i = 0; i < levelSize; i++) {
        TreeNode currentNode = queue.poll();
        currentLevel.add(currentNode.value);
        if (currentNode.left != null) {
          queue.offer(currentNode.left);
        }
        if (currentNode.right != null) {
          queue.offer(currentNode.right);
        }
      }
      resultTreeNodes.add(currentLevel);
    }
    return resultTreeNodes;
  }

  public static void main(String[] args) {
    TreeNode root = new TreeNode(12);
    root.left = new TreeNode(7);
    root.right = new TreeNode(1);
    root.left.left = new TreeNode(14);
    root.right.left = new TreeNode(16);
    root.right.right = new TreeNode(17);
    ArrayList<ArrayList<Integer>> result = LevelOrderTraversal.traverse(root);
    System.out.println("Level Order Traversal " + result);
  }
}

/*
 * Complexity Analysis:
 *
 * Time: O(n) where n is the number of nodes at each level of the root tree
 * Space: O(m) where m is the number of nodes stored in queue(FIFO)
 */
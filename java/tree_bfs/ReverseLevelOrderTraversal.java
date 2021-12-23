/*
  @requirement: Given a binary tree, find a reverse order traversal of the given binary tree
  @param: TreeNode: tree
  @return: ArrayList<ArrayList<Integer>>
*/

import java.util.LinkedList;
import java.util.ArrayList;
import java.util.Queue;
import java.util.List;

class TreeNode {
  int value;
  TreeNode left;
  TreeNode right;

  TreeNode(int value) {
    this.value = value;
  }
}

class ReverseLevelOrderTraversal {
  public static List<List<Integer>> reverseTraversal(TreeNode root) {
    List<List<Integer>> resultReverseNodes = new LinkedList<List<Integer>>();
    if (root == null)
      return resultReverseNodes;
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);
    while (!queue.isEmpty()) {
      List<Integer> currentList = new ArrayList<>();
      int levelSize = queue.size();
      for (int i = 0; i < levelSize; i++) {
        TreeNode currentNode = queue.poll();
        currentList.add(currentNode.value);
        if (currentNode.left != null)
          queue.offer(currentNode.left);
        if (currentNode.right != null)
          queue.offer(currentNode.right);
      }
      resultReverseNodes.add(0, currentList);
    }
    return resultReverseNodes;
  }

  public static void main(String[] args) {
    TreeNode root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.right = new TreeNode(4);
    root.left.left = new TreeNode(5);
    root.right.left = new TreeNode(6);
    List<List<Integer>> reverseNodes = ReverseLevelOrderTraversal.reverseTraversal(root);
    System.out.println(reverseNodes); // [[5,4,6],[2,3],[1]];
  }
}

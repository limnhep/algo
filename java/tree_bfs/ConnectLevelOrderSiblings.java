/*
  @requirement:
  @param:
  @return:
*/

import java.util.Queue;
import java.util.LinkedList;

class TreeNodeConnect {
  int value;
  TreeNodeConnect left;
  TreeNodeConnect right;
  TreeNodeConnect next;

  TreeNodeConnect(int value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.next = null;
  }

  public void printOrder() {
    TreeNodeConnect nextLevelRoot = this;
    while (nextLevelRoot != null) {
      TreeNodeConnect current = nextLevelRoot;
      nextLevelRoot = null;
      while (current != null) {
        System.out.println(current.value);
        if (nextLevelRoot == null) {
          if (current.left != null) {
            nextLevelRoot = current.left;
          }
          if (current.right != null) {
            nextLevelRoot = current.right;
          }
          current = current.next;
        }
        System.out.println();
      }
    }
  }
}

class ConnectLevelOrderSiblings {

  public static void connectSiblings(TreeNodeConnect tree) {
    if (tree == null)
      return;
    Queue<TreeNodeConnect> queue = new LinkedList<>();
    queue.offer(tree);
    while (!queue.isEmpty()) {
      int levelSize = queue.size();
      TreeNodeConnect previous = null;
      for (int i = 0; i < levelSize; i++) {
        TreeNodeConnect currentNode = queue.poll();
        if (previous != null) {
          previous.next = currentNode;
          previous = currentNode;
        }
        if (currentNode.left != null)
          queue.offer(currentNode.left);
        if (currentNode.right != null)
          queue.offer(currentNode.right);
      }
    }
  }

  public static void main(String[] args) {
    TreeNodeConnect root = new TreeNodeConnect(12);
    root.left = new TreeNodeConnect(7);
    root.right = new TreeNodeConnect(1);
    root.left.left = new TreeNodeConnect(9);
    root.right.left = new TreeNodeConnect(10);
    root.right.right = new TreeNodeConnect(5);
    ConnectLevelOrderSiblings.connectSiblings(root);
    System.out.println("Level order traversal using 'next' pointer: ");
    root.printOrder();
  }
}
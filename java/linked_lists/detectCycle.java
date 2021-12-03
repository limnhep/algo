import java.util.Set;
import java.util.HashSet;

/**
 * Definition for singly-linked list. class ListNode { int val; ListNode next;
 * ListNode(int x) { val = x; next = null; } }
 */
class DetectCycle {
  public ListNode detectCycle(ListNode head) {
    Set<ListNode> nodeContaiiners = new HashSet<>();
    ListNode node = head;
    while (node != null) {
      if (nodeContaiiners.contains(node))
        return node;
      nodeContaiiners.add(node);
      node = node.next;
    }
    return null;
  }
}

// time: O(n) where n is the number of nodes
// space: O(k) where k is also the number of nodes
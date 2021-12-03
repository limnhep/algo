// Definition for singly-linked list.

class ListNode {
  int val;
  ListNode next;

  ListNode(int x) {
    val = x;
    next = null;
  }
}

/*
 * By definition, for a Singly Linked List to be cyclical. Faster pointer will
 * eventually reach slow pointer. If fast pointer by any reason reaches null,
 * then it implies that it's not cyclical. otherwise, it is cyclical.
 */
class LinkedListCycle {
  public boolean hasCycle(ListNode head) {
    if (head == null)
      return false;
    ListNode slow = head;
    ListNode fast = head.next;
    while (slow != fast) {
      if (fast == null || fast.next == null)
        return false;
      slow = slow.next;
      fast = fast.next.next;
    }
    return true;
  }
}
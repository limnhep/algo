/*
  @request:
  @param:
  @return:
*/

class ListNode {
  int value = 0;
  ListNode next;

  ListNode(int value) {
    this.value = value;
  }
}

class ReverseSubList {
  public static ListNode reverseSubList(ListNode head, int p, int q) {
    if (p == q)
      return head;
    ListNode current = head;
    ListNode previous = null;
    for (int i = 0; current != null && i < p - 1; ++i) {
      previous = current;
      current = current.next;
    }
    ListNode lastNodeOfFirstPart = previous;
    ListNode lastNodeOfSubList = current;
    ListNode next = null;
    for (int j = 0; current != null && j < q - p + 1; j++) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    if (lastNodeOfFirstPart != null) {
      lastNodeOfFirstPart.next = previous;
    } else {
      head = previous;
    }
    lastNodeOfSubList.next = current;
    return head;
  }

  public static void main(String[] args) {
    ListNode head = new ListNode(2);
    head.next = new ListNode(3);
    head.next.next = new ListNode(4);
    head.next.next.next = new ListNode(5);
    head.next.next.next.next = new ListNode(6);
    ListNode linkedListSubList = ReverseSubList.reverseSubList(head, 1, 3);
    while (linkedListSubList != null) {
      System.out.println(linkedListSubList.value);
      linkedListSubList = linkedListSubList.next;
    }
  }
}

/*
 * Complexity Analysis:
 *
 * Time: O(n) Space: O(1)
 */
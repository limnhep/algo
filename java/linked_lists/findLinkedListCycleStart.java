class ListNode {
  int value = 0;
  ListNode next;

  ListNode(int value) {
    this.value = value;
  }
}

class LinkedListCycleStart {

  public static ListNode findCycleStart(ListNode head) {
    ListNode slow = head;
    ListNode fast = head;
    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow == fast)
        break;
    }
    int linkedListLength = getLinkedListLength(slow);
    return findLinkedListNode(head, linkedListLength);
  }

  public static int getLinkedListLength(ListNode slowHead) {
    ListNode current = slowHead;
    int length = 0;
    do {
      length++;
      current = current.next;
    } while (current != slowHead);
    return length;
  }

  public static ListNode findLinkedListNode(ListNode head, int cyclicLength) {
    ListNode pointer1 = head;
    ListNode pointer2 = head;
    while (cyclicLength > 0) {
      cyclicLength--;
      pointer2 = pointer2.next;
    }
    while (pointer2 != pointer1) {
      pointer1 = pointer1.next;
      pointer2 = pointer2.next;
    }
    return pointer1;
  }

  public static void main(String[] args) {
    ListNode head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    head.next.next.next.next = new ListNode(5);
    head.next.next.next.next.next = new ListNode(6);

    head.next.next.next.next.next.next = head.next.next;
    System.out.println("LinkedList cycle start: " + LinkedListCycleStart.findCycleStart(head).value);

    head.next.next.next.next.next.next = head.next.next.next;
    System.out.println("LinkedList cycle start: " + LinkedListCycleStart.findCycleStart(head).value);

    head.next.next.next.next.next.next = head;
    System.out.println("LinkedList cycle start: " + LinkedListCycleStart.findCycleStart(head).value);
  }
}
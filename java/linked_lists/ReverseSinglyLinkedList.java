/*
  @request:
  @param:
  @return:
*/

class LinkedListNode {
  int value = 0;
  LinkedListNode next;

  LinkedListNode(int value) {
    this.value = value;
  }
}

class ReverseSinglyLinkedList {
  public static LinkedListNode reverseLinkedList(LinkedListNode head) {
    LinkedListNode prev = null;
    while (head != null) {
      LinkedListNode next = head.next;
      head.next = prev;
      prev = head;
      head = next;
    }
    return prev;
  }

  public static void main(String[] args) {
    LinkedListNode head = new LinkedListNode(2);
    head.next = new LinkedListNode(3);
    head.next.next = new LinkedListNode(4);
    head.next.next.next = new LinkedListNode(5);
    head.next.next.next.next = new LinkedListNode(6);
    // while (head != null) {
    // System.out.println(head.value);
    // head = head.next;
    // }
    System.out.println("Reverse the Linked List: ");
    LinkedListNode reverseHead = ReverseSinglyLinkedList.reverseLinkedList(head);
    while (reverseHead != null) {
      System.out.println(reverseHead.value);
      reverseHead = reverseHead.next;
    }
  }
}
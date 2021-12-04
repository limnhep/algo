/**
 * Definition for singly-linked list. public class ListNode { int val; ListNode
 * next; ListNode() {} ListNode(int val) { this.val = val; } ListNode(int val,
 * ListNode next) { this.val = val; this.next = next; } }
 */
class RemoveNodeFromLinkedList {
  public ListNode removeNthFromEnd(ListNode head, int n) {
    ListNode temp = new ListNode(0);
    ListNode headNode = head;
    temp.next = head;
    int length = 0;
    while (headNode != null) {
      length++;
      headNode = headNode.next;
    }
    headNode = temp;
    length -= n;
    while (length > 0) {
      length--;
      headNode = headNode.next;
    }
    headNode.next = headNode.next.next;
    return temp.next;
  }
}
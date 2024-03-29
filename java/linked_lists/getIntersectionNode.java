/**
 * Definition for singly-linked list. public class ListNode { int val; ListNode
 * next; ListNode(int x) { val = x; next = null; } }
 */
class IntersectionNode {
  public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
    ListNode nodeA = headA;
    ListNode nodeB = headB;
    while (nodeA != nodeB) {
      nodeA = nodeA == null ? headB : nodeA.next;
      nodeB = nodeB == null ? headA : nodeB.next;
    }
    return nodeA;
  }
}

class ListNode {
  int value = 0;
  ListNode next;

  ListNode(int value) {
    this.value = value;
  }
}

class PalindromicLinkedList {

  public static boolean isPalindrome(ListNode head) {
    ListNode slow = head;
    ListNode fast = head;
    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    ListNode secondHalf = reverse(slow);
    ListNode copyOfSecondHalf = secondHalf;
    while (head != null && secondHalf != null) {
      if (head.value != secondHalf.value)
        break;
      head = head.next;
      secondHalf = secondHalf.next;
    }
    reverse(copyOfSecondHalf);
    if (head == null && secondHalf == null)
      return true;
    return false;
  }

  private static ListNode reverse(ListNode secondHalf) {
    ListNode prev = null;
    while (secondHalf != null) {
      ListNode next = secondHalf.next;
      secondHalf.next = prev;
      prev = secondHalf;
      secondHalf = next;
    }
    return prev;
  }

  public static void main(String[] args) {
    ListNode head = new ListNode(2);
    head.next = new ListNode(4);
    head.next.next = new ListNode(6);
    head.next.next.next = new ListNode(4);
    head.next.next.next.next = new ListNode(2);
    System.out.println("Is palindrome: " + PalindromicLinkedList.isPalindrome(head));

    head.next.next.next.next.next = new ListNode(2);
    System.out.println("Is palindrome: " + PalindromicLinkedList.isPalindrome(head));
  }
}
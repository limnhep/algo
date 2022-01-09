(function main() {
  class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  const head1 = new ListNode(0);
  head1.next = new ListNode(1);
  head1.next.next = new ListNode(2);
  head1.next.next.next = new ListNode(3);
  head1.next.next.next.next = new ListNode(4);
  head1.next.next.next.next.next = new ListNode(5);

  const head2 = new ListNode(9);
  head2.next = new ListNode(8);
  head2.next.next = new ListNode(7);
  head2.next.next.next = new ListNode(6);

  const oddEvenLinkedList = (headLinkedList) => {
    let odd = headLinkedList;
    let even = headLinkedList.next;
    let evenHead = even;
    while (even !== null && even.next !== null) {
      odd.next = even.next;
      odd = odd.next;
      even.next = odd.next;
      even = even.next;
    }
    odd.next = evenHead;
    return headLinkedList;
  }
  let resultListNodes = oddEvenLinkedList(head1);
  while (resultListNodes !== null) {
    console.log(resultListNodes.value);
    resultListNodes = resultListNodes.next;
  }
}());
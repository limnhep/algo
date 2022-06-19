(function main() {
  /*
      @param {LinkedList} head
      @return {LinkedList Node}
      @requirement
          => find the middle value of the LinkedList
          @strategy
              => use the two-pointer technique
              => traverse over LinkedList
                  => move fast pointer by two node
                  => move slow pointer by one node
                      => when fast pointer reaches the end of the LinkedList, it implies that the slow pointer is at the middle
              => return the slow LinkedList node
  */

  const middleOfLinkedList = (head) => {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
    };
    return slow;
  };

  const inputLists = ["0 1 2 3 4", "0 1 2 3 4 5"];
  class ListNode {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    };
  };

  for (let i = 0; i < inputLists.length; i++) {
    const dummy = new ListNode(-1);
    let currentLinkedList = dummy;
    for (const val of inputLists[i].split(" ")) {
      let node = new ListNode(parseInt(val, 10));
      currentLinkedList.next = node;
      currentLinkedList = node;

    };
    console.log("Dummy: ", dummy);
    console.log("currentLinkedList: ", currentLinkedList);
    console.log("Middle Node: ", middleOfLinkedList(dummy.next).value);
  };

  /*
    time and space complexity analysis:
      time: O(n)
      space: O(1)
  */
})();

/*
    basic of Linked List: it has a head, a node, a tail. [head, data] => [data, next] => [data, null]
    i: a singly linked list
    o: a reverse singly linked list
    strategy: uses pointer to point to previous and next node as long as the currentNode is not null; because it's null, then it's going to be an end of the linked list.
*/

// assuming that we have class Node and Linked List
var reverseList = function (head) {
  let tail = null;
  let node = head;
  while (node !== null) { // indicates that it's not an end
    const nextNode = node.next;
    node.next = tail;
    tail = node;
    node = nextNode;

  }
  return tail;
};

// time: O(n)
// space: O(1)
class LinkedNode {
  int val;
  LinkedNode next;

  LinkedNode(int x) {
    val = x;
  }
}

class MyLinkedList {

  int size;
  LinkedNode head;

  public MyLinkedList() {
    size = 0;
    head = new LinkedNode(0);
  }

  public int get(int index) {
    if (index < 0 || index >= size)
      return -1;
    LinkedNode curr = head;
    for (int i = 0; i < index + 1; i++) { // index + 1 because head is assigned to LinkedNode w/ value of 0
      curr = curr.next;
    }
    return curr.val;
  }

  public void addAtHead(int val) {
    // LinkedNode curr = new LinkedNode(val); // create an instance of the node
    // curr.next = head; // set the next pointer of the current node to head
    // head = curr; // reassign head to current node
    addAtIndex(0, val);
  }

  public void addAtTail(int val) {
    addAtIndex(size, val);
  }

  public void addAtIndex(int index, int val) {
    if (index > size)
      return;
    if (index < 0) {
      index = 0;
    }
    size++;
    LinkedNode pred = head;
    for (int i = 0; i < index; i++) {
      pred = pred.next;
    }
    LinkedNode curr = new LinkedNode(val);
    curr.next = pred.next;
    pred.next = curr;
  }

  public void deleteAtIndex(int index) {
    if (index < 0 || index >= size)
      return; // invalid, not going to delete
    size--;
    LinkedNode pred = head;
    for (int i = 0; i < index; i++) {
      pred = pred.next;
    }
    pred.next = pred.next.next;
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * MyLinkedList obj = new MyLinkedList(); int param_1 = obj.get(index);
 * obj.addAtHead(val); obj.addAtTail(val); obj.addAtIndex(index,val);
 * obj.deleteAtIndex(index);
 */
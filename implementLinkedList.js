// Time and Space Complexity of Linked List, for both single and double.

// Unlike Array, Linked List nodes are NOT stored contiguously in memory and do NOT have an indexed set of memory addresses.

// Access =>
// Time: O(n), linear
// Space: O(n), linear

// Search =>
// Time: O(n), linear
// Space: O(n), linear

// Insertion =>
// Time: O(1), constant
// Space: O(n), linear

// Deletion =>
// Time: O(1), constant
// Space: O(n), linear

// Implement a singly Linked List and all of its methods.

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToTail(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
    return this;
  }

  removeTail() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  addToHead(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.next;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  removeHead() {
    if (!this.head) return undefined;
    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
}

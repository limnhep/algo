// A linked list is data structure represents a linear sequence of nodes and tracks three properties: head, tail, and length
// head: the first node
// tail: the last node
// length: the number of nodes inside the list

// Linked List unlike array is non-contiguous.

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._length = 0;
  }
  addToTail(item) {
    const newNode = {
      value: item,
      next: null
    };
    if (this._length === 0) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this._length++;
  }
  removeFromHead() {
    if (this._length === 0) {
      console.warn('Attempting to remove from an empty LinkedList');
      return undefined;
    }
    const itemToRemove = this.head.value;
    this.head = this.head.next;
    this._length--;
    return itemToRemove;
  }
  get size() {
    return this._length;
  }
}

// TIME AND SPACE COMPLEXITY ANALYSIS:

// TIME:
// access: O(n)
// search: O(n)
// insertion: O(1)
// deletion: O(1)

// SPACE:
// access: O(n)
// search: O(n)
// insertion: O(n)
// deletion: O(n)

// A LONGER IMPLEMENTATION:

// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

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
      newNode.next = this.head;
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

  contains(target) {
    let node = this.head;
    while (node) {
      if (node.value === target) return true;
      node = node.next;
    }
    return false;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index >= this.length) return false;
    if (index === this.length) return !!this.addToTail(val);
    if (index === 0) return !!this.addToHead(val);

    const newNode = new Node(val);
    const prev = this.get(index - 1);
    const temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.removeHead();
    if (index === this.length - 1) return this.removeTail();
    const previousNode = this.get(index - 1);
    const removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }

  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
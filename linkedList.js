// A linked list is data structure represents a linear sequence of nodes and tracks three properties: head, tail, and length
// head: the first node
// tail: the last node
// length: the number of nodes inside the list

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
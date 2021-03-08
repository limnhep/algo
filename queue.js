// queue => first in first out

class Queue {
  constructor() {
    this._storage = {}; // create a hash table / object to store all data
    this._firstIndex = 0; // create firstIndex to keep track of the starting position
    this._lastIndex = 0; // create lastIndex to keep track of the ending position
  }
  enqueue(item) { // adding someone to the back of the queue
    this._storage[this._lastIndex] = item; // add the last element to the object
    this._lastIndex++; // increase the last index by 1
  }
  dequeue() { // removing someone from the front of the queue
    if (this.size() === 0) {
      console.warn('Attempting to remove from an empty queue');
      return undefined;
    }
    const itemToRemove = this._storage[this._firstIndex]; // create a variable to store what item to remove
    delete this._storage[this._firstIndex]; // remove item
    this._firstIndex++; // increase the position
    return itemToRemove; // return the removed item
  }
  get size() {
    return this._lastIndex - this._firstIndex; // get the size of the object: last index - first index
  }
}

// Time: O(1) => accessing / removing from Object / Hash Table
// Space: O(1)

// create Queue using Linked List methods: addToTail and removeFromHead

class Queue extends LinkedList {
  constructor() {
    super();
    this.enqueue = this.addToTail;
    this.dequeue = this.removeFromHead;
  }
}

class Queue {
  constructor() {
    this._storage = {};
    this._firstIndex = 0;
    this._lastIndex = 0;
  }
  enqueue(item) {
    this._storage[this._lastIndex] = item;
    this._lastIndex++;
  }
  dequeue() {
    if (this.size() === 0) {
      console.warn('Attempting to remove from an empty queue');
      return undefined;
    }
    const itemToRemove = this._storage[this._firstIndex];
    delete this._storage[this._firstIndex];
    this._firstIndex++;
    return itemToRemove;
  }
  get size() {
    return this._lastIndex - this._firstIndex;
  }
}

// FIFO

class Queue {
  constructor() {
    this._queue = {};
    this._length = 0;
    this._initialIndex = 0;
  }
  enqueue(value) {
    const nextIndex = this._length + this._initialIndex;
    this._queue[nextIndex] = value;
    this._length++;
    return;
  }
  dequeue() {
    if (this.length !== 0) {
      const firstEl = this._queue[this._initialIndex];
      delete this._queue[this._initialIndex];
      this._length--;
      this._initialIndex++;
      return;
    }
  }
}

// Time Complexity Analysis:
// access: O(n)
// search: O(n)
// addition: O(1)
// deletion: O(1)
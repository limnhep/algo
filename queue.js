// queue => first in first out

class Queue {
  constructor() {
    this._storage = {};
    this._firstIndex = 0;
    this._lastIndex = 0;
  }
  enqueue(item) { // adding someone to the back of the queue
    this._storage[this._lastIndex] = item;
    this._lastIndex++;
  }
  dequeue() { // removing someone from the front of the queue
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
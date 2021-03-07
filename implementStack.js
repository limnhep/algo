class Stack {
  constructor() {
    this.stack = [];
    this.length = 0;
  }
  push(value) {
    this.stack.push(value);
    this.length++;
  }
  pop() {
    if (this.length < 0) return 0;
    this.length--;
    return this.stack.pop();
  }
  size() {
    return this.length;
  }
  min() {
    const min = Math.min.apply(null, this.stack);
    return min;
  }
  max() {
    const max = Math.max.apply(null, this.stack);
    return max;
  }
  mid() {
    const sort = this.stack.sort((a, b) => a - b);
    const mid = Math.floor((sort[0] + sort[sort.length - 1]) / 2);
    return this.stack[mid];
  }
  remove(value) {
    if (this.length < 0) return 0;
    for (let i = 0; i < this.stack.length; i++) {
      if (this.stack[i] === value) this.stack.splice(i, 1);
    }
    this.length--;
  }
}
// alternative solution:

// LIFO, e.g. Stack of books. Implement a Stack class that has the following features: push(), pop(), peak(), and access() to access the last value of the stack, and list the pros and cons of using a Stack and its time complexity for search, access, delete, and insertion

class Stack {
  constructor() {
    this._stack = {};
    this._length = 0;
  }
  push(value) {
    this._stack[length] = value;
    this._length++;
    return;
  }
  pop() {
    if (this._length === 0) return null;
    delete this._stack[length];
    this._length--;
    return;
  }
  size() {
    if (this._length === 0) return null;
    return this._length;
  }
  accessFirst() {
    if (this._length === 0) return null;
    return this._stack[0];
  }
  accessLast() {
    if (this._length === 0) return null;
    return this._stack[this._length];
  }
}

// access: O(n)
// search: O(n)
// insertion: O(1)
// Remove: O(1)

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack); // Expect the result to be: {'0': 1, '1': 2, '2': 3};
stack.pop();
console.log(stack); // Expect the result to be: {'0': 1, '1': 2};
console.log(stack.size()); // Expect the result to be: 2;
console.log(stack.accessFirst()); // Expect the result to be: 1;
console.log(stack.accessLast()); // Expect the result to be: 2;


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
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let a = new BinaryTree('a'); // root
let b = new BinaryTree('b');
let c = new BinaryTree('c');
let d = new BinaryTree('d');
let e = new BinaryTree('e');
let f = new BinaryTree('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

function breadthFirst(root) {
  let queue = [root];
  while (queue.length) {
    let node = queue.shift();
    console.log(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}

breadthFirst(a);
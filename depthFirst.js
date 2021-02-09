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
/*
function depthFirst(root) {
  let stack = [root];
  // LIFO --> Stack DS
  while (stack.length) { // until the Stack is empty
    let node = stack.pop(); // current node visited
    console.log(node.value);
    // explore the left first, so push the right then the left, the left will be on top for the next iteration because of Stack
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left); // hit until the leaf level
  }
}
*/

// null is a falsey value
// Recursive function is a Stack and hence why the code below works

function depthFirstRecur(root) {
  if (!root) return;
  console.log(root.value);
  depthFirstRecur(root.left);
  depthFirstRecur(root.right);
}

depthFirstRecur(a);
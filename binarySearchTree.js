class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(value, root = this.root) { // referring to the root property exists in this BST class
    if (!this.root) {
      this.root = new BinaryTree(value);
      return;
    }

    if (value < root.value) {
      if (!root.left) {
        root.left = new BinaryTree(value);
      } else {
        this.insert(value, root.left);
      }
    } else {
      if (!root.right) {
        root.right = new BinaryTree(value);
      } else {
        this.insert(value, root.right);
      }
    }
  }
  inOrderPrint(root = this.root) {
    if (!root) return;

    this.inOrderPrint(root.left);
    console.log(root.value);
    this.inOrderPrint(root.right);
  }
}

let bst1 = new BST();
bst1.insert(10);
bst1.insert(5);
bst1.insert(16);
bst1.insert(1);
bst1.insert(7);
bst1.insert(16);

console.log('bst1: ', bst1);
console.log('bst1.inOrderPrint(): ', bst1.inOrderPrint());
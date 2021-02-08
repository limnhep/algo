class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// print left subtree, root or self, and the right subtree

function inOrderPrint(root) {
  if (root === null) return; // (!root) recursive case
  inOrderPrint(root.left);
  console.log(root.val);
  inOrderPrint(root.right);
}

// print root or self, left subtree, and the right subtree

function preOrderPrint(root) {
  if (!root) return;
  console.log(root.val);
  preOrderPrint(root.left);
  preOrderPrint(root.right);
}

// print left subtree, right subtree, and then root or self

function postOrderPrint(root) {
  if (!root) return;
  postOrderPrint(root.left);
  postOrderPrint(root.right);
  console.log(root.val);
}

class TreeNode {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

// return the tree is essentially printing out the 'root' of the tree

function buildTree(preorder, inorder) {
  if (preorder.length === 0 && inorder.length === 0) return null;

  let rootVal = preorder[0];
  let root = new TreeNode(rootVal);
  let midIdx = inorder.indexOf(rootVal);
  let leftInorder = inorder.slice(0, midIdx);
  let rightInorder = inorder.slice(midIdx + 1);

  let leftPreorder = preorder.filter((value) => {
    leftInorder.includes(value);
  })
  let rightPreorder = preorder.filter((value) => rightInorder.includes(value));

  let leftTree = buildTree(leftPreorder, leftInorder);
  let rightTree = buildTree(rightPreorder, rightInorder);

  root.left = leftTree;
  root.right = rightTree;

  return root;
}

console.log(buildTree([], []));
const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];
console.log(buildTree(preorder, inorder));

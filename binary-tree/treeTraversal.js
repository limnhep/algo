(function main() {

  class TreeNode {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    };
  };

  let a = new TreeNode(4);
  let b = new TreeNode(2);
  let c = new TreeNode(1);
  let d = new TreeNode(3);
  let e = new TreeNode(6);
  let f = new TreeNode(5);
  let g = new TreeNode(7);

  a.left = b;
  b.left = c;
  b.right = d;
  a.right = e;
  e.left = f;
  e.right = g;

  let treeRoot = a;

  const preorderTraversal = (root) => {
    const resultArr = [];
    if (!root) return resultArr;
    dfsPreorderTraversal(root, resultArr);
    return resultArr.join('- ');
  };

  const dfsPreorderTraversal = (root, resultArray) => {
    if (!root) return resultArray;
    dfsPreorderTraversal(root.left, resultArray);
    resultArray.push(root.value);
    dfsPreorderTraversal(root.right, resultArray);
  };

  const inorderTraversal = (root) => {
    const resultArr = [];
    dfsInorderTraversal(root, resultArr);
    return resultArr.join('- ');
  };

  const dfsInorderTraversal = (root, resultArray) => {
    if (!root) return resultArray;
    resultArray.push(root.value);
    dfsInorderTraversal(root.left, resultArray);
    dfsInorderTraversal(root.right, resultArray);
  };

  const postorderTraversal = (root) => {
    const resultArr = [];
    if (!root) return resultArr;
    dfsPostorderTraversal(root, resultArr);
    return resultArr.join('- ');
  };

  const dfsPostorderTraversal = (root, resultArray) => {
    if (!root) return resultArray;
    dfsPostorderTraversal(root.left, resultArray);
    dfsPostorderTraversal(root.right, resultArray);
    resultArray.push(root.value);
  };

  console.log('preorderTraveral: 4, 2, 1, 3, 6, 5, 7 =>',
    preorderTraversal(treeRoot));
  console.log('inorderTraversal: 1, 2, 3, 4, 5, 6, 7 =>',
    inorderTraversal(treeRoot));
  console.log('postorderTraversal:  1, 3, 2, 5, 7, 6, 4 =>',
    postorderTraversal(treeRoot));
})();

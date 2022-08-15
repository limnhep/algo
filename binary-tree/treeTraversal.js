(function maim() {
  /*
      1. CREATE A NODE
      2. DFS
          => PREORDER
          => INORDER
          => POSTORDER
      3. DFS USING A STACK
      4. BFS USING A QUEUE
  */

  class Node {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    };
  };

  let a = new Node(4);
  let b = new Node(2);
  let c = new Node(1);
  let d = new Node(3);
  let e = new Node(6);
  let f = new Node(5);
  let g = new Node(7);

  a.left = b;
  b.left = c;
  b.right = d;
  a.right = e;
  e.left = f;
  e.right = g;

  let treeRoot = a;

  // 4, 2, 1, 3, 6, 5, 7

  const preorderTraversal = (root) => {
    if (!root) return null;
    const resultArr = [];
    dfsPreorderTraversal(root, resultArr);
    return resultArr.join('- ');
  };

  const dfsPreorderTraversal = (root, array) => {
    if (!root) return null;
    array.push(root.value);
    dfsPreorderTraversal(root.left, array);
    dfsPreorderTraversal(root.right, array);
  };

  const inorderTraversal = (root) => {
    if (!root) return null;
    const resultArr = [];
    dfsInorderTraversal(root, resultArr);
    return resultArr.join('- ');
  };

  const dfsInorderTraversal = (root, array) => {
    if (!root) return null;
    dfsInorderTraversal(root.left, array);
    array.push(root.value);
    dfsInorderTraversal(root.right, array);
  };

  const postorderTraversal = (root) => {
    if (!root) return null;
    const resultArr = [];
    dfsPostorderTraversal(root, resultArr);
    return resultArr.join('- ');
  };

  const dfsPostorderTraversal = (root, array) => {
    if (!root) return null;
    dfsPostorderTraversal(root.left, array);
    dfsPostorderTraversal(root.right, array);
    array.push(root.value);
  };

  // PREORDER TRAVERSAL USING DFS STACK
  const dfsStack = (root) => {
    if (!root) return null;
    const stack = [];
    const resultArr = [];
    stack.push(root);
    while (stack.length > 0) {
      const currentNode = stack.pop();
      resultArr.push(currentNode.value);
      if (currentNode.right !== null) stack.push(currentNode.right);
      if (currentNode.left !== null) stack.push(currentNode.left);
    };
    return resultArr.join('- ');
  };

  // LEVEL BY LEVEL TRAVERSAL
  const bfsQueue = (root) => {
    if (!root) return null;
    const resultArr = [];
    const queue = [root];
    while (queue.length > 0) {
      const currentNode = queue.shift();
      resultArr.push(currentNode.value);
      if (currentNode.left !== null) queue.push(currentNode.left);
      if (currentNode.right !== null) queue.push(currentNode.right);
    };
    return resultArr.join('- ');
  };

  console.log('PREORDER: ',
    preorderTraversal(treeRoot));
  console.log('INORDER: ',
    inorderTraversal(treeRoot));
  console.log('POSTORDER: ',
    postorderTraversal(treeRoot));
  console.log('DFSSTACK: ',
    dfsStack(treeRoot));
  console.log('BFSQUEUE: ',
    bfsQueue(treeRoot));
})();

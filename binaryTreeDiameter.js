// A BinaryTree contains at least two children and is self-described as

// Preorder => root, left, right
// Inorder => left, root, right
// Postorder => left, right, root

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Write a function that takes in a binary tree and return its deepest 'diameter';

// construct a class TreeDetail to obtain its height and diameter

class TreeInfo {
  constructor(diameter, height) {
    this.diameter = diameter;
    this.height = height;
  }
}

function findBinaryTreeDiamater(tree) {
  return getBinaryTreeInfo(tree).diameter;
}

function getTreeInfo(tree) {
  if (!tree) return new TreeInfo(0, 0);

  const leftSubtree = getTreeInfo(root.left);
  const rightSubtree = getTreeInfo(root.right);

  const longestPath = leftSubtree.height + rightSubtree.height;
  const maxDiameter = Math.max(leftSubtree.diameter, rightSubtree.diameter);
  const currentDiameter = Math.max(longestPath, maxDiameter);
  const currentHeight = 1 + Math.max(leftSubtree.height, rightSubtree.height);

  return new TreeInfo(currentDiameter, currentHeight);
}

const test1 = {
  "tree": {
    "nodes": [
      { "id": "1", "left": "3", "right": "2", "value": 1 },
      { "id": "3", "left": "7", "right": "4", "value": 3 },
      { "id": "7", "left": "8", "right": null, "value": 7 },
      { "id": "8", "left": "9", "right": null, "value": 8 },
      { "id": "9", "left": null, "right": null, "value": 9 },
      { "id": "4", "left": null, "right": "5", "value": 4 },
      { "id": "5", "left": null, "right": "6", "value": 5 },
      { "id": "6", "left": null, "right": null, "value": 6 },
      { "id": "2", "left": null, "right": null, "value": 2 }
    ],
    "root": "1"
  }
};


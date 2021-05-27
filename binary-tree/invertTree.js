class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function invertTree(root) {
    if (root === null) return root;
    const right = invertTree(root.right);
    const left = invertTree(root.left);
    root.left = right;
    root.right = left;
    return root;
}

// time: O(N)
// space: O(N)
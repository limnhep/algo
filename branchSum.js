class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSum(root) {
  const sums = [];
  calculateBranchSums(root, 0, sums);
  return sums;
}

function calculateBranchSums(root, runningSum, sums) {
  if (!root) return;

  const newRunningSum = runningSum + root.value;
  if (!root.left && !root.right) {
    sums.push(newRunningSum);
    return;
  }
  calculateBranchSums(root.left, newRunningSum, sums);
  calculateBranchSums(root.right, newRunningSum, sums)
}


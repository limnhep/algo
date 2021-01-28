var shuffle = function (nums, n) {
  const resultArr = [];
  for (let i = 0; i < n; i++) {
    resultArr.push(nums[i]);
    resultArr.push(nums[n + i]);
  }
  return resultArr;
};
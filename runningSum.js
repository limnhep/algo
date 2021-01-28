var runningSum = function (nums) {
  const resultArr = [];
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
    resultArr.push(total);
  }
  return resultArr;
};

// time: O(n)
// space: O(n)
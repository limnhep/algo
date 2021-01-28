/*
    i: an array of nums
    o: a number that denotes the majority element
    e: na, assuming.
    strategy:
        1. store each element inside object; if the key exists in the object, increment the value by 1;
        2. iterate again to identify any value in the object that is greater than initialized majority, which is n/2;

*/
var majorityElement = function (nums) {
  const obj = {},
    majority = nums.length / 2;
  for (let num of nums) {
    if (num in obj) {
      obj[num]++;
    } else {
      obj[num] = 1;
    }
  }
  for (let num of nums) {
    if (obj[num] > majority) return num;
  }
};

// time: O(n)
// space: O(1)

var majorityElement = function (nums) {
  const obj = {},
    majority = nums.length / 2;
  nums.forEach(num => obj[num] = obj[num] + 1 || 1);
  return nums.filter(num => obj[num] > nums.length / 2)[0];
};

// time: O(n)
// space: O(1)
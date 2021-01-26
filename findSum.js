// i: array, value
// o: the pair value if exists; otherwise false.

const findSum = (arr, value) => {
  const matches = {};
  for (let i = 0; i < arr.length; i++) {
    const currNum = arr[i];
    const potentialPair = value - currNum;
    if (potentialPair in matches) {
      return [currNum, potentialPair];
    } else {
      matches[currNum] = true;
    }
  }
  return false;
}

// time: O(n)
// space: O(1)

// alternative solution:

const findSum = (arr, value) => {
  arr.sort((a, b) => a - b);
  let left = 0,
    right = arr.length - 1,
    sum = 0;
  const result = [];
  while (left != right) {
    sum = arr[left] + arr[right];
    if (sum < value) {
      left++;
    } else if (sum > value) {
      right--;
    } else {
      result.push(arr[left]);
      result.push(arr[right]);
      return result;
    }
  }
  return false;
}

// time: O(nlogn)
// space: O(n)

var twoSum = function (nums, target) {
  const obj = {};// create an object to store the potential num
  for (let i = 0; i < nums.length; i++) { // iterate over each element inside the array
    const potentialPair = target - nums[i];// find potential other pair
    if (potentialPair in obj) {// if potential other pair exists in the object
      const otherIndex = obj[potentialPair];
      return [i, otherIndex];// return the indices
    } else {
      obj[nums[i]] = i;// otherwise, set the current value to current index
    }
  }
};

// time: O(n)
// space: O(n)
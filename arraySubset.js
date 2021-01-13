// Given two input arrays, determine if the element of the second input array matches the element of the first input array
// i: array1 that contains integers, array2 that contains integer
// o: boolean if any element of arrays matches any element of array1

const arraySubset = (arr, sub) => {
  if (sub.length > arr.length) return false;
  const newMap = new Map(); // => {}
  for (let i = 0; i < arr.length; i++) {
    newMap.set(arr[i], i); // => {{el, index}, {el1, index1},...}
  };
  for (let i = 0; i < sub.length; i++) {
    if (newMap.has(sub[i])) return true;
  }
  return false;
};

// time: O(n)
// space: O(1)


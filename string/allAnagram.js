// Given an array of strings, check if all the elements are the same.
// String is premitive data type and deeply each another

const allAnagrams = (arr) => {
  const sortedEachStr = arr.map((str) => str.split('').sort().join('')); // first sort each string in the array
  for (let i = 1; i < sortedEachStr.length; i++) {
    if (sortedEachStr[i] !== sortedEachStr[0]) return false; // check subsequent element to see if they match the first element; if they don't, return false;
  }
  return true; // by default, return true;
}
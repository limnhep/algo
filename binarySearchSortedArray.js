// Binary Search Sorted Array using new Map();

// i: array => integers, key => integer
// o: index position => integer

let binarySearch = function (a, key) {
  const map = new Map(); // => {}
  for (let i = 0; i < a.length; i++) {
    map.set(a[i], i); // => {element, index}
  }
  const findElement = [...map].filter(([k]) => k === key); // [[el1, ind1],[el2, ind2], ...] and filter it based on key => integer
  const findIndex = findElement.length === 0 ? -1 : findElement[0][1]; // if the length is 0, then the index isn't existed. therefore, returns -1 and exit out of the function; otherwise, return the first element of the array and its second element.
  return findIndex; // return the index that is found in findIndex.
};
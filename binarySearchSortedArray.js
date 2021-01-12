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

// time: O(n)
// space: O(1)

// Alternative solution using Recursive function

let binarySearch = function (a, key) {
  let low = 0; // set low as 0 index
  let high = a.length - 1; // set high as last index
  while (low <= high) { // as long as low is less than or equal to high
    let mid = low + Math.floor((high - low) / 2); // get the middle index
    if (a[mid] === key) { // if the element of the middle index is the same as the key
      return mid; // then key is found
    }
    if (key < a[mid]) { // if key is less than the middle element
      high = mid - 1; // set high to mid index minus 1
    } else {
      low = mid + 1; // otherwise, set low to middle index plus 1
    }
    return -1; // if the conditions are not met, return -1 by default
  }
};

// time: O(logn)
// space: O(1)

// Binary Search using iterative method (while loop) => shorten

let binarySearch = (a, key) => {
  let low = 0;
  let high = a.length - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (a[mid] === key) return mid;
    if (key < a[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
    return -1;
  }
};

// time: O(logn)
// space: O(1)
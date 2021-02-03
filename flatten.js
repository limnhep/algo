// flatten each array recursively

function flatten(nestedArray) {
  let newArr = [];
  for (let i = 0; i < nestedArray.length; i++) {
    const currEl = nestedArray[i];
    if (Array.isArray(currEl)) {
      const flatEl = flatten(currEl);
      for (let j = 0; j < flatEl.length; j++) {
        const innerEl = flatEl[j];
        newArr.push(innerEl);
      }
    } else {
      newArr.push(currEl);
    }
  }
  return newArr;
}

// time: O(n)
// space: O(n)
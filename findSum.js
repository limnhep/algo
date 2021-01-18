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
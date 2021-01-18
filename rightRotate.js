// i: given an array of integer, negative, postive, or zero
// o: rotate right elements by n and concat with the elements up to n

const rightRotate = (arr, n) => {
  return (arr.splice(arr.length - n)).concat(arr.splice(0, arr.length));
}

// alternative solution:

const rightRotate = (arr, n) => {
  const rotatedArr = [];
  for (let i = arr.length - n; i < arr.length; i++) {
    rotatedArr.push(arr[i]);
  }
  for (let j = 0; j < arr.length - n; j++) {
    rotatedArr.push(arr[j]);
  }
  return rotatedArr;
}
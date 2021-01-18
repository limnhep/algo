// i: given an array of integer, negative, postive, or zero
// o: rotate right elements by n and concat with the elements up to n

const rightRotate = (arr, n) => {
  return (arr.splice(arr.length - n)).concat(arr.splice(0, arr.length));
}
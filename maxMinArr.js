// i: sortedArr, integer ranges from smallest to largest
// o: an array that

const maxMin = (sortedArr) => {
  const resultArr = [];
  for (let i = 0; i < Math.floor((arr.length / 2)); i++) {
    resultArr.push(arr[arr.length - (i + 1)]);
    resultArr.push(arr[i]);
  }
  if (arr.length % 2) {
    resultArr.push(arr[Math.floor(arr.length / 2)])
  }
  return resultArr;
}
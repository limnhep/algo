// i: array of numbers
// o: find the first unique number

const findFirstUnique = (arr) => {
  const obj = {};
  const uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    const currEl = arr[i];
    if (currEl in obj) {
      obj[currEl]++;
    } else {
      obj[currEl] = 1;
    }
  }
  for (let key of obj) {
    if (obj[key] === 1) {
      uniqueArr.push(key);
    }
  }
  const lastEl = unique.length - 1;
  return uniqueArr[lastEl];
}
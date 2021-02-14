function runLengthEncoding(string) {
  let currLengthRun = 1;
  let decodedArr = [];
  for (let i = 1; i < string.length; i++) {
    if (string[i] !== string[i - 1] || currLengthRun === 9) {
      decodedArr.push(currLengthRun.toString());
      decodedArr.push(string[i - 1]);
      currLengthRun = 0;
    }
    currLengthRun++;
  }
  decodedArr.push(currLengthRun.toString());
  decodedArr.push(string[string.length - 1]);
  return decodedArr.join('');
}
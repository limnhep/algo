const reArrange = (array) => {
  let left = 0;
  let right = 0;
  let temp = 0;
  while (right < array.length) {
    if (array[right] < 0) {
      if (right !== left) {
        temp = array[right];
        array[right] = array[left];
        array[left] = temp;
      }
      left++;
    }
    right++;
  }
  return array;
}

const arrayExample = [-2, -3, -4, 2, 1, 4];
const result = reArrange(arrayExample);
console.log(result);

/*
  Complexity Analysis:
    Time: O(n)
    Space: O(1)
*/
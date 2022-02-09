/**
 * @param {number[]} arr
 * @return {number[]}
 */
/*
    @param {number[]} arr
    @return {number[]} modified in-place
    @strategy
        - traverse from right to left
            - store the current number in the temp variable
            - reassign the current number to the max
            - get the max between max and current number
        - return arr
*/
var replaceElements = function (arr) {
  let temp = 0;
  let max = 0;

  max = arr[arr.length - 1];
  arr[arr.length - 1] = -1;
  for (let right = arr.length - 2; right >= 0; right--) {
    temp = arr[right];
    arr[right] = max;
    max = Math.max(max, temp);
  }
  return arr;
};

/*
  time: O(n)
  space: O(1)
*/
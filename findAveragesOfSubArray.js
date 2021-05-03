/*
  Given an array, find the average of all contiguous subarrays of size ‘K’ in it.

  i: an array of both negative and position interger
  o: an array that contains the averages of all continguous subarrays of size 'K'
*/

const findSubArrayAverage = (arr, k) => {
  const result = [];
  let left = 0;
  let right = 0;
  let sum = 0;
  for (right = 0; right < arr.length; right++) {
    sum += arr[right];
    while (right - left + 1 >= k) {
      result.push(sum / k);
      sum -= arr[left];
      left++;
    }
  }
  return result;
}

// time: O(n) where n is the number of elements in the given input array
// space: O(n) where n is the number of subarray base don the size 'K'

const array = [1, 3, 2, 6, -1, 4, 1, 8, 2];
const kSize = 5;
console.log(findSubArrayAverage(array, kSize));
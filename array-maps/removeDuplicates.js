// Given an arbitrarily large array of sorted integers as shown below, write a function that
// takes the array as input and removes the duplicates
// Input sample 1: [ -1, 0, 4, 5, 12, 12, 12]
// Input sample 2: { -32, -5, -5, -5, -1, 0,  0, 0, 0, 2, 3, 8, 10, 11, 11, 11, 11, 11, 15 }
// Input sample 3: { 15, 15, 15, 15, 15, 21, 22, 22, 23, 28, 31 }
/*
    i: an array of integers
    o: an array with duplicated integers removed
    ec: no weird input integer
    -Important: time and space matter -
*/
/*
     index: 0...6
                    v
    [ -1, 0, 4, 5, 12, 12, 12 13]
                              ^
               v
    [ 5,  12, 12, 12 13]
                      ^
*/
// Approach 1
const removeDuplicates1 = (anArrayOfIntegers) => {
  let left = 0;
  for (let right = 1; right < anArrayOfIntegers.length; right++) {
    if (anArrayOfIntegers[left] !== anArrayOfIntegers[right]) {
      left++;
      anArrayOfIntegers[left] = anArrayOfIntegers[right];
    }
  }
  return anArrayOfIntegers.slice(0, left + 1); // Issue: space complexity
}

const test1 = [15, 15, 15, 15, 15, 21, 22, 22, 23, 28, 31];
console.log(`removeDuplicates: test1 => ${removeDuplicates1(test1)}`);
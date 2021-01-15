// write a function that return a new metrix that represents the original array, but rotated 90 degree clockwise (to the right).

// i: array of arrays of integer
// o: array of arrays of integer

const rotateClockwise = (metrix) => {
  const newMetrix = metrix[0].map(() => []);
  for (let i = 0; i < metrix.length; i++) {
    for (j = 0; j < metrix[0].length; j++) {
      newMetrix[j][metrix.length - 1 - i] = metrix[i][j];
    }
  }
  return newMetrix;
}

// time: O(n) because each item is being processed once only.
// space: O(n)
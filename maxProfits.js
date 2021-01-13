// Given an array of integers, find the max profit between buy and sell; the order must be chronological order
// i: an array of integers
// o: an integer that presents the max profit possible from buying low and selling high

const maxProfits = (prices) => {
  let minPrice = Infinity; // set minPrice to Infinity
  let maxPrice = 0; // set maxPrice to 0
  for (let currPrice of prices) { // iterate over each element
    minPrice = Math.min(currPrice, minPrice); // compare and store the min price
    maxPrice = Math.max((currPrice - minPrice), maxPrice); // compare and store the max price
  }
  return maxPrice; // returns the max price
}
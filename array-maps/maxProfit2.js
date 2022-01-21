/**
 * @param {number[]} prices
 * @return {number}
 */

/*
    @param {number[]} prices
    @return {number}
    @strategy:
        => create two variables to keep track of min and max
        => traverse over each element, and store the current min
        => currentmax will be currentmax or currentmax - current min

        [7, 1, 5, 3, 6, 4]
            ^
         currMin = 1
         currMax = (currMax, currenNum - currMin)
*/
var maxProfit = function (prices) {
  let currMin = Number.POSITIVE_INFINITY;
  let currMax = 0;
  for (let i = 0; i < prices.length; i++) {
    const currNum = prices[i];
    currMin = Math.min(currMin, currNum);
    currMax = Math.max(currMax, currNum - currMin);
  }
  return currMax;
};

/*
  time: O(n)
  space: O(1)
*/
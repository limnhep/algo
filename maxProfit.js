/*
    i: an array of prices
    o: a price that represents that the maximum profit possible in the given array
    e: prices can't be negative
    strategy: create placeholders for min and max and identify the most profitable positions by substracting max from min
*/
var maxProfit = function (prices) {
  let max = 0,
    min = Infinity;
  for (let i = 0; i < prices.length; i++) {
    min = Math.min(prices[i], min);
    max = Math.max(prices[i] - min, max);
  }
  return max;
};

// time: O(n)
// space: O(1)
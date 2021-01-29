var maxProfit = function (prices) {
  let max = 0,
    min = Infinity,
    i = 0;
  while (i < prices.length) {
    min = Math.min(prices[i], min);
    max = Math.max(prices[i] - min, max);
    i++
  }
  return max;
};
// time: O(n)
// space: O(1)
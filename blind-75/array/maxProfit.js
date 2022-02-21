/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/

/*
    @param {number[]}
    @return {number}
    @requirement
        => get max profit
            => note: buy low and sell high
    @strategy
        =>  traverse over each number of numbers
            => keep track of the minimum price since we are buying low and selling high
            => keep track between the currMaxProfit and its currPrice - lowestPriceBought
        => if going w/ strategy, the time and space complexity analysis is:
            => time: O(n) where each price being seen at least once
            => space: O(1)
*/

(function main() {
  const maxProfit = (prices) => {
    let currMin = Number.POSITIVE_INFINITY;
    let maxProfit = 0;
    for (const price of prices) {
      currMin = Math.min(currMin, price);
      maxProfit = Math.max(maxProfit, price - currMin);
    }
    return maxProfit;
  }
  const inputPrices = [17, 1, 2, 4];
  const inputPrices1 = [7, 1, 5, 3, 6, 4];
  const result = maxProfit(inputPrices);
  const result1 = maxProfit(inputPrices1);
  console.log(`=> Expected 3 => ${result}`);
  console.log(`=> Expected 5 => ${result1}`);
})();
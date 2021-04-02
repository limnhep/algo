/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.



Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.


Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104
Accepted
1,253,956
Submissions
2,421,112
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
/*
    input: an array of integers, prices
    output: a maximum profit, an integer. If there is no max profit, then return 0.
    strategy:
        - traverse over each element
        - keep track of both min and max
        - return max
*/
var maxProfit = function (prices) {
  let min = Infinity;
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    // [7,1,5,3,6,4];
    // min = 1;
    // max = 5;
    min = Math.min(prices[i], min);
    max = Math.max(max, prices[i] - min);
  }
  return max;
};

// time: O(n), where n is length of the array
// space: O(1)
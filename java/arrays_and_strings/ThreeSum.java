/*
  @request: Given an array of integers, find three elements that add up to 200
  @param: An array of prices
  @return: int[][]
*/

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Arrays;

class ThreeSum {
  public static int[][] find3Sum(int[] prices) {
    ArrayList<int[]> result = new ArrayList<>();
    Arrays.sort(prices);
    for (int i = 0; i < prices.length; i++) {
      if (prices[i] > 200)
        break;
      if (i == 0 || prices[i - 1] != prices[i]) {
        TwoProducts(prices, i, result);
      }
    }
    return result.toArray(new int[result.size()][]);
  }

  public static void TwoProducts(int[] prices, int i, ArrayList<int[]> result) {
    HashSet<Integer> seen = new HashSet<>();
    int j = i + 1;
    while (j < prices.length) {
      int complimentNum = 200 - prices[i] - prices[j];
      if (seen.contains(complimentNum)) {
        result.add(new int[] { complimentNum, prices[i], prices[j] });
        while (j + 1 < prices.length && prices[j] != prices[j + 1]) {
          j++;
        }
      }
      seen.add(prices[j]);
      j++;
    }
  }

  public static void main(String[] args) {
    int[] prices = new int[] { 40, 10, 40, 20, 49, 1, 150, 120 };
    System.out.println(Arrays.deepToString(ThreeSum.find3Sum(prices)));
    ;
  }
}
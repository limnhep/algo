/*
  @request: Find all missing numbers in the given input array. Given an array, 0 to n - 1, find the missing numbers.
  @param: int[] => nums
  @return: ArrayList => missing numbers
*/

import java.util.ArrayList;

class FindAllMissingNumbers {
  public static ArrayList<Integer> findMisingNumbers(int[] nums) {
    ArrayList<Integer> resultArrList = new ArrayList<>();
    int i = 0;
    while (i < nums.length) {
      if (nums[i] != nums[nums[i] - 1]) {
        swap(nums, i, nums[i] - 1);
      } else {
        i++;
      }
    }
    for (int k = 0; k < nums.length; k++) {
      if (k + 1 != nums[k]) {
        resultArrList.add(k + 1);
      }
    }
    return resultArrList;
  }

  private static void swap(int[] nums, int i, int j) {
    int tempNum = nums[i];
    nums[i] = nums[j];
    nums[j] = tempNum;
  }

  public static void main(String[] args) {
    int[] inputArray = new int[] { 2, 1, 4, 4, 5, 7, 5 };
    ArrayList<Integer> outputArray = FindAllMissingNumbers.findMisingNumbers(inputArray);
    for (Integer num : outputArray) {
      System.out.println(num);
      System.out.println();
    }
  }
}
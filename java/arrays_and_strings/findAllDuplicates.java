/*
  @request: Find all duplicates number in the input array
  @param: int[] => nums
  @return: ArrayList<Integer> => listOfDuplicateNumbers
*/

import java.util.ArrayList;

class FindAllDuplicates {
  public static ArrayList<Integer> findAllDuplicates(int[] nums) {
    ArrayList<Integer> duplicates = new ArrayList<>();
    int i = 0;
    while (i < nums.length) {
      if (nums[i] != nums[nums[i] - 1]) {
        swap(nums, i, nums[i] - 1);
      } else {
        i++;
      }
    }
    for (int j = 1; j < nums.length; j++) {
      if (nums[j] == nums[j - 1]) {
        duplicates.add(nums[j]);
      }
    }
    return duplicates;
  }

  public static void swap(int[] nums, int i, int j) {
    int tempNum = nums[i];
    nums[i] = nums[j];
    nums[j] = tempNum;
  }

  public static void main(String[] args) {
    int[] inputArray = new int[] { 1, 2, 4, 2, 5, 7, 7 };
    ArrayList<Integer> listOfDuplicateNumbers = FindAllDuplicates.findAllDuplicates(inputArray); // Expect 2, 7
    for (Integer num : listOfDuplicateNumbers) {
      System.out.println(num);
      System.out.println();
    }
  }
}

/*
 * Complexity Analysis:
 *
 * Time: O(n) Space: O(1)
 */
/*
  @request: Find a duplicate without using an extra space
  @param: int[] => nums
  @return: int => the duplicate number
*/

class FindDuplicate {
  public static int findDuplicate(int[] nums) {
    int i = 0;
    while (i < nums.length) {
      if (nums[i] != nums[nums[i] - 1]) {
        swap(nums, i, nums[i] - 1);
      } else {
        i++;
      }
    }
    for (int j = 0; j < nums.length; j++) {
      if (nums[j] == nums[j + 1])
        return nums[j];
    }
    return nums.length;
  }

  private static void swap(int[] nums, int i, int j) {
    int tempNum = nums[i];
    nums[i] = nums[j];
    nums[j] = tempNum;
  }

  public static void main(String[] args) {
    int[] nums = new int[] { 1, 3, 3, 2, 5 };
    System.out.println(FindDuplicate.findDuplicate(nums)); // Expect 3
  }
}

/*
 * Complexity Analysis:
 *
 * Time: O(n) Space: O(1)
 */
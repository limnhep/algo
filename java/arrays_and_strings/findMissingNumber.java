/*
  @request: Find missing number in the input array. The elements are starting from 0 to n. Must swap in-place.
  @params: int[] => nums
  @return: int => num
*/

class MissingNumber {
  public static int findMissingNumber(int[] nums) {
    int i = 0;
    while (i < nums.length) {
      if (nums[i] < nums.length && nums[i] != nums[nums[i]]) {
        swap(nums, i, nums[i]);
      } else {
        i++;
      }
    }
    for (int j = 0; j < nums.length; j++) {
      if (j != nums[j]) {
        return j;
      }
    }
    return nums.length;
  }

  private static void swap(int[] nums, int i, int j) {
    int tempNum = nums[i];
    nums[i] = nums[j];
    nums[j] = tempNum;
  }

  public static void main(String[] args) {
    int[] inputArray = new int[] { 0, 2, 1, 4 };
    System.out.println(MissingNumber.findMissingNumber(inputArray)); // Expect the result to be 3
  }
}

/*
 * Complexity Analysis:
 *
 * Time: O(n) Space: O(1)
 */
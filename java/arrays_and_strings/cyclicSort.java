/*

  @request: Sort each element within the array in-place
  @param: int[] => nums
  @return: int[] => sorted nums
*/
class CyclicSort {
  public static void sort(int[] nums) {
    int i = 0;
    while (i < nums.length) {
      int j = nums[i] - 1;
      if (nums[i] != nums[j]) {
        swap(nums, i, j);
      } else {
        i++;
      }
    }
  }

  // Swap element at i with element at j and element at j with element at i
  private static void swap(int[] nums, int i, int j) {
    int tempNum = nums[i];
    nums[i] = nums[j];
    nums[j] = tempNum;
  }

  public static void main(String[] args) {
    int[] inputArray = new int[] { 1, 3, 4, 2, 5 };
    CyclicSort.sort(inputArray);
    for (int num : inputArray) {
      System.out.println(num);
      System.out.println();
    }
  }
}

/*
 * Complexity Analysis:
 *
 * time: O(n) where n is the number of elements in the given input array -
 * space: O(1)
 */

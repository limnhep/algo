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

  // swap num at i w/ j and j w/ i
  private static void swap(int[] nums, int i, int j) {
    int temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }

  public static void main(String[] args) {
    int[] array = new int[] { 3, 1, 5, 4, 2 };
    CyclicSort.sort(array);
    for (int num : array) {
      System.out.println(num + " ");
    }
  }
}

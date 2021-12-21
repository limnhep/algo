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
    for (int k = 0; k < nums.length; k++) {
      if (nums[k] != k)
        return k;
    }
    return nums.length;
  }

  private static void swap(int[] nums, int i, int j) {
    int temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }

  public static void main(String[] args) {
    int[] arr = new int[] { 1, 2, 5, 4, 0 };
    System.out.println(MissingNumber.findMissingNumber(arr));
  }
}

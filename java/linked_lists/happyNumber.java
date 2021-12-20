class HappyNumber {

  public static boolean find(int num) {
    int slow = num;
    int fast = num;
    do {
      slow = findSquareSum(slow);
      fast = findSquareSum(findSquareSum(fast));
    } while (slow != fast);
    return slow == 1;
  }

  private static int findSquareSum(int num) {
    int digit = 0;
    int sum = 0;
    while (num > 0) {
      digit = num % 10;
      sum += digit * digit;
      num /= 10;
    }
    return sum;
  }

  public static void main(String[] args) {
    System.out.println("Expected the result to be true: " + HappyNumber.find(23));
    System.out.println("Expected the result to be false: " + HappyNumber.find(12));
  }
}
class PermutationOfPalindrome {
  public static void main(String[] args) {
    String inputStr1 = "Tact Coa";
    System.out
        .println("Expected the result to be true: " + PermutationOfPalindrome.isPermutationOfPalindrome(inputStr1));
  }

  static boolean isPermutationOfPalindrome(String str) {
    int oddCounts = 0;
    int[] charFrequencyArr = new int[Character.getNumericValue('z') - Character.getNumericValue('a') + 1];
    for (char character : str.toCharArray()) {
      int index = PermutationOfPalindrome.getCharNumber(character);
      if (index != -1) {
        charFrequencyArr[index]++;
        if (charFrequencyArr[index] % 2 == 1) {
          oddCounts++;
        } else {
          oddCounts--;
        }
      }
    }
    return oddCounts <= 1;
  }

  static int getCharNumber(Character c) {
    int numA = Character.getNumericValue('a');
    int numZ = Character.getNumericValue('z');
    int numC = Character.getNumericValue(c);
    if (numA <= numC && numC <= numZ)
      return numC - numA;
    return -1;
  }
}
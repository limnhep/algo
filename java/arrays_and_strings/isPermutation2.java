class Permutation {
  public static void main(String[] args) {
    String inputStr1 = "abcde";
    String inputStr2 = "edacb";
    String inputStr3 = "aac";
    String inputStr4 = "cab";
    System.out.println("inputStr1 and inputStr2 are true: " + Permutation.isPermutation(inputStr1, inputStr2));
    System.out.println("inputStr3 and inputStr4 are false: " + Permutation.isPermutation(inputStr3, inputStr4));
  }

  static boolean isPermutation(String str1, String str2) {
    if (str1.length() > 256 || str2.length() > 256)
      return false;
    if (str1.length() != str2.length())
      return false;
    int[] charCounts = new int[256];
    for (int i = 0; i < str1.length(); i++) {
      charCounts[str1.charAt(i)]++;
    }
    for (int j = 0; j < str2.length(); j++) {
      charCounts[str2.charAt(j)]--;
      if (charCounts[str2.charAt(j)] < 0)
        return false;
    }
    return true;
  }
}
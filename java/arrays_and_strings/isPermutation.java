class Permutation {
  public static void main(String[] args) {
    String inputStr1 = "abc";
    String inputStr2 = "cba";
    System.out.println("Expected the result to be true: " + Permutation.isPermutation(inputStr1, inputStr2));
  }

  static String sort(String str) {
    char[] arrayOfChars = str.toCharArray();
    java.util.Arrays.sort(arrayOfChars);
    return new String(arrayOfChars);
  }

  static boolean isPermutation(String str1, String str2) {
    if (str1.length() != str2.length())
      return false;
    return Permutation.sort(str1).equals(Permutation.sort(str2));
  }
}
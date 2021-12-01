class SubString {
  public static void main(String[] args) {
    String inputStr1 = "watermelon";
    String inputStr2 = "melonwater";
    System.out.println("Expected result to be true: " + SubString.subString(inputStr1, inputStr2));
  }

  static boolean subString(String str1, String str2) {
    int len = str1.length();
    if (len > 0 && str2.length() == len) {
      String str1str1 = str1.concat(str1);
      return SubString.isSubString(str1str1, str2);
    }
    return false;
  }

  static boolean isSubString(String concatStr, String str) {
    String concatStrLowerCase = concatStr.toLowerCase();
    String strLowerCase = str.toLowerCase();
    return concatStrLowerCase.contains(strLowerCase);
  }
}
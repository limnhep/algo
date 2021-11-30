class UniqueChars {
  public static void main(String[] args) {
    String inputStr1 = "abcde";
    String inputStr2 = "acccdde";
    System.out.println("inputStr1 is true: " + UniqueChars.isUniqueChars(inputStr1));
    System.out.println("inputStr2 is false: " + UniqueChars.isUniqueChars(inputStr2));
  }

  static boolean isUniqueChars(String str) {
    if (str.length() > 256)
      return false;
    boolean[] setOfChars = new boolean[256];
    for (int i = 0; i < str.length(); i++) {
      int value = str.charAt(i);
      if (setOfChars[value]) {
        return false;
      }
      setOfChars[value] = true;
    }
    return true;
  }
}
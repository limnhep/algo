class OneAway {
  public static void main(String[] args) {
    String inputStr1 = "pale";
    String inputStr2 = "bae";
    String inputStr3 = "bale";
    String inputStr4 = "ple";
    System.out.println("inputStr1 and inputStr2 are false: " + OneAway.oneAway(inputStr1, inputStr2));
    System.out.println("inputStr2 and inputStr3 are true: " + OneAway.oneAway(inputStr2, inputStr3));
    System.out.println("inputStr1 and inputStr4 are true: " + OneAway.oneAway(inputStr1, inputStr4));
  }

  static boolean oneAway(String str1, String str2) {
    if (str1.length() > str2.length() || str2.length() > str1.length())
      return false;
    int[] charsStorage = new int[Character.getNumericValue('z') - Character.getNumericValue('a') + 1];
    int count = 0;
    for (char c : str1.toCharArray()) {
      int index = Character.getNumericValue(c);
      charsStorage[index]++;
    }
    for (char c : str2.toCharArray()) {
      int index = Character.getNumericValue(c);
      charsStorage[index]--;
    }
    for (int i = 0; i < charsStorage.length; i++) {
      if (charsStorage[i] > 0)
        count++;
    }
    return count <= 1;
  }
}
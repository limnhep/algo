class SpaceReplacement {
  public static void main(String[] args) {
    String inputStr1 = "Mr John Smith   ";
    String resultStr = "Mr%20John%20Smith";
    System.out.println("inputStr1 is Mr%20John%20Smith: " + SpaceReplacement.replaceSpaces(inputStr1, 13));
    System.out.println(resultStr.equals(SpaceReplacement.replaceSpaces(inputStr1, 13)));
  }

  static String replaceSpaces(String str, int trueLength) {
    int numberOfEmptySpaces = SpaceReplacement.spaceCounts(str, 0, trueLength, " ");
    char[] strChars = str.toCharArray();
    int newIndex = trueLength - 1 + numberOfEmptySpaces * 2;
    char[] resultStrChars = new char[newIndex + 1];
    if (newIndex + 1 < str.length())
      resultStrChars[newIndex + 1] = '\0';
    for (int j = trueLength - 1; j >= 0; j--) {
      if (String.valueOf(strChars[j]).equals(" ")) {
        resultStrChars[newIndex] = '0';
        resultStrChars[newIndex - 1] = '2';
        resultStrChars[newIndex - 2] = '%';
        newIndex -= 3;
      } else {
        resultStrChars[newIndex] = strChars[j];
        newIndex -= 1;
      }
    }
    // System.out.println(java.util.Arrays.toString(resultStrChars));
    // System.out.println(resultStrChars.length);
    return new String(resultStrChars).trim();
  }

  static int spaceCounts(String str, int startIndex, int endIndex, String target) {
    char[] strChars = str.toCharArray();
    int count = 0;
    for (int i = startIndex; i < strChars.length; i++) {
      if (String.valueOf(strChars[i]).equals(target))
        count++;
    }
    return count;
  }
}
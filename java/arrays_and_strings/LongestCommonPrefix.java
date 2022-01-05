class LongestCommonPrefix {
  private static String findTheLongestCommonPrefix(String[] strs) {
    if (strs.length == 0 || strs == null)
      return "";
    for (int i = 0; i < strs[0].length(); i++) {
      char c = strs[0].charAt(i);
      for (int j = 1; j < strs.length; j++) {
        if (strs[j].length() == i || strs[j].charAt(i) != c)
          return strs[0].substring(0, i);
      }
    }
    return strs[0];
  }

  public static void main(String[] args) {
    String[] inputStringArray = { "flower", "flow", "flight" };
    System.out.println(LongestCommonPrefix.findTheLongestCommonPrefix(inputStringArray)); // "fl"
  }
}
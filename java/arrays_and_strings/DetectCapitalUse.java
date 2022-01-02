/*
  @request: Given a string, the following conditions must be met in order for the string to be a valid:
    - All letters in this word are capitals, like "USA".
    - All letters in this word are not capitals, like "leetcode".
    - Only the first letter in this word is capital, like "Google".
  @param:
  @result:
*/

class DetectCapitalUse {
  private static boolean detechCapitalUse(String s) {
    if (s.equals(s.substring(0, 1).toUpperCase().concat(s.substring(1).toLowerCase())))
      return true;
    if (s.equals(s.toUpperCase()))
      return true;
    if (s.equals(s.toLowerCase()))
      return true;
    return false;
  }

  public static void main(String[] args) {
    String inputStr1 = "Hello";
    String inputStr2 = "hello";
    String inputStr3 = "HELLO";
    String inputStr4 = "HEllo";
    System.out.println(DetectCapitalUse.detechCapitalUse(inputStr1)); // true
    System.out.println(DetectCapitalUse.detechCapitalUse(inputStr2)); // true
    System.out.println(DetectCapitalUse.detechCapitalUse(inputStr3)); // true
    System.out.println(DetectCapitalUse.detechCapitalUse(inputStr4)); // false
  }
}
/*
  @request: Reverse each word while preserving whitespace and initial word order
  @param: String str
  @result: String
*/

class ReverseWordII {
  private static String reverseWord(String str) {
    StringBuilder word = new StringBuilder();
    StringBuilder wordsResult = new StringBuilder();
    for (char eachChar : str.toCharArray()) {
      if (eachChar != ' ') {
        word.append(eachChar);
      } else {
        wordsResult.append(word.reverse());
        wordsResult.append(' ');
        word.setLength(0);
      }
    }
    wordsResult.append(word.reverse());
    return wordsResult.toString();
  }

  public static void main(String[] args) {
    String inputStr = "Let's leetcode!";
    System.out.println(ReverseWordII.reverseWord(inputStr)); // s'teL !edocteel
  }
}

// time: O(n)
// space: O(n)
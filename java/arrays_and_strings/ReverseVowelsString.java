class ReverseVowelsString {
  private static String reverseVowelsString(String s) {
    char[] charArray = s.toCharArray();
    String vowels = "aeiouAEIOU";
    int left = 0;
    int right = s.length() - 1;
    while (left < right) {
      while (left < right && !vowels.contains(charArray[left] + ""))
        left++;
      while (left < right && !vowels.contains(charArray[right] + ""))
        right--;
      char temp = charArray[left];
      charArray[left] = charArray[right];
      charArray[right] = temp;
      left++;
      right--;
    }
    return new String(charArray);
  }

  public static void main(String[] args) {
    String inputStr = "hello";
    System.out.println(ReverseVowelsString.reverseVowelsString(inputStr)); // holle
  }
}
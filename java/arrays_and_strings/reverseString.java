/*
 * @request: given an array of characters, reverse each character in-place
 *
 * @param: char[] s
 *
 * @return: void
 */

class ReverseString {

  private static void reverseString(char[] s) {
    int left = 0;
    int right = s.length - 1;
    while (left < right) {
      char temp = s[left];
      s[left] = s[right];
      s[right] = temp;
      left++;
      right--;
    }
  }
}

/*
 * Complexity Analysis:
 *
 * Time: O(n) Space: O(1)
 */
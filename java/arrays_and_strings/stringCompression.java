import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class StringCompression {
  public static void main(String[] args) {
    String inputStr = "aaabbbccddee";
    System.out.println("Expected result is a3b3c2d2e2: "
        + StringCompression.compressedString(StringCompression.compressedString(inputStr), inputStr));
    System.out.println("Expected result to be true: " + ("a3b3c2d2e2")
        .equals(StringCompression.compressedString(StringCompression.compressedString(inputStr), inputStr)));
  }

  static String compressedString(String resultStr, String originalStr) {
    return resultStr.length() > originalStr.length() ? originalStr : resultStr;
  }

  static String compressedString(String str) {
    StringBuilder resultStr = new StringBuilder();
    Map<String, Integer> freqCharMap = new HashMap<>();
    for (char c : str.toCharArray()) {
      String strKey = String.valueOf(c);
      freqCharMap.put(strKey, freqCharMap.getOrDefault(strKey, 0) + 1);
    }
    for (String key : freqCharMap.keySet()) {
      resultStr.append(key);
      resultStr.append(String.valueOf(freqCharMap.get(key)));
    }
    return String.valueOf(resultStr);
  }
}
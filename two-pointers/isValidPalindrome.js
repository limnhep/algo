(function main() {
  /*
      @param {string - str}
      @return {boolean - true / false}
      @requiremet
          => determine if the str is a valid palindrome. Ignore nonalphanumeric characters.
      @strategy
          => use two pointer opposite direction method
              => there could be multiple nonalphanumeric characters, therefore we want to skip all of them
                  => use a while loop
                      => if char on the left is nonalphanumeric, skip
                      => if char on the right is nonalphanumeric, skip
                      => if char on left and char on right are not the same, then return false
                      => move the left and right pointer
              => exit out of loop indices that the result is true
      @time
          => O(n)
      @space
          => O(1); however, if used str is modified directly since str is immutable
  */
  const isValidPalindromeFunc = (str) => {
    let left = 0;
    let right = str.length - 1;
    while (right > left) {
      if (right > left && !isAlphaNumeric(str.charAt(left))) left++; //skip left
      if (right > left && !isAlphaNumeric(str.charAt(right))) right--;
      if (str.charAt(left).toLowerCase() !== str.charAt(right).toLowerCase()) return false;
      left++;
      right--;
    };
    return true;
  };
  const isAlphaNumeric = (c) => /^[a-zA-Z0-9]*$/.test(c);

  const strList = ["Do geese see God", "Was it a car or a cat I saw?", "A brown fox jumping over"];
  for (const str of strList) {
    console.log("Valid Palindrome: ", isValidPalindromeFunc(str));
  };
})();

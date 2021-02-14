const isPalindrome = (string) => {
  let left = 0,
    right = string.length - 1;
  while (left < right) {
    if (string[left] !== string[right]) return false;
    left++;
    right--;
  }
  return true;
}
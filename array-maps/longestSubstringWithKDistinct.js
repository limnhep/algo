/*
  Given a string, find the length of the longest substring in it with no more than K distinct characters.

  You can assume that K is less than or equal to the length of the given string.

  Example 1:

  Input: String="araaci", K=2
  Output: 4
  Explanation: The longest substring with no more than '2' distinct characters is "araa".
  Example 2:

  Input: String="araaci", K=1
  Output: 2
  Explanation: The longest substring with no more than '1' distinct characters is "aa".
  Example 3:

  Input: String="cbbebi", K=3
  Output: 5
  Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
*/

/*
  i: a string of characters
  o: an integer that denotes the longest substring with no more than k size distinct characters
  strategy:
    // iterate over each character
      // add each character to a hashmap and keep the number of its occurrences
        // while the size of the hashmap is greater than or equal to k size
          // find the max substring
          // reduce the occurrence
          // shrink the size of the window
    // return the max substring
*/

const longestSubstringWithKDistinct = (str, k) => {
  if (str.length <= 1) return str.length;
  const hashMap = {};
  let left = 0;
  let maxSubStr = 0;
  for (let right = 0; right < str.length; right++) {
    const currChar = str[right];
    hashMap[currChar] = (hashMap[currChar] || 0) + 1;
    while (Object.keys(hashMap).length > k) {
      hashMap[str[left]]--;
      if (hashMap[str[left]] === 0) delete hashMap[str[left]];
      left++;
    }
    maxSubStr = Math.max(maxSubStr, right - left + 1);
  }
  return maxSubStr;
}

// TIME: O(N)
// SPACE: O(N)

const string = "araaci";
const sizeK = 2;
const result = longestSubstringWithKDistinct(string, sizeK);
console.log('Expected 4: ' + result); // CHECK

const string1 = "araaci";
const sizeK1 = 1;
const result1 = longestSubstringWithKDistinct(string1, sizeK1);
console.log('Expected 2: ' + result1); // CHECK

/*
    Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

    Input: nums = [1,2,3,1]
    Output: true
    Input: nums = [1,2,3,4]
    Output: false

    @param {number[]}
    @return {boolean}
    @requirement
        => determine if the number in the given array contains duplicated numbers
    @strategy
        => a few strategies:
            => option 1
                => sort the array from smallest to largest and check if the prev and next numbers are the same, if they are, then return true; otherwise, return false by default
                    => time: O(nlogn) due to sorting
                    => space: O(logn) due to sorting
            => option 2
                => use two pointers
                    => have left and right pointers
                        => traverse inward, if two numbers are the same then return true
                        => decrease the left and right pointer after each check
                        => worst case is traversing until one hits the middle number
                        => time and space complexity for this algorithm is
                            => time O(n)
                            => space: O(1)
*/

(function main() {
  const containDuplicate = (numbers) => {
    let left = 0;
    let right = numbers.length - 1;
    while (left <= right) {
      if (numbers[left] === numbers[right]) return true;
      left += 1;
      right -= 1;
    }
    return false;
  }

  const inputNums = [1, 2, 3, 1];
  const inputNums1 = [1, 2, 3, 4];
  const result = containDuplicate(inputNums);
  const result1 = containDuplicate(inputNums1);
  console.log(`=> Expected true => ${result}`);
  console.log(`=> Expected false => ${result1}`);
})();
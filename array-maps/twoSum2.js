/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/*
    @param {number[]} nums
    @param {number} target
    @return {number[]} => indices
    @strategy:
        => find two numbers within the input array that add to the target
        => does time matter? if time matters, but space doesn't matter, we could use a hashMap to solve this problem
        => does space matter? if space matters, then we could solve the array first and then use two pointers technique to solve this problem

        => solve using hashMap:
            => traverse over each element and set it in the hashMap
            => if found inside the hashMap, then return the indices of the elements that add up to the targetSum
         v
        [3, 2, 4]

         {
            3: 0,
            2: 1,
            4: 2
         }
         complimentaryPair: if the complimentary exists in the the hashMap, then return the two indices
*/

var twoSum = function (nums, target) {
  const complimentaryPairsHashMap = {};
  for (let i = 0; i < nums.length; i++) {
    const potentialPair = target - nums[i];
    if (potentialPair in complimentaryPairsHashMap) {
      return [complimentaryPairsHashMap[potentialPair], i];
    }
    const currentNum = nums[i];
    complimentaryPairsHashMap[currentNum] = i;
  }
  return resultIndices;
};

/*
  time: O(n)
  space: O(n)
*/
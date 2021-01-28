var kidsWithCandies = function (candies, extraCandies) {
  const sortedArr = [...candies].sort((a, b) => b - a);
  const resultArr = [];
  const greatestNumOfCandies = sortedArr[0];
  return candies.map((val) => greatestNumOfCandies - val <= extraCandies ? true : false);
};

// time: O(n)
// space: O(1)

// alternative solution without sorting:

var kidsWithCandies = function (candies, extraCandies) {
  const resultArr = [];
  const greatestNumOfCandies = Math.max.apply(null, candies);
  return candies.map((val) => greatestNumOfCandies - val <= extraCandies ? true : false);
};
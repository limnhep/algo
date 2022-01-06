/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length <= 1) return intervals;
  intervals.sort(orderByAsc);
  const mergedIntervals = [];
  let start = intervals[0][0];
  let end = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    const startInterval = intervals[i][0];
    const endInterval = intervals[i][1];
    if (startInterval <= end) {
      end = Math.max(endInterval, end);
    } else {
      mergedIntervals.push([start, end]);
      start = startInterval;
      end = endInterval;
    }
  }
  mergedIntervals.push([start, end]);
  return mergedIntervals;
};

const orderByAsc = function (a, b) {
  if (a[0] < b[0]) return -1;
  if (a[0] > b[0]) return 1;
  if (a[0] === b[0]) return 0;
}

/*
  time: O(nlogn)
  space: O(1)
*/
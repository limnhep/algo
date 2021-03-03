function groupAnagrams(strs) {
  const obj = {};
  for (const str of strs) {
    const strArr = Array(26).fill(0);
    for (const char of str) {
      const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
      strArr[index] += 1;
    }
    const key = strArr;
    if (key in obj) {
      obj[key].push(str);
    } else {
      obj[key] = [str];
    }
  }
  const res = [];
  for (const key in obj) {
    res.push(obj[key]);
  }
  return res;
}

const titles = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
const queryTitle = groupAnagrams(titles);
const query = 'eat';

for (const [_, q] of Object.entries(queryTitle)) {
  if (q.includes(query)) console.log(q);
}

// time: O(n x k); n is the size of the array and k is the maximum length a string could have
// space: O(n x k);
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const obj = {};
  const arr = s.split('');
  for (let el of arr) {
    if (el in obj) {
      obj[el]++;
    } else {
      obj[el] = 1;
    }
  }
  for (let key in obj) {
    if (obj[key] === 1) {
      return arr.indexOf(key);
    }
  }
  return -1;
};
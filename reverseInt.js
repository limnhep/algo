/*
    i: an integer, x;
    o: a reversed integer, x;
    e: must be able to account for negative integer

    strategy: convert x to string to an array of string; if the first element is negative sign, reverse the rest; however, if not, reverse the array;
*/

var reverse = function (x) {
  if (x === 0) return 0;
  const intArr = Math.abs(x).toString().split('');
  const [firstEl, ...restEl] = intArr;
  return !(firstEl === '-') ? Number(intArr.reverse().join('')) : Number([firstEl].concat(restEl.reverse()).join(''));
};

// time: O(n)
// space: O(n)
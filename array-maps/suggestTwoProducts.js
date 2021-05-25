function suggestTwoProducts(itemPrices, amount) {
  const buffDict = {};
  for (let i = 0; i < itemPrices.length; i++) {
    const price = itemPrices[i];
    const remaining = amount - price;
    if (remaining in buffDict) {
      return [buffDict[remaining], i];
    } else {
      buffDict[price] = i;
    }
  }
}

// test

const itemPrices = [2, 30, 56, 34, 55, 10, 11, 20, 15, 60, 45, 39, 51];
const amount = 61;
console.log(suggestTwoProducts(itemPrices, amount));
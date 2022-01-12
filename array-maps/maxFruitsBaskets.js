(function main() {
  const maxFruitsBaskets = (fruits) => {
    const fruitsFrequency = {};
    let left = 0;
    let right = 0;
    let maxFruits = Number.NEGATIVE_INFINITY;
    for (right = 0; right < fruits.length; right++) {
      const fruit = fruits[right];
      fruitsFrequency[fruit] = (fruitsFrequency[fruit] || 0) + 1;
      if (Object.keys(fruitsFrequency).length > 2) {
        const removeFruit = fruits[left];
        fruitsFrequency[removeFruit] = fruitsFrequency[removeFruit] - 1;
        if (fruitsFrequency[removeFruit] === 0) delete fruitsFrequency[removeFruit];
        left++;
      }
      maxFruits = Math.max(maxFruits, right - left + 1);
    }
    return maxFruits;
  }
  const inputArray = ['A', 'B', 'C', 'A', 'C'];
  const inputArray1 = ['A', 'B', 'C', 'B', 'B', 'C'];
  const resultFruitsBaskets = maxFruitsBaskets(inputArray);
  const resultFruitsBaskets1 = maxFruitsBaskets(inputArray1);
  console.log(resultFruitsBaskets); // 3
  console.log(resultFruitsBaskets1); // 5
})();
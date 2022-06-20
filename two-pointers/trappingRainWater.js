(function main() {
  /*
      @param {numbers[] - numbers}
      @return {number - result}
      @requirement
          => find the area of trapping rain water
      @strategy
          => water = minBoundary of left or right boundary minus current elevation
      @time
          => O(n)
      @space
          => O(n)
  */

  const trappingRainWaterFunc = (numbers) => {
    const length = numbers.length;
    const leftWall = Array(length).fill(0);
    const rightWall = Array(length).fill(0);

    let totalRainTrap = 0;
    let maxLeft = numbers[0];
    let maxRight = numbers[length - 1];

    for (let i = 1; i < length; i++) {
      leftWall[i] = maxLeft;
      maxLeft = Math.max(numbers[i], maxLeft);
    };

    for (let j = length - 2; j >= 0; j--) {
      rightWall[j] = maxRight;
      maxRight = Math.max(numbers[j], maxRight);
    };

    for (let k = 0; k < length; k++) {
      let elevation = numbers[k];
      let minBoundary = Math.min(leftWall[k], rightWall[k]);
      if (minBoundary > elevation) totalRainTrap += (minBoundary - elevation);
    };

    return totalRainTrap;
  };

  const sampleInputList = [3, 2, 1, 2, 2, 3, 2];
  const trappingRainWaterResult = trappingRainWaterFunc(sampleInputList);
  console.log(trappingRainWaterResult); // 5
})();

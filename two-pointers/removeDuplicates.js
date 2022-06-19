(function main() {
  /*
      @param {number[]}
      @return {number[]}
      @requirement
          => remove duplicated numbers in-place
          @strategy
              => use two pointers technique
                  => two variables: fast and slow pointers
                      => iterate over each number
                          => if number @slow is different from number @fast, this implies
                          that it's unique; therefore, move slow pointer and replace number @slow with number @fast
                  => return the index position of slow and add one because slow indicates where the index of unique elements. Given that array is 0-based index, add one
  */
  const removeDuplicates = (numbers) => {
    let slow = 0;
    for (let fast = 0; fast < numbers.length; fast++) {
      if (numbers[slow] !== numbers[fast]) {
        slow++;
        numbers[slow] = numbers[fast];
      };
    };
    return slow + 1;
  };

  const sampleInputLists = ["0 0 1 1 1 2 2", "1 2 3", "1 1 1 1 1 1 1 1 1 1 1 1"];
  for (let i = 0; i < sampleInputLists.length; i++) {
    const list = sampleInputLists[i].split(" ").map(str => parseInt(str, 10));
    const uniqueIndexPosition = removeDuplicates(list);
    console.log("RemovedDuplicates: ", list.slice(0, uniqueIndexPosition));
  };

  /*
      time and space complexity evaluation:
          => time: O(n)
          => space: O(1)
  */
})();

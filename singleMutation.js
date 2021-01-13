// Given two strings, check if both strings are the same or are mutated by at most one character

const singleMutation = (str1, str2) => {
  if (Math.abs(str1.length - str2.length) > 1) return false;
  const newSet = new Set();
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    newSet.add(str1[i]);
  }
  for (let j = 0; j < str2.length; j++) {
    if (newSet.has(str2[j])) count++;
  }
  return (newSet.size === count) || (newSet.size - 1 === count) ? true : false;
}
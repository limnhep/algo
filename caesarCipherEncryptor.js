function caesarCipherEncryptor(string, key) {
  const encrptedArr = [];
  const newLetterIndex = key % 26;
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  for (const char of string) {
    encrptedArr.push(getNewLetter(char, newLetterIndex, alphabet));
  }
  return encrptedArr.join('');
}

function getNewLetter(char, newIndex, alphabet) {
  const newLetterIndex = alphabet.indexOf(char) + newIndex;
  return alphabet[newLetterIndex % 26];
}
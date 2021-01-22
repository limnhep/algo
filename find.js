const dogPair = [
  ['name', 'Don'],
  ['color', 'black'],
];

function getName(dog) {
  return dog.find(attribute => {
    return attribute[0] === 'name';
  })[1];
}

console.log(getName(dogPair));
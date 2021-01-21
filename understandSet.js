const dogs = [
  {
    name: 'max',
    size: 'small',
    breed: 'boston terrier',
    color: 'black'
  },
  {
    name: 'don',
    size: 'large',
    breed: 'labrador',
    color: 'black'
  },
  {
    name: 'shadow',
    size: 'medium',
    breed: 'labrador',
    color: 'chocolate'
  }
]

// GET UNIQUE COLORS
const getUniqueColors = (object) => [...object.reduce((colors, { color }) => colors.add(color), new Set())];
console.log('getUniqueColors => ');
console.log(getUniqueColors(dogs));
const findProduct = (arr) => {
  let temp = 1;
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    product[i] = temp;
    temp *= arr[i];
  }

  temp = 1;
  for (let i = arr.length - 1; i > -1; i--) {
    product[i] *= temp;
    temp *= arr[i];
  }
  return product;
}
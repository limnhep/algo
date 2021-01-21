const sortFuncByNum = (a, b) => {
  if (a.num === b.num) return 0;
  return a.num - b.num;
}

const sortFuncByStr = (a, b) => {
  if (a.str === b.str) return 0;
  return a.str > b.str ? 1 : -1;
}

const sortFuncName = (a, b) => {
  if (a.name === b.name) return 0;
  return a.name > b.name ? true : false;
}
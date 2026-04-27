function howDeep(array, level = 0) {
  return array.some((element) => Array.isArray(element))
    ? howDeep(array.flat(1), level + 1)
    : level;
}

function flatten(array) {
  return array.flat(howDeep(array));
}

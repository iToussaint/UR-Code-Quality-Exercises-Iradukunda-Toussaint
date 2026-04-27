function removeDuplicates(array) {
  return array.filter((element, index, arr) => index === arr.indexOf(element));
}

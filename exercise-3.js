function sumRecursively(array, current_sum = 0, index = 0) {
  return index === array.length
    ? current_sum
    : sumRecursively(array, current_sum + array[index], index + 1);
}

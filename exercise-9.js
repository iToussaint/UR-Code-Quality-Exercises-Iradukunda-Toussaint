function calculateMatrixSum(matrix) {
  return matrix.reduce(
    (matrix_sum, array) =>
      matrix_sum +
      array.reduce((current_sum, number) => current_sum + number, 0),
    0,
  );
}

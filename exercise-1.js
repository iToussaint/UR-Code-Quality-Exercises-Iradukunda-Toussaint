function calculateAverage(numbers) {
  return (
    numbers.reduce((current_sum, number) => current_sum + number, 0) /
    numbers.length
  );
}

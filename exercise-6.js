function maxNumber(...numbers) {
  return numbers.reduce(
    (current_max, number) => (number > current_max ? number : current_max),
    Number.NEGATIVE_INFINITY,
  );
}

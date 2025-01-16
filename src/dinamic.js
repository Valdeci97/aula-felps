function sumDinamically(numbers) {
  const total = numbers.reduce((acc, curr) => acc + curr, 0);

  return total;
}

const numbers = [1, 2, 3, 45, 56, 88, 7, 9];


console.log({ total: sumDinamically(numbers) });
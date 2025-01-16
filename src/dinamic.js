const divide = require('./divide').divide;

function sumDinamically(numbers) {
  const total = numbers.reduce((acc, curr) => acc + curr, 0);

  return total;
}

const numbers = [1, 2, 3, 45, 56, 88, 7, 9];

const total = sumDinamically(numbers);

console.log({ total, divisao: divide(total, 11) });
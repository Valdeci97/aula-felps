function sumDinamically(numbers) {
  let total = 0;
  
  for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
  }

  return total;
}

const numbers = [1, 2, 3, 45, 56, 88, 7, 9];


console.log({ total: sumDinamically(numbers) });
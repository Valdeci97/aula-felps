function divide(a, b) {
  if (b === 0) throw new Error('Cannot divide by zero. Elba feelings');

  return a / b;
}

module.exports = { divide };
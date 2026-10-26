export function add(a, b) {
  return a + b;
}

// Multiplies two numbers.
export function multiply(a, b) {
  return a * b;
}

// Adds up every whole number from `from` to `to`, including both ends.
// sumRange(1, 4) === 1 + 2 + 3 + 4 === 10
export function sumRange(from, to) {
  let total = 0;
  for (let n = from; n <= to; n++) {
    total += n;
  }
  return total;
}

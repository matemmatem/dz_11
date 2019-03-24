function displayEvenNumbers(x, y) {
  let numbers = [];

  if (x > y) {
    for (let i = y; i <= x; i++) {
      if ((i % 2) != 0) {
        numbers.push(i);
      }
    }
  } else {
    for (let i = x; i <= y; i++) {
      if ((i % 2) != 1) {
        numbers.push(i);
      }
    }
  }

  return numbers;
}

console.log(displayEvenNumbers(1, 4));
console.log(displayEvenNumbers(3, 9));
console.log(displayEvenNumbers(1, 11));



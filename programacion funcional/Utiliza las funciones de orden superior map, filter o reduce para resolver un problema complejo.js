const squareList = arr => {
  // Cambia solo el código debajo de esta línea
const positiveIntegers = arr.filter(num => Number.isInteger(num) && num > 0);

  const squaredIntegers = positiveIntegers.map(num => num * num);

  return squaredIntegers;
  // Cambia solo el código encima de esta línea
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
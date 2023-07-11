const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Cambia solo el código debajo de esta línea
  const newArr = arr.slice();

  const sortedArr = newArr.concat().sort((a, b) => a - b);

  return sortedArr;

  // Cambia solo el código encima de esta línea
}

nonMutatingSort(globalArray);
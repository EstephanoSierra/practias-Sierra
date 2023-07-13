function uniteUnique(...arrays) {
  const uniqueValues = [];

  arrays.forEach((array) => {
    array.forEach((value) => {
      if (!uniqueValues.includes(value)) {
        uniqueValues.push(value);
      }
    });
  });

  return uniqueValues;
}

const result = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(result);
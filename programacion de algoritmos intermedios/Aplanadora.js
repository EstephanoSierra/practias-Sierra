function steamrollArray(arr) {
  let flattenedArray = [];

  arr.forEach((element) => {
    if (Array.isArray(element)) {
      flattenedArray = flattenedArray.concat(steamrollArray(element));
    } else {
      flattenedArray.push(element);
    }
  });

  return flattenedArray;
}

const result = steamrollArray([1, [2], [3, [[4]]]]);
console.log(result); 
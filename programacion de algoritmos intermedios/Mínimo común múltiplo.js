function smallestCommons(arr) {
  arr.sort((a, b) => a - b);

  const range = [];
  for (let i = arr[0]; i <= arr[1]; i++) {
    range.push(i);
  }

  let multiple = range[1];
  let found = false;

  while (!found) {
    found = range.every((num) => multiple % num === 0);
    if (!found) {
      multiple += range[1];
    }
  }

  return multiple;
}

const result = smallestCommons([1, 5]);
console.log(result); 

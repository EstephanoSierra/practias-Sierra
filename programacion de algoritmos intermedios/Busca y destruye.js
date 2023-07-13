function destroyer(arr) {
  const args = Array.from(arguments).slice(1);

  const filteredArr = arr.filter((element) => !args.includes(element));

  return filteredArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
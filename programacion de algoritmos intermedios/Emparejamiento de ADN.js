function pairElement(str) {
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };

  const result = [];

  for (let i = 0; i < str.length; i++) {
    const base = str[i];
    result.push([base, pairs[base]]);
  }

  return result;
}

const result = pairElement("GCG");
console.log(result);
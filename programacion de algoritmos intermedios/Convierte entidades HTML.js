function convertHTML(str) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&apos;"
  };

  let convertedStr = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    convertedStr += htmlEntities[char] || char;
  }

  return convertedStr;
}

const result = convertHTML("Dolce & Gabbana");
console.log(result); 

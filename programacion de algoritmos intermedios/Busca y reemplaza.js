function myReplace(str, before, after) {
  
  const isCapitalized = /^[A-Z]/.test(before);


  if (isCapitalized) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }

 
  const regex = new RegExp(before, 'gi');
  const newStr = str.replace(regex, after);

  return newStr;
}

const result = myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
console.log(result); 
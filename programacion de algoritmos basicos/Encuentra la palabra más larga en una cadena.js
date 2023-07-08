function findLongestWordLength(str) {
  let palabras = str.split(' ');
  let longitud = 0;
  console.log(palabras.length);
for(let i = 0; i < palabras.length;i++){
  if(palabras[i].length > longitud){
longitud = palabras[i].length
  }
}
  return longitud;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
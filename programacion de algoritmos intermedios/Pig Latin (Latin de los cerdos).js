function translatePigLatin(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  if (vowels.includes(str[0])) {
    return str + 'way';
  } else {
    let firstVowelIndex = str.search(/[aeiou]/);

    
    if (firstVowelIndex === -1) {
      return str + 'ay';
    }

  
    return str.slice(firstVowelIndex) + str.slice(0, firstVowelIndex) + 'ay';
  }
}

const result = translatePigLatin("rhythm");
console.log(result); 

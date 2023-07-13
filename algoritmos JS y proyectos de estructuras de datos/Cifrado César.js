function rot13(str) {
 const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const shift = 13;

  let decodedStr = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    const isLetter = /[A-Z]/.test(char);

    if (isLetter) {
      const charIndex = alphabet.indexOf(char);

      const decodedIndex = (charIndex + shift) % alphabet.length;

      const decodedChar = alphabet[decodedIndex];

      decodedStr += decodedChar;
    } else {
      decodedStr += char;
    }
  }

  return decodedStr;
}

rot13("SERR PBQR PNZC");
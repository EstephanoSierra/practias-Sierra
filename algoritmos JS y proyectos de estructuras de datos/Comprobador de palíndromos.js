function palindrome(str) {
  const alphanumericStr = str.toLowerCase().replace(/[\W_]/g, '');

  const reversedStr = alphanumericStr.split('').reverse().join('');
  return alphanumericStr === reversedStr;
}

palindrome("eye");
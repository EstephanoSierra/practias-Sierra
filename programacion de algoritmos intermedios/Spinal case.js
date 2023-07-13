function spinalCase(str) {
str = str.replace(/\s+|_+/g, '-');

  str = str.replace(/([a-z])([A-Z])/g, '$1-$2');

  str = str.toLowerCase();

  return str;
}

spinalCase('This Is Spinal Tap');
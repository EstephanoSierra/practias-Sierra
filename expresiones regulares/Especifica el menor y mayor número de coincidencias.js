let ohStr = "Ohhhh no";
let ohRegex = /^Oh{3,6}\sno$/i; // Cambia esta línea
let result = ohRegex.test(ohStr);
console.log(result)
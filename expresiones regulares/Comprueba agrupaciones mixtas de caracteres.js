let myString = "Eleanor Roosevelt";
let myRegex = /(Eleanor|Franklin|Franklin D.) Roosevelt/; // Cambia esta línea
let result = myRegex.test(myString); // Cambia esta línea
// Después de pasar el desafío experimenta con myString y observa cómo funciona la agrupación
console.log(result)
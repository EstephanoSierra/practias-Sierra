function myLocalScope() {
  // Cambia solo el código debajo de esta línea
const myVar ="a"  ;

  console.log('inside myLocalScope', myVar);
return myVar;
}
myLocalScope();

// Ejecuta y verifica la consola
// myVar no está definida afuera de myLocalScope
console.log('outside myLocalScope', myLocalScope());
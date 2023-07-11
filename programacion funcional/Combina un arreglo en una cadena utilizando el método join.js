function sentensify(str) {
  // Cambia solo el código debajo de esta línea

 const words = str.split(/\W/);

  const sentence = words.join(" ");

  return sentence;
  // Cambia solo el código encima de esta línea
}

sentensify("May-the-force-be-with-you");
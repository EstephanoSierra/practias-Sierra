// Cambia solo el código debajo de esta línea
function urlSlug(title) {
  return title
    .split(" ") 
    .map(word => word.toLowerCase()) 
    .filter(word => word !== "") 
    .join("-"); 
}
// Cambia solo el código encima de esta línea
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
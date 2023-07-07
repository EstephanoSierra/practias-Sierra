const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(allUsers) {
 var aux=0;
  // Cambia solo el código debajo de esta línea
for(const a in allUsers){
if(allUsers[a].online == true){
  aux += 1;
}

}
return aux;
  // Cambia solo el código encima de esta línea
}

console.log(countOnline(users));
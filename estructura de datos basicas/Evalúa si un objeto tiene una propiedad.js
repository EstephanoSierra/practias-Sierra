let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // Cambia solo el código debajo de esta línea
let a = userObj.hasOwnProperty('Alan')+ 
        userObj.hasOwnProperty('Jeff')+        
        userObj.hasOwnProperty('Sarah')+
        userObj.hasOwnProperty('Ryan');

if(a == 4){
  return true;
}else{
  return false
}
  // Cambia solo el código encima de esta línea
}

console.log(isEveryoneHere(users));
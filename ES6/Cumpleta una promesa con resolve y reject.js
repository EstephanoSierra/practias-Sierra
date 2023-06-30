const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer representa una respuesta de un servidor
  let responseFromServer;

  if(responseFromServer) {
    // Cambia esta línea
    resolve("We got the data");
  } else {  
    // Cambia esta línea
    reject("Data not received");
  }
});
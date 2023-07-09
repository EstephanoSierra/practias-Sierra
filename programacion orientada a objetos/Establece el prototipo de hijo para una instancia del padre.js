function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Cambia solo el código debajo de esta línea

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

let beagle = new Dog();
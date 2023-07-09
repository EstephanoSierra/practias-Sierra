let glideMixin = function(obj) {
  obj.glide = function() {
    console.log("Gliding through the air");
  };
};

let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Cambia solo el código debajo de esta línea
glideMixin(bird);
glideMixin(boat);

bird.glide(); 
boat.glide(); 

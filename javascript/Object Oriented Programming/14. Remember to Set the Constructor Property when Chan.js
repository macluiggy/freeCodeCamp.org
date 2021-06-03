function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {
  constructor: Dog,//este funciona mas o menos como el super() en un nuevo objeto heredado, cuando se crean propiedades con prototype en un objeto, tambien se tiene que heredar el constructor del objeto para que este no sea sobreescrito
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

console.log(Dog.prototype.numLegs, Dog.prototype.eat)
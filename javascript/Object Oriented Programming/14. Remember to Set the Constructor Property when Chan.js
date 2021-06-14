function Dog(name) {
  this.name = name;
}

// Only change code below this line
//let thor = new Dog('thor')
//console.log(thor.numLegs) no va a poder mostrar por pantalla ya que este propiedad aun no ha sido añadida, esta sera añadida con prototype como se muestra abajo
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
let thor = new Dog('thor')
console.log(thor.constructor)//ahora si va a poder mostrar esta propiedad

console.log(Dog.prototype.numLegs, Dog.prototype.eat)
thor.eat()
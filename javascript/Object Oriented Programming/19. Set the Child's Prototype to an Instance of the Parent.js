function Animal(name) {
  this.name = name
}

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    return "nom nom nom"
  }
};

function Dog(name) { this.name=name }

// Only change code below this line

Dog.prototype = Object.create(Animal.prototype); // Change this
let beagle = new Dog('firulais') || Object.create(Animal.prototype);
console.log(beagle.eat(), beagle.name)
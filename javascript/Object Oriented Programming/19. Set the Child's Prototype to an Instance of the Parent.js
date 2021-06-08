function Animal(name) {
  this.name = name
}

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    return "nom nom nom"
  }
};

function Dog() { }

// Only change code below this line

Dog.prototype = Object.create(Animal.prototype); // Change this
let beagle = new Dog('firulais');
console.log(beagle.eat(), beagle.name)
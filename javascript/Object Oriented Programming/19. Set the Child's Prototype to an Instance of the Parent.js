function Animal() {
  this.nombre = 'animaljsajfja'
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
let beagle = new Dog();
console.log(beagle.eat(), )
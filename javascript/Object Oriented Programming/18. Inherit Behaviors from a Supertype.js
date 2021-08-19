function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    return "nom nom nom"
  }
};

// Only change code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line
let loro = new Animal()

console.log(duck.eat())
console.log(loro.eat())

const { constructor, eat } = Animal.prototype;

console.log( constructor, Animal, eat)
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line


Bird.prototype.constructor = Bird; // Del objeto Bird su prototype y su constructor, define ese contrucotr, para que corresponda al objeto Bird y no al objeto Animal
Dog.prototype.constructor = Dog;// Haz lo mismo con este
let duck = new Bird();
let beagle = new Dog();
console.log(duck.constructor)

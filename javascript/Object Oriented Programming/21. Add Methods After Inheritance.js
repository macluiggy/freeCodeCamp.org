function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
let beagle = Object.create(Dog.prototype) || new Dog();
console.log(beagle.constructor)
Dog.prototype.constructor = Dog;
console.log(beagle.constructor)
//beagle.bark() no va a funcionar debido a que aun no se ha creado el metodo (funcion)
Dog.prototype.bark = () => console.log('Woof!');

// Only change code above this line
beagle.bark()
beagle.eat()

let animal = new Animal()
animal.eat()
//animal.bark() no va a funcionar ya que este solo funciona para objetos creados con el constructor Dog
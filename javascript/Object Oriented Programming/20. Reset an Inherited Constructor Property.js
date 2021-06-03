function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line


let duck = new Bird();
let beagle = new Dog();
console.log(duck.constructor) // esto imprime [Function: Animal] debido a que aun no se ha establecido el construcor Animal para que corresponda al constructor Bird, lo mis mo pasaria con el constructor Dog

Bird.prototype.constructor = Bird; // Del objeto Bird su prototype y su constructor, define ese contrucotr, para que corresponda al objeto Bird y no al objeto Animal
Dog.prototype.constructor = Dog;// Haz lo mismo con este
console.log(duck.constructor)// una vez establecio, ahora si el constructor Dog corresponde con los objectos que se crean a paritir de el


console.log(duck instanceof Bird)

function Animal(name) {
	this.name = name;
}
function Bird(n) {
	this.n = n;
}
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line


let duck = new Bird('suri');
let beagle = new Dog();
console.log(duck) // esto imprime [Function: Animal] debido a que aun no se ha establecido el construcor Animal para que corresponda al constructor Bird, lo mis mo pasaria con el constructor Dog
console.log(beagle)

Bird.prototype.constructor = Bird; // Del objeto Bird su prototype y su constructor, define ese contrucotr, para que corresponda al objeto Bird y no al objeto Animal
Dog.prototype.constructor = Dog;// Haz lo mismo con este
console.log(duck)// una vez establecio, ahora si el constructor Dog corresponde con los objectos que se crean a paritir de el
console.log(beagle)


console.log(duck instanceof Bird)

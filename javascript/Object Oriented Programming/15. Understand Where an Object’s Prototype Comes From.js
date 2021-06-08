function Dog(name) {
  this.name = name;
}
function Cat(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");
let mishu = new Cat('mishu');

// Only change code below this line

console.log(Dog.prototype.isPrototypeOf(beagle))//beagle heredo sus prototype de Dog?
console.log(Dog.prototype.isPrototypeOf(mishu))//mishu heredo sus prototype de Dog?
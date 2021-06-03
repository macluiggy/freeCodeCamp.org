function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");
Dog.prototype.numLegs = 4

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
console.log(Object.prototype.isPrototypeOf(Dog.prototype))
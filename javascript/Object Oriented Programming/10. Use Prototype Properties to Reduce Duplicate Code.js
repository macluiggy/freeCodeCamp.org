function Dog(name) {
  this.name = name;
}


Dog.prototype.numLegs = 4;
// Only change code above this line
let beagle = new Dog("Snoopy");
console.log(beagle.numLegs)

function Tesla(model, year) {
  this.model = model
  this.year = year;
}
const teslaX = new Tesla('X', 2020);
console.log(teslaX.tires)

Tesla.prototype.tires = 4;
console.log(teslaX.tires)
console.log(teslaX)
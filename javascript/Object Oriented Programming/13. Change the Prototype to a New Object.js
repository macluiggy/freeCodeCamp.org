function Dog(name) {
  this.name = name;
}
Dog.prototype = {
  // Only change code below this line
numLegs: 4,
eat: function () {},
describe: function () {}
};
const sofi = new Dog('sofi');
console.log('el numero de patas son ' + sofi.numLegs)

console.log(Dog.prototype)
console.log(Dog)
console.log(sofi)
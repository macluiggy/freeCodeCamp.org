function Dog(name) {
  this.name = name;
}
function Cat(name) {
  this.name = name;
}
// Only change code below this line
function joinDogFraternity(candidate) {
  let test = Dog.prototype.isPrototypeOf(candidate) // es este objeto contruido por el constructor Dog? tambie se podria utilizar instanceof o Dog.prototype.isPrototypeOf(candidate) para realiza la misma acción
    ? `Bienvenido ${candidate.name}`
    : `Lo sentimos, tienes que se un perro para unirte a la fraternidad`;
  return test;
}

let thor = new Dog("thor");
let mishu = new Cat("mishu");
console.log(thor.constructor, Dog, mishu.constructor, Cat);

console.log(joinDogFraternity(thor));
console.log(joinDogFraternity(mishu));

function Car(s) {
  this.brand = 's'
  return this.brand
}
function ElectricCar() {}
let electricCar = new ElectricCar();
let car = new Car();
// console.log(Car());
// console.log(car);
function isElectric(car) {
  return ElectricCar.prototype.isPrototypeOf(car)
    ? "Charging..."
    : "Car must be electric";
}
console.log(isElectric(electricCar));
console.log(isElectric(car));
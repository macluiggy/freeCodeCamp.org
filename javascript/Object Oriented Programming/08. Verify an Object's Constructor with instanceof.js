function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line
let myHouse = new House(90029929292992 ** 888);

console.log(myHouse instanceof House); // instanceof no seria como preguntar: fue este objeto creado con este constructor?

function Tesla(model, year) {
  this.model = model;
  this.year = year;
}

function Lamorghini(model, year) {
  this.model = model;
  this.year = year;
}

const teslaX = new Tesla("x", 2019);
const murcielago = new Lamorghini("murcielago", 2020);

const isBrandOfCar = (car, brand) => car instanceof brand;
console.log(isBrandOfCar(teslaX, Tesla)); //true
console.log(isBrandOfCar(murcielago, Tesla)); //false
console.log(isBrandOfCar(teslaX, Lamorghini)); //false
console.log(isBrandOfCar(murcielago, Lamorghini)); //true
console.log(teslaX.hasOwnProperty("model"));//true
console.log(teslaX.hasOwnProperty("año"));//false

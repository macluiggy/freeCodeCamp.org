function Dog(name) {
  this.name = name;
}
function Cat(name) {
  this.name = name;
}
// Only change code below this line
function joinDogFraternity(candidate) {
  let test = candidate.constructor === Dog// es este objeto contruido por el constructor Dog?
  ? `Bienvenido ${candidate.name}`
  : `Lo sentimos, tienes que se un perro para unirte a la fraternidad`
  return test
  
}

let thor = new Dog('thor');
let mishu = new Cat('mishu');
console.log(thor.constructor, Dog, mishu.constructor, Cat)

console.log(joinDogFraternity(thor))
console.log(joinDogFraternity(mishu))
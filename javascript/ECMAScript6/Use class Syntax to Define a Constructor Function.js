class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;

    }
}
var zeus = new SpaceShuttle('Jupiter');
var ares = new SpaceShuttle('marte');
console.log(zeus.targetPlanet)



// Only change code below this line
class Vegetable {
    constructor(name) {
        this.name = name;
    }
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'

class Perro {
    constructor(raza) {
        this.raza = raza;
    }
}
var thor = new Perro('chorrona');
var bethobeen = new Perro('pastor aleman')
console.log(thor.raza)
console.log(bethobeen.raza)

class Usuario {
    constructor(nombre, apellidos, edad) {
        this.nombre = nombre;
        this.lastName = apellidos;
        this.edad = edad;
    }
}
var olga = new Usuario('olga', 'roman', 20);
console.log(`Hola me llamo ${olga.nombre} ${olga.lastName} y tengo ${olga.edad} milenios de edad`);

class cars {
    constructor(brand, model, year) {
        this.marca = brand;
        this.modelo = model;
        this.año = year;
    }
}
const lamorghini = new cars('lamorghini', 'egoista', 2010);
console.log(`Tengo un carro ${lamorghini.marca} modelo '${lamorghini.modelo}' del año ${lamorghini.año} `);

const tesla = new cars('tesla', `S`, 2019);
console.log(tesla);
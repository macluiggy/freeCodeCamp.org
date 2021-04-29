class Book {
    constructor(author) {
        this.author = author;
    }
    // getter
    get writer() {
        return this.author;
    }
    // setter
    set writer(updatedAuthor) {
        this.author = updatedAuthor;
    }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);



// Only change code below this line
class Thermostat {
    constructor(F) {
        this.F = F;
    }

    get temperature() {
        return 5 / 9 * (this.F - 32);
    }

    set temperature(C) {
        this.F = (C * 9.0) / 5 + 32;
    }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(`${temp} °F`);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

console.log(`${temp} °F`);
console.log(thermos.F);


var newTemperature = new Thermostat(11.428576042272727);
let newTemperatureInCelsius = newTemperature.temperature;
console.log(`${newTemperatureInCelsius} °C`);


class time {
    constructor(min) {
        this.min = min;
    }
    get toSec() {
        return this.min * 60;
    }
    set sumMin(min) {
        this.min += min;
    }
}

const min1 = new time(30);
console.log(min1.toSec);
min1.sumMin = 10; //llama la propiedad la cual le suma n minutos a la propiedad min
console.log(min1.min);
//han pasado otros 10 minutos
min1.sumMin = 10;
console.log(min1.min);
//ahora miremos el tiempo actual en segundos
console.log(min1.toSec) //llama la propiedad toSec del setter para convertir la propiedad min en segundos;

class Distancia {
    constructor(m) {
        this.m = m;
    }

    get cm() {
        return this.m * 100
    }
    set nuevoMetro(nuevoMetro) {
        this.m = nuevoMetro;
    }
}
const distancia1 = new Distancia(1);
console.log(`${distancia1.m} metros`);
console.log(`${distancia1.cm} centimetros`);
distancia1.nuevoMetro = 10;
console.log(`${distancia1.m} metros`);
console.log(`${distancia1.cm} centimetros`);
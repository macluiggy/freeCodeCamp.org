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
    return 5/9 * (this.F - 32);
  }

  set temperature(C){
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


var newTemperature = new Thermostat(11.428576042272727);
let newTemperatureInCelsius = newTemperature.temperature;
console.log(`${newTemperatureInCelsius} °C`);
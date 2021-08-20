function nonMutatingSplice(cities, start, end) {
  // Only change code below this line
  return cities.slice(start, end);

  // Only change code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(nonMutatingSplice(inputCities, 0, 3));
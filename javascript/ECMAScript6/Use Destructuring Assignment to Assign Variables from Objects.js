const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
  
const {today: highToday, yesterday: ayer0, tomorrow: highTomorrow} = HIGH_TEMPERATURES;

// Only change code above this line
console.log(highToday +' ' + highTomorrow + ' ' + ayer0)

const {yesterday: ayer, tomorrow: mañana, today: hoy} = HIGH_TEMPERATURES;
console.log(`ayer estuvo a ${ayer} °C, hoy estamos a ${hoy} °C y mañana estaremos a ${mañana} °C`)
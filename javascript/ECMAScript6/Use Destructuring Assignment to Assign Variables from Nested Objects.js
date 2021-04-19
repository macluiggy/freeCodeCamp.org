const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
  
const {tomorrow: {low: lowTomorrow, high: highTomorrow}, today: {low:lowToday, high: highToday}} = LOCAL_FORECAST;

// Only change code above this line
console.log(highToday + ', ' + highTomorrow);

const {yesterday: {low: ayerBajo, high: ayerAlto}, today: {high: hoyAlto, low: hoyBajo}} = LOCAL_FORECAST;
console.log(`ayer bajo y alto: ${ayerBajo}, ${ayerAlto}
hoy bajo y alto: ${hoyAlto}, ${hoyBajo}`);
function orbitalPeriod1(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  let arr2 = arr.map(obj => {
    let a = obj.avgAlt + earthRadius;
    let T = 2*Math.PI*Math.sqrt(a**3/GM)
    let orbPeriod = Math.round(T);
    let obj2 = {}
    obj2.name = obj.name;
    obj2.orbitalPeriod= orbPeriod;
    return obj2
  })
  return arr2;
}
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr.map(({name, avgAlt}) => {
    let orbitalPeriod = Math.round(2*Math.PI*Math.sqrt((avgAlt + earthRadius)**3/GM));
    return { name, orbitalPeriod }
  });
}


console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));

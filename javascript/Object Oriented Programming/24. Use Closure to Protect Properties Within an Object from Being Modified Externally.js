function Bird() {
  let weight = 15;
  this.getWeight =  function() { return weight}

}
// con esto nos evitmaos que ni si quiera la propiedad getWeight pueda ser modificada
let loro = new Bird()
Object.freeze(loro)
loro.getWeight = 17
console.log(loro.getWeight())//debido a que weight es una variable y no una propiedad de Bird, esta no puede ser modificada
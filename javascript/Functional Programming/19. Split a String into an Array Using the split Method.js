function splitify(str) {
  // Only change code below this line
  let r = str.split(/\s|-|,/gi)
  console.log(r)
return str.split(/\s|\W/)

  // Only change code above this line
}
console.log(splitify("Hello World,I-am code"));
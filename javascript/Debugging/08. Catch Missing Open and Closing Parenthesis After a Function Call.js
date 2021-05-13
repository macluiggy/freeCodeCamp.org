function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine();
let result2 = getNine;
console.log(result);
console.log(result2())
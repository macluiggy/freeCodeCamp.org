function sumPrimes1(num) {
  let arr = [];
  for (var i = 1; i <= num; i++) {
    arr.push(i)
  }
  console.log(arr)
  let arr2 = arr.filter(n => {
    let numArr = []
    for (var i = 1; i <= n; i++) {
      numArr.push(i)
    }
    return numArr.filter(i => n/i === parseInt(n/i)).length === 2
  })
  console.log(arr2)
  let sumPrimesNum = arr2.reduce((sum, current) => sum + current)
  return sumPrimesNum;
}
function sumPrimes(num) {
  let arr = [];//crea el array
  for (var i = 1; i <= num; i++) {
    arr.push(i) // añade los valoes desde 1 hasta num al array
  }
  return arr.filter(n => {//filtra el arr con los numeros
    let numArr = []//crea un array que contra los valoes desde 1 hasta i (i representa el valor acual de num)
    for (var i = 1; i <= n; i++) {
      numArr.push(i) // añade esos numeros al array creado
    }
    return numArr
              .filter(i => n/i === parseInt(n/i))
              .length === 2 // filtra ese array para los numeros que tengan dos divisores que devuelvan un entero 1 y a si mismo, osea los numeros primos
  }).reduce((sum, current) => sum + current);//devuelve la suma de los numeros filtrados
}
console.log(sumPrimes(10));
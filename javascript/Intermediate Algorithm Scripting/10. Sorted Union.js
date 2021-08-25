function uniteUnique1(...arr) {
  console.log(arr)
  let arr1 = arr.reduce((acumArr, currentArr) => {
    return [...acumArr, ...currentArr]
  })
  //console.log(arr1)
  let arr2 = [];
  for (var i = 0; i < arr1.length; i++) {
    let el = arr1[i];
    if (arr2.includes(el)) {
      continue
    } else {
      arr2.push(el)
    }
  }
  console.log(arr2)
  return arr2;
}
function uniteUnique(...arr) {
  let arr1 = arr.reduce((acumArr, currentArr) => [...acumArr, ...currentArr]) //acumArr.concat(currentArr) tambien se pudo haber utilizado
  let arr2 = [];
  for (var i = 0; i < arr1.length; i++) {
    let el = arr1[i];
    if (!arr2.includes(el)) {
      arr2.push(el)
    }
  }
  return arr2;
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

console.log([1,2].includes(1))
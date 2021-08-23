function diffArrayTest(arr1, arr2) {
  let newArr = []
  //console.log(arr1[arr2.indexOf(arr1[4])])
  /*for (var i = 0; i < arr1.length; i++) {
    let e1 = arr1[i];
    if (!arr1[arr2.indexOf(e1)]) {
      newArr.push(e1)
    }
  }
  for (var i = 0; i < arr2.length; i++) {
    let e2 = arr2[i];
    if (!arr2[arr1.indexOf(e2)]) {
      newArr.push(e2)
    }
  }*/
  let arr1x = arr1.filter(el => !arr2.includes(el))
  console.log(newArr)
  let arr2x = arr2.filter(e2 => !arr1.includes(e2))
  console.log(arr1x, arr2x)
  return [...arr1x, ...arr2x]
}
const diffArray = (arr1, arr2) => 
    [...arr1.filter(el => !arr2.includes(el)), ...arr2.filter(e2 => !arr1.includes(e2))]
console.log(
  diffArray(
   ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
   ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
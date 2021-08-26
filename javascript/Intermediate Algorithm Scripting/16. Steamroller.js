function checkIfIsArray(array) {
  // body...
  /*if (!Array.isArray(array)) {
    return array
  }
  let arr = array.map(el => Array.isArray(el) ? el[0] : el)
  console.log(arr)
  return checkIfIsArray(...arr)*/
  if (Array.isArray(array)) {
    return array || array.map(x => Array.isArray(x) ? checkIfIsArray(x) : x)
  }
  return array || array.map(x => Array.isArray(x) ? checkIfIsArray(x) : x)
}

function steamrollArray(arr) {
  const flatArray = []
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (Array.isArray(el)) {
      flatArray.push(...steamrollArray(el))
    } else {
      flatArray.push(el)
    }
  }
  return flatArray
}
function steamrollArray0(arr) {
  const flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
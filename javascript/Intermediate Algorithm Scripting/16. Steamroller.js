function checkIfIsArray(array) {
  // body...
  if (!Array.isArray(array)) {
    return array
  }
  return checkIfIsArray(...array)
}

function steamrollArray(arr) {
  return arr.map(el => {
    return checkIfIsArray(el)
  });
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));

function truthCheck1(collection, pre) {
  let arr = collection.filter(obj => !!obj[pre])
  console.log(arr)
  return arr.length === collection.length;
}
function truthCheck1(collection, pre) {
  return collection
                .filter(obj => obj[pre])
                .length === collection.length
}
function truthCheck(collection, pre) {
  return collection
                .every(obj => obj[pre])
}
console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));

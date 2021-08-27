function rot13I(str) {
  let abc = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let nop = 'nopqrstuvwxyzabcdefghijklm'.split('')
  let obj = {}
  abc
    .map((x, i) => {
      obj[x] = nop[i]
    })

  let arr2 = str
              .toLowerCase()
              .split('')
              .map(x => obj[x] || x)
  console.log(arr2)
  return arr2.join('').toUpperCase();
}
function rot13(str) {
  let abc = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let nop = 'nopqrstuvwxyzabcdefghijklm'.split('')
  let obj = {}
  abc
    .forEach((x, i) => {
      obj[x] = nop[i]
    })
  return str
          .toLowerCase()
          .split('')
          .map(x => obj[x] || x)
          .join('')
          .toUpperCase();
}

console.log(rot13("SERR CVMMN!"));
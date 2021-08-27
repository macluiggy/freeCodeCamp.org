function palindrome1(str) {
  let str2 = str.replace(/\W|\s|_/g, '' ).toLowerCase()
  let reversed = str2.split('').reverse().join('')
  return reversed === str2;
}
function palindrome2(str) {
  return str.replace(/\W|\s|_/g, '' ).toLowerCase() === str.replace(/\W|\s|_/g, '' ).toLowerCase().split('').reverse().join('')
}
function palindrome(str) {
  str = str.replace(/\W|\s|_/g, '' ).toLowerCase()
  let reversedStr = str.split('').reverse().join('')
  return str === reversedStr
}

console.log(palindrome("_eye"))
function fearNotLetter1(str) {
  let abc = 'abcdefghijklmnopqrstuvwxyz'
  let left = abc.indexOf(str[0])
  let right = abc.indexOf(str[str.length-1])
  let extract = abc.slice(left, right+1)
  console.log(left, right, extract)
  let letter = extract.split('').filter(l => {
    console.log(str.indexOf(l))
    return str.indexOf(l) === -1
  })
  console.log(letter)
  return letter[0]
}

function fearNotLetter(str) {
  let abc = 'abcdefghijklmnopqrstuvwxyz'
  return abc
          .slice(
            abc.indexOf(str[0]),
            abc.indexOf(str[str.length-1])+1)
          .split('')
          .filter(l => str.indexOf(l) === -1)[0]
}

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));

//console.log(abc.includes('abce'))
//console.log('log message'.match())
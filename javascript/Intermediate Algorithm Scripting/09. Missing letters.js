function fearNotLetter(str) {
  let abc = 'abcdefghijklmnopqrstuvwxyz'
  return str
          .split('')
          .filter(l => {
            console.log(abc.indexOf(l) === -1)
          });
}

console.log(fearNotLetter("abce"));

//console.log(abc.includes('abce'))
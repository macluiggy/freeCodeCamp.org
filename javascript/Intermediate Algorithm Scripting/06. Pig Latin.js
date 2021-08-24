function translatePigLatin(str) {
  let rgx = /^[aeiou]/gi
  let str2 = '';
  if (rgx.test(str)) {
    console.log('empieza por vocal')
    str2 = str + 'way'
  } else {
    console.log('empieza por consonant')
    str2 = str
      .replace(/^[^aeiou]+/g, '')
      + str.match(/^[bcdfghjklmnpqrstvwxys]+/g)
      + 'ay'
      //donde [^aeiou] === [bcdfghjklmnpqrstvwxys] la primera es todo lo que 
      //sea diferente a las vocales lo otro es todo los que sean consonantes
  }
  return str2;
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("glove"))

console.log('log message'.capitalize())
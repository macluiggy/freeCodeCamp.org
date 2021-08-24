function translatePigLatin(str) {
  let rgx = /^[aeiou]/gi
  if (rgx.test(str)) {
    console.log('empieza por vocal')
  } else {
    console.log('empieza por consonant')
    str
  }
  return str;
}

translatePigLatin("consonant");
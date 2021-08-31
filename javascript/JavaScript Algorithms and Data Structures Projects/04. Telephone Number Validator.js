function telephoneCheck1(str) {
  let rgx1 = /(1\s)?\(?[0-9]{3}\)?(\s|-)?[0-9]{3}(\s|-)?[0-9]{3}/g
  let rgx2 = /((1\s)?\([0-9]{3}\)(\s|-)?[0-9]{3}(\s|-)?[0-9]{3})|((1\s)?[0-9]{3}(\s|-)?[0-9]{3}(\s|-)?[0-9]{3})/g
  let rgx3 = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;
  
  console.log(str.match(rgx))

  return rgx.test(str)
}

console.log(telephoneCheck("5555555555"))
console.log(telephoneCheck("(555-555-5555"))
console.log(telephoneCheck("2(757)6227382"))
const telephoneCheck = str => 
            /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?(\d{3})[\s-]?\d{4}$/.test(str);
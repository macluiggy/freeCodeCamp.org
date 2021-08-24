function myReplace(str, before, after) {
  let rgx = new RegExp(before, 'g')
  console.log(/^[A-Z]/.test(before))
  if (/^[A-Z]/.test(before)) {
    after = after.replace(after[0], after[0].toUpperCase())
    str = str.replace(before, after)
  } else  {
    after = after.replace(after[0], after[0].toLowerCase())
    str = str.replace(before, after)
  } 
  return str;
}

console.log(myReplace("I think we should look up there", "up", "Down"));

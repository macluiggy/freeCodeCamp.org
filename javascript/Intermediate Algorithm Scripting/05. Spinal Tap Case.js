function spinalCase(str) {
  return str
  .replace(/([a-z])([A-Z])/g, "$1 $2")
  .split(/\s|_/)
  .join('-')
  .toLowerCase()
}

console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("thisIsSpinalTap"));
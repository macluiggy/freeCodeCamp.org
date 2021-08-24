function spinalCase(str) {
  return str
  .split(/\s|\W|_/)
  .map(word => word.replace(/[A-Z]/g, L => ' '+L.toLowerCase()))[0]
  .split(/\s/)
  .join('-')
}

console.log(spinalCase("thisIsSpinalTap"));
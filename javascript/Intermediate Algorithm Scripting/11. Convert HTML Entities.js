function convertHTML1(str) {
  return str
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g,'&apos;')
}
function convertHTML(str) {
   const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  return str
          .replace(/&|<|>|"|'/g, match => htmlEntities[match])
}
console.log(convertHTML("Dolce & Gabbana <"));

console.log('log message'.replace(/(lo)(mes)/g, "$1xd$dos" ))
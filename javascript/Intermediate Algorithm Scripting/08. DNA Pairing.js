function pairElement1(str) {
  return str.split('')
  .map(L => L === 'C' 
            ? [L, 'G']
            : L === 'G'
            ? [L, 'C']
            : L === 'A'
            ? [L, 'T']
            : [L, 'A']);
}

function pairElement(str) {
  return str.split('')
  .map(x => [x, {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  }[x]])
  
}
console.log(pairElement("GCG"));
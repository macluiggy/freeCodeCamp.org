let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // Only change code below this line
  if (foods[scannedItem] === undefined) return 'Iterm not found'
  return foods[scannedItem];
  // Only change code above this line
}

console.log(checkInventory("apples"));

let arr = [1,2,4];
let total = 12;
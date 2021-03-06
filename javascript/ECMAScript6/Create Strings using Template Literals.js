const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  for (var i = 0; i < arr.length; i++) {
  	const el = arr[i]; 
  	failureItems.push(`<li class="text-warning">${el}</li>`)
  }
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList)

function makeListReverse(arr) {
	const successItems = [];
	for (var i = arr.length - 1; i >= 0; i--) {
		const el = arr[i];
		successItems.unshift(`<li class="alert">${el}</li>`);
	}

	return successItems;
}

const successList = makeListReverse(result.success);
console.log(successList);

function makeAnotherList(arr) {
  const skippedItems = [];
  arr.forEach( function(el) {
  // statements
  skippedItems.unshift(`<li class="aviso">${el}</li>`)
});
  return skippedItems;
}
const skippedList = makeAnotherList(result.skipped);
console.log(skippedList);

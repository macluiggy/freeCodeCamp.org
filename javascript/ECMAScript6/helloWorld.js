var result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
    // Only change code below this line
    var failureItems = [];
    for (var i = 0; i < arr.length; i++) {
        var el = arr[i];
        failureItems.push("<li class=\"text-warning\">" + el + "</li>");
    }
    // Only change code above this line
    return failureItems;
}
var failuresList = makeList(result.failure);
console.log(failuresList);
function makeListReverse(arr) {
    var successItems = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        var el = arr[i];
        successItems.unshift("<li class=\"alert\">" + el + "</li>");
    }
    return successItems;
}
var successList = makeListReverse(result.success);
console.log(successList);
var hola = 'hello';
console.log(hola);
var boolean;
 && number;
2 || true;
console.log(boolean);
var jaja = 'jajaja';
jaja = 22;
console.log(jaja);

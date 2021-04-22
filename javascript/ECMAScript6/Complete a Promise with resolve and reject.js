const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = true;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

makeServerRequest.then(result => {
    console.log(result);
});

makeServerRequest.catch(error => {
    console.log(error);
});

const meQuiereNoMeQuiere = new Promise((resolve, reject) => {
    let meQuiere = false;

    if (meQuiere) {
        resolve('Genial, ella me ama');
    } else {
        reject('Chale, que se le puede hacer');
    }
});

meQuiereNoMeQuiere.then(
    function(value) { console.log(value); },
    function(error) { console.log(error); }
);

var num = 1;
let divideUnNumero = new Promise((resolve, reject) => {
    let numeroADividir = 10;
    if (num == 0) {
        // statement
        reject('No se puede dividir para cero')
    } else {
        // statement
        resolve(`${numeroADividir / num}`)
    }
});

divideUnNumero.then(
    function(pass) { console.log(pass); },
    function(denied) { console.log(denied); }
)
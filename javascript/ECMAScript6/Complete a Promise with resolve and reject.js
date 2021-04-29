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

//-------------------------------------------------------------
//-------------------------------------------------------------
//-------------------------------------------------------------
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

//-------------------------------------------------------------
//-------------------------------------------------------------
//-------------------------------------------------------------
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

//-------------------------------------------------------------
//-------------------------------------------------------------
//-------------------------------------------------------------
let peticionAlServidor = new Promise((resolve, reject) => {
    let tiempoMaximoDeEsperaEnSegundos = 8;
    if (tiempoMaximoDeEsperaEnSegundos < 10) {
        // statement
        resolve('la peticion fue resuelta con exito.');
    } else {
        // statement
        reject('lo sentimos tu peticion no pudo ser resuelta, intentalo de nuevo');
    }
});
peticionAlServidor.then(function(result) {
    // body... 
    respuestaALaPeticion(result, 'luiggy')
}, function(error) {
    // body... 
    respuestaALaPeticion(error, 'luiggy')
});

function respuestaALaPeticion(respuesta, nombre) {
    // body... 
    console.log(`${nombre}, ${respuesta} `)
}


const juanito = {
    edad: 16,
    puedePasar: false,
    actualizarEdad(años) {
        return this.edad += años;
    }
}
let edadSuficiente = new Promise((resolve, reject) => {

    if (juanito.edad >= 18) {
        // statement
        resolve(juanito.edad)
    } else {
        // statement
        reject(juanito.edad)
    }
});

edadSuficiente.then(
    (result) => {
        console.log(`Junito tiene ${result} años, puede pasar`);
    },
    (error) => {
        console.log(`Junaito tiene ${error} años, no puede pasar`);
    }
)

juanito.actualizarEdad(10);


let edadSuficiente2 = new Promise((resolve, reject) => {

    if (juanito.edad >= 18) {
        // statement
        resolve(juanito.edad);
    } else {
        // statement
        reject(juanito.edad);
    }
});
edadSuficiente2.then(
    (result) => {
        console.log(`Junito tiene ${result} años, puede pasar`);
    },
    (error) => {
        console.log(`Junaito tiene ${error} años, no puede pasar`);
    }
)
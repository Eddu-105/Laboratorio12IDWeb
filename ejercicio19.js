let cantidad;
let numeros = [];
let resultado;

cantidad = parseInt(prompt("¿Cuántos números vas a ingresar?"));

for (let i = 0; i < cantidad; i++) {
    let num = parseFloat(prompt("Ingresa el número " + (i + 1) + ":"));
    numeros.push(num);
}

const filtrarArreglo = (arr, callback) => {
    let nuevoArreglo = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {  
            nuevoArreglo.push(arr[i]);
        }
    }
    return nuevoArreglo;
};

const esPar = num => num % 2 === 0;
const esPositivo = num => num > 0;
const mayorA10 = num => num > 10;

resultado = filtrarArreglo(numeros, esPar);

console.log("Filtrados:", resultado);
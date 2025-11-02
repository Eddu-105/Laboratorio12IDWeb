let numA = parseInt(prompt("Ingrese primer número:"));
let numB = parseInt(prompt("Ingrese segundo número:"));

function esMultiplo(numA, numB) {
    if (numA%numB==0) {
        return true;
    }
}

console.log(esMultiplo(numA, numB));
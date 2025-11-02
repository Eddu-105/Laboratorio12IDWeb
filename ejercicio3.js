let numA = parseInt(prompt("Ingrese primer número:"));
let numB = parseInt(prompt("Ingrese segundo número:"));

function esMultiplo(numA, numB) {
    if (numA%numB==0) {
        return "Es múltiplo";
    }
    else {
        return "No es múltiplo"
    }
}

console.log(esMultiplo(numA, numB));
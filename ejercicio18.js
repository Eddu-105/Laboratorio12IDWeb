let num1, num2, operacionElegida, resultado, fn;

num1 = parseFloat(prompt("Ingresa el primer número:"));
num2 = parseFloat(prompt("Ingresa el segundo número:"));

operacionElegida = prompt("Elige la operación (suma, resta, multiplicacion, division):");

const sumar = (num1, num2) => num1 + num2;
const restar = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1,num2) => num1 / num2;

const ejecutarOperacion = (fn, num1, num2) => {
    return fn(num1, num2); 
};

switch (operacionElegida) {
    case "suma":
        fn = sumar;
        break;
    case "resta":
        fn = restar;
        break;
    case "multiplicacion":
        fn = multiplicar;
        break;
    case "division":
        fn = dividir;
        break;
    default:
        console.log("Operación no válida");
        fn = null;
}

if (fn) {
    console.log("Resultado:", ejecutarOperacion(fn, num1, num2));
}
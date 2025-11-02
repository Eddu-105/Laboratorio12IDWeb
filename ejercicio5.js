let num1, num2, num3;

num1 = parseInt(prompt("Ingrese primer número:"));
num2 = parseInt(prompt("Ingrese segundo número:"));
num3 = parseInt(prompt("Ingrese tercer número:"));

const promedio = function(num1, num2, num3) {
    return (num1+num2+num3)/3;
}

console.log("El promedio de los tres números es:" + promedio);
let num1, num2, num3;

num1 = parseInt(prompt("Ingrese primer número:"));
num2 = parseInt(prompt("Ingrese segundo número:"));
num3 = parseInt(prompt("Ingrese tercer número:"));

function mayorDeTres(num1, num2, num3) {
    return Math.max(Math.max(num1, num2), num3);
}

console.log("El mayor de los tres números es:" + mayorDeTres(num1, num2, num3));
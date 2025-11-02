let ops;

const operacionesMatematicas = () => {

    const sumar = (num1, num2) => num1 + num2;
    const restar = (num1, num2) => num1 - num2;
    const multiplicar = (num1, num2) => num1 * num2;
    const dividir = (num1, num2) => num1 / num2;

    return {
        sumar,
        restar,
        multiplicar,
        dividir
    };
};

ops = operacionesMatematicas();

console.log("Suma: ", ops.sumar(5, 3));         
console.log("Resta: ", ops.restar(5, 3));       
console.log("Multiplicación: ", ops.multiplicar(5, 3)); 
console.log("División: ", ops.dividir(10, 2));   
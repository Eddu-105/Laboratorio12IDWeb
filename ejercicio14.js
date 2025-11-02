let acum;

const acumulador = (valorInicial = 0) => {
    let total = valorInicial; 

    return (nuevoValor) => {
        total += nuevoValor;
        return total;
    };
};

acum = acumulador(prompt("Ingrese valor inicial:"));

console.log(acum(parseFloat(prompt("Ingrese número que acumula:"))));   
console.log(acum(parseFloat(prompt("Ingrese número que acumula:"))));  
let valorInicial = parseInt(prompt("Ingrese el valor inicial de la secuencia: "));
let razon = parseInt(prompt("Ingrese el valor de la razón:"));

const crearSecuencia = (inicio, razon) => {
    let actual = inicio;

    return () => {
        const valor = actual; 
        actual += razon; 
        return valor;
    };
};

const secuencia = crearSecuencia(valorInicial, razon);

console.log(secuencia());
console.log(secuencia());
console.log(secuencia());
console.log(secuencia());
let contador;

const crearContador = (valorInicial) => {
    let contadorInterno = valorInicial;

    const incrementar = () => {
        contadorInterno++;
        return contadorInterno;
    };

    const resetear = () => {
        contadorInterno = valorInicial;
        return contadorInterno;
    };

    return {
        incrementar,
        resetear
    };
};

contador = crearContador(prompt("Ingrese un número:"));

console.log(contador.incrementar()); 
console.log(contador.incrementar()); 
console.log(contador.incrementar());
console.log(contador.resetear());    
console.log(contador.incrementar());
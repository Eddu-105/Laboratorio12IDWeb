let resultado, cantidad, numeros=[];

cantidad = parseInt(prompt("¿Cuántos números vas a ingresar?"));

for (let i = 0; i < cantidad; i++) {
    let num = parseFloat(prompt("Ingresa el número " + (i + 1) + ":"));
    numeros.push(num);
}

const media = (...numeros) => {
    if (numeros.length === 0) return 0;  
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma / numeros.length;
};

console.log("Promedio:", media(...numeros));
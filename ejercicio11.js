let texto;
let resultado;

texto = prompt("Ingresa un texto con posibles espacios extra:");

function procesarTexto(cadena) {

    function limpiarEspacios(str) {
        return str.trim().replace(/\s+/g, " ");
    }

    function contarPalabras(str) {
        if (str === "") return 0;
        return str.split(" ").length;
    }

    let textoLimpio = limpiarEspacios(cadena);
    let totalPalabras = contarPalabras(textoLimpio);

    return {
        textoLimpio,
        totalPalabras
    };
}

resultado = procesarTexto(texto);

console.log("Texto limpio: [" + resultado.textoLimpio + "]");
console.log("Cantidad de palabras: " + resultado.totalPalabras);
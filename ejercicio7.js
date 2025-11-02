let precio = parseFloat(prompt("Ingrese el precio:"));
let porcentaje = parseFloat("Ingrese el descuento:");

const calcularDescuento = function (precio, porcentaje) {
    return precio*porcentaje/100;
}

console.log("Descuento calculado: " + calcularDescuento(precio, porcentaje));
let base, altura;

base = parseFloat(prompt("Ingrese la base de su rectángulo:"));
altura = parseFloat(prompt("Ingrese la altura de su rectángulo:"));

function areaRectangulo (base, altura) {
    return base*altura;
}

console.log("Área del rectángulo:" + areaRectangulo(base, altura));
let nombreIngresado, edadIngresada, cantidadHobbies;
let listaHobbies = [];

nombreIngresado = prompt("Ingresa tu nombre:");
edadIngresada = parseInt(prompt("Ingresa tu edad:"));
cantidadHobbies = parseInt(prompt("¿Cuántos hobbies quieres ingresar?"));

for (let i = 0; i < cantidadHobbies; i++) {
    let hobbie = prompt("Ingresa el hobbie " + (i + 1) + ":");
    listaHobbies.push(hobbie);
}

const mostrarDatos = (nombre, edad, ...hobbies) => {
    console.log("Nombre:", nombre);
    console.log("Edad:", edad);
    console.log("Hobbies:", hobbies);
};

mostrarDatos(nombreIngresado, edadIngresada, ...listaHobbies);
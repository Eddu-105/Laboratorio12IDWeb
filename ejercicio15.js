let nombreIngresado;
let mensaje;

nombreIngresado = prompt("Ingresa tu nombre (o deja vacío):");

const saludo = (nombre = "Amigo") => {
    return `¡Hola, ${nombre}! Bienvenido.`;
};

mensaje = nombreIngresado ? saludo(nombreIngresado) : saludo();

console.log(mensaje);
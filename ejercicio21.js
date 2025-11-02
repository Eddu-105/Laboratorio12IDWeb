let base, exponente, resultado;

base = parseFloat(prompt("Ingresa la base:"));
exponente = parseInt(prompt("Ingresa el exponente:"));

const potencia = (base, exponente) => {
    if (exponente === 0) return 1;        
    if (exponente === 1) return base;    
    return base * potencia(base, exponente - 1); 
};

resultado = potencia(base, exponente);
console.log(`Resultado: ${base} ^ ${exponente} = ${resultado}`);
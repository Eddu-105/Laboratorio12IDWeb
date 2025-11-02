let num = parseFloat(prompt("Ingrese un número:"));

const esPositivo = num => {
    if(num>0){
        return "El número es positivo."
    }
}
        
console.log(esPositivo(num));
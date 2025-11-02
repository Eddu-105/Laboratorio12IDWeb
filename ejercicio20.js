const descargarArchivo = (url, callback) => {
    console.log("Descargando...");

    setTimeout(() => {
        callback(url); 
    }, 2000);
};

const mostrarDescargaCompleta = (url) => {
    console.log(`Descarga completa de ${url}`);
};

descargarArchivo("https://ejemplo.com/archivo.pdf", mostrarDescargaCompleta);
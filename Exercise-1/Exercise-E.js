// Importar el módulo readline
const readline = require('readline');

// Creamos la interfaz para leer datos
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ingreso de datos
rl.question('Ingrese una letra del abecedario: ', (input) => {
    // Convertir la letra a minúscula para simplificar la comparación
    let letra = input.toLowerCase();

    // Definimos el conjunto de vocales
    const vocales = ['a', 'e', 'i', 'o', 'u'];

    // Determinamos si la letra es una vocal
    let esVocal = vocales.includes(letra);

    // Mostramos resultado en consola
    console.log(`La letra ingresada es una vocal: ${esVocal}`);

    rl.close();
});

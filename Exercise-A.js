// 1.
const { resolve } = require('node:path');
const readline = require('node:readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// a.
const obtenerSueldoYAntiguedad = () => {
    return new Promise((resolve) => {
        rl.question('Ingrese el sueldo del operario: ', (sueldo) => {
            rl.question('Ingrese los años de antiguedad: ', (antiguedad) => {
                resolve({ sueldo: parseInt(sueldo), antiguedad: parseInt(antiguedad) });
            });
        });
    });
};

const comparaciones = async () => {
    let { sueldo, antiguedad } = await obtenerSueldoYAntiguedad();

    let comparacion1 = (sueldo < 2000) && (antiguedad >= 10);
    console.log(`El sueldo es inferior a $2000 US y su antiguedad es igual o superior a 10 años? ${comparacion1}`);

    let comparacion2 = (sueldo < 2000) || (antiguedad < 10);
    console.log(`El sueldo es inferior a $2000 US o su antiguedad es menor a 10 años? ${comparacion2}`);

    let comparacion3 = (sueldo >= 2000);
    console.log(`El sueldo es mayor o igual a $2000 US ${comparacion3}`);

    rl.close();
}

comparaciones();
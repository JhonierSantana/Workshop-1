// Importar el módulo readline
const readline = require('readline');

// Creamos la interfaz 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Creamos un objeto para almacenar los datos del empleado
let empleado = {
    nombre: '',
    salarioPorHora: 0,
    horasTrabajadas: 0
};

// Función para preguntar los datos del empleado
function preguntarNombre() {
    rl.question('Ingrese el nombre del empleado: ', (input) => {
        empleado.nombre = input;
        preguntarSalarioPorHora();
    });
}

function preguntarSalarioPorHora() {
    rl.question('Ingrese el salario básico por hora en COP: ', (input) => {
        empleado.salarioPorHora = parseFloat(input);
        if (isNaN(empleado.salarioPorHora)) {
            console.log("Por favor ingrese un valor numérico válido.");
            preguntarSalarioPorHora();
        } else {
            preguntarHorasTrabajadas();
        }
    });
}

function preguntarHorasTrabajadas() {
    rl.question('Ingrese el número de horas trabajadas en un mes: ', (input) => {
        empleado.horasTrabajadas = parseFloat(input);
        if (isNaN(empleado.horasTrabajadas)) {
            console.log("Por favor ingrese un valor numérico válido.");
            preguntarHorasTrabajadas();
        } else {
            calcularSalarioYSubsidio();
        }
    });
}

// Función para calcular el salario mensual y determinar el subsidio de transporte
function calcularSalarioYSubsidio() {
    // i. Calcular su salario básico mensual
    let salarioMensual = empleado.salarioPorHora * empleado.horasTrabajadas;

    // ii. Determinar si recibe o no subsidio de transportes
    let recibeSubsidio = salarioMensual <= 700000;

    // iii. Mostrar en consola el nombre del empleado, su salario básico mensual y si recibe o no subsidio de transporte
    console.log(`Nombre del empleado: ${empleado.nombre}`);
    console.log(`Salario básico mensual: ${salarioMensual}`);
    console.log(`¿Recibe subsidio de transporte?: ${recibeSubsidio ? 'Sí' : 'No'}`);

    // Cerrar la interfaz readline
    rl.close();
}

// Iniciar la cadena de preguntas
preguntarNombre();

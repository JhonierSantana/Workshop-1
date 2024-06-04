const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const obtenerDatosDelEmpleado = () => {
  return new Promise((resolve) => {
    rl.question("Ingrese el nombre del empleado: ", (nombre) => {
      rl.question("Ingrese el salario del empleado: ", (salario) => {
        rl.question("Ingrese las horas trabajas del empleado: ", (horas) => {
          resolve({
            nombre: String(nombre),
            salario: Number(salario),
            horas: Number(horas),
          });
        });
      });
    });
  });
};

const calcular = async () => {
  let { nombre, salario, horas } = await obtenerDatosDelEmpleado();

  let salarioBasicoMensual = salario * horas;
  console.log(`El salario basico mensual seria: ${salarioBasicoMensual}`);

  let recibeSubsidio = salarioBasicoMensual <= 7000000;
  console.log(`Recibe subsidio de transporte? : ${recibeSubsidio}`);
  rl.close();

  console.log(
    `El empleado ${nombre} tiene un salario basico mensual de $${salarioBasicoMensual} y recibe subsidio de trasnporte? ${recibeSubsidio}`
  );
};

calcular();

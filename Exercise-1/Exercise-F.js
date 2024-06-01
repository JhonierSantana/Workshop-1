const readline = require("node:readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const PasajeroNacional = (primerDigito) => primerDigito.toUpperCase() === "A";

const resultado = (PasajeroNacional) =>
  ({
    true: "El turista es nacional",
    false: "El turista es extranjero",
  }[PasajeroNacional]);

rl.question(
  "Se le solicita el primer digito del numero del Pasaporte: ",
  (primerDigito) => {
    const nacional = PasajeroNacional(primerDigito);
    console.log(resultado(nacional));
    rl.close();
  }
);

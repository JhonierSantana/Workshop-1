const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Ingrese una letra del abecedario: ", (input) => {
  let letra = input.toLowerCase();

  const vocales = ["a", "e", "i", "o", "u"];

  let esVocal = vocales.includes(letra);

  console.log(`La letra ingresada es una vocal: ${esVocal}`);

  rl.close();
});

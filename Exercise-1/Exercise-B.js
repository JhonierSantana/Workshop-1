const { resolve } = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const obtenerValorDeCompra = () => {
  return new Promise((resolve) => {
    rl.question("Ingrese el valor de la compra: ", (valor) => {
      resolve({ valor: parseInt(valor) });
    });
  });
};

const descuentoParaCompras = async () => {
  let = { valor } = await obtenerValorDeCompra();

  let commparacion = valor >= 100000;
  console.log(`La compra aplica para el descuento: ${commparacion}`);

  rl.close();
};

descuentoParaCompras();

//importamos modulo de lectura de linea(read line)
const readline =require('readline');

//creamos la interfaz para leer readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//solicitamos al usuario que ingrese los datos
rl.question('Ingrese el valor de la compra en COP: ', (input)=>{
    //convertimos el valor ingresado a un numero
    const valorCompra= Number(input);
    //verificamos si la conversion fue exitosa
    if (isNaN(valorCompra)){
        console.log("Por favor ingrese un valor numerico valido");  
    }else {
        //comparmos el valor de compra      
        if(valorCompra >=100000){
        console.log("La compra aplica para el descuento: true");
    }else{
        console.log("La compra aplica para el descuento. false");
    }
 }     
 rl.close();
});



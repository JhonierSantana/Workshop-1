const pVerdadera = true;
const qVerdadera = true;
const pFalsa = false;
const qFalsa = false;

// A-1.
resultadoA = !pVerdadera && qVerdadera;
console.log("A-1. NOTpVerdadera AND qVerdadera", resultadoA);

// A-2.
resultadoA2 = !pVerdadera && qFalsa;
console.log("A-2. NOTpVerdadera AND qFalsa", resultadoA2);

// A-3.
resultadoA3 = !pFalsa && qVerdadera;
console.log("A-3. NOTpFalsa AND qVerdadera", resultadoA3);

// A-4.
resultadoA4 = !pFalsa && qFalsa;
console.log("A-4. NOTpFalsa AND qFalsa", resultadoA4);

// B-1.
resultadoB = !pVerdadera && !qVerdadera;
console.log("B-1. NOTpVerdadera AND NOTqVerdadera", resultadoB);

// B-2.
resultadoB2 = !pVerdadera && !qFalsa;
console.log("B-2. NOTpVerdadera AND NOTqFalsa", resultadoB2);

// B-3.
resultadoB3 = !pFalsa && !qVerdadera;
console.log("B-3. NOTpFalsa AND NOTqVerdadera", resultadoB3);

// B-4.
resultadoB4 = !pFalsa && !qFalsa;
console.log("B-4. NOTpFalsa AND NOTqFalsa", resultadoB4);

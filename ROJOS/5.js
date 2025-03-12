let EC = "despejado"; // Variable que indica el estado del clima

// Comenzamos el bucle do while
do {
    // Utilizamos el operador ternario para evaluar el estado del clima
    EC === "soleado" ? console.log(`El clima está ${EC}, es un buen día para salir.`) :
    EC === "lluvioso" ? console.log(`El clima está ${EC}, es mejor llevar una sombrilla.`) :
    EC === "nublado" ? console.log(`El clima está ${EC}, puede que llueva.`) :
    console.log(`El estado del clima ${EC} no es reconocido.`);
    
// La condición del bucle es false para asegurarnos de que el bucle se ejecute solo una vez
} while (false);

let DE = true; // Dispositivo prendido verdadero
let DA = false; // Dispositivo apagado falso
let DEM = false; // Dispositivo en mantenimiento falso
let DSC = false; // Dispositivo sin conexión falso

// Comenzamos el bucle do while
do {
    // Verificamos si el dispositivo está encendido
    if (DE) {
        console.log(`El dispositivo está encendido`);
    } 
    // Verificamos si el dispositivo está apagado
    else if (DA) {
        console.log(`El dispositivo está apagado`);
    } 
    // Verificamos si el dispositivo está en mantenimiento
    else if (DEM) {
        console.log(`El dispositivo está en mantenimiento`);
    } 
    // Verificamos si el dispositivo no tiene conexión
    else if (DSC) {
        console.log(`El dispositivo no tiene conexión`);
    } 
    // Si el estado del dispositivo no coincide con ninguno de los anteriores
    else {
        console.log(`Estado del dispositivo desconocido`);
    }
// La condición del bucle es false para asegurarnos de que el bucle se ejecute solo una vez
} while (false);

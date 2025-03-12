let E = true; // Variable que indica si el computador está prendido
let NB = 75; // Nivel de batería del computador

// Comenzamos el bucle do while
do {
    // Verificamos si el computador está prendido
    if (E) {
        console.log("El computador está prendido.");

        // Verificamos el nivel de batería
        if (NB === 100) {
            console.log("La batería está totalmente cargada.");
        } 
        // Evaluamos si la batería está en buen estado
        else if (NB > 20 && NB < 100) {
            console.log("La batería está en buen estado.");
        } 
        // Evaluamos si la batería está baja
        else if (NB <= 20) {
            console.log("La batería está baja, conéctelo a la corriente.");
        } 
        // Estado desconocido
        else {
            console.log("Encienda su computador.");
        }
    }
// La condición del bucle es false para asegurarnos de que el bucle se ejecute solo una vez
} while (false);

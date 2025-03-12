let TP = false; // Variable que indica si tiene permiso (true) o no (false)
let NOM = "Juan"; // Nombre de la persona

// Comenzamos el bucle do while
do {
    // Utilizamos el operador ternario para verificar si TP es true o false
    let M = TP ? console.log(`${NOM} tiene permiso para acceder`) : console.log(`${NOM} no tiene permiso para acceder`);
// La condición del bucle es false para asegurarnos de que el bucle se ejecute solo una vez
} while (false);

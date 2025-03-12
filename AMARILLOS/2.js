let NVM = "platino"; // Asignamos el valor "platino" a la variable NVM

// Comenzamos el bucle do while
do {
    // Evaluamos si la membresía es "platino"
    if (NVM === "platino") {
        console.log(`Usted tiene acceso a todas las áreas VIP del club, gracias a su membresía ${NVM}.`);
    } 
    // Evaluamos si la membresía es "oro"
    else if (NVM === "oro") {
        console.log(`Usted tiene acceso a las zonas VIP 1 y 2 del club.`);
    } 
    // Evaluamos si la membresía es "plata"
    else if (NVM === "plata") {
        console.log(`Usted tiene acceso a la zona VIP 1 del club.`);
    } 
    // Si la membresía no es ninguna de las anteriores, mostramos que no tiene acceso a las zonas VIP
    else {
        console.log(`Usted no tiene acceso a las zonas VIP del club.`);
    }
// La condición del bucle es false para asegurarnos de que el bucle se ejecute solo una vez
} while (false);

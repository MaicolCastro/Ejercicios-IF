let EU = 18; // Asignamos el valor 18 a la variable EU
let NU = "Maicol"; // Asignamos el nombre "Maicol" a la variable NU

// Comenzamos el bucle do while
do {
    // Verificamos si la edad EU es mayor o igual a 18
    if (EU >= 18) {
        console.log(`${NU}, tienes acceso al sitio web.`);
    } 
    // Si la edad es menor a 18, se deniega el acceso
    else {
        console.log(`Acceso denegado. Debes ser mayor de 18 años para acceder al Sitio Web.`);
    }
// La condición del bucle es false para asegurarnos de que el bucle se ejecute solo una vez
} while (false);

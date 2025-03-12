let V = 90; // Asignamos el valor 90 a la variable V

// Comenzamos el bucle do while
do {
    // Evaluamos si la velocidad V es mayor a 80
    if (V > 80) {
        // Si V es mayor a 80, mostramos un mensaje indicando que se está excediendo el límite de velocidad
        console.log(`Usted está excediendo el límite de velocidad, su velocidad es: ${V} km/h`);
    } else {
        // Si V no es mayor a 80, mostramos un mensaje indicando que se está dentro del límite de velocidad
        console.log(`Usted está dentro del límite de velocidad, su velocidad es: ${V} km/h`);
    }
// La condición del bucle es false para asegurarnos de que el bucle se ejecute solo una vez
} while (false);

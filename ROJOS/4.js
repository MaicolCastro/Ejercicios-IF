const NU = "Maicol"; // Nombre de usuario
const NA = "Administrador"; // Rol del usuario

// Comenzamos el bucle do while
do {
    // Utilizamos el operador ternario para verificar si el nombre de usuario es "Maicol" y el rol es "Administrador"
    NU === "Maicol" && NA === "Administrador" ? 
    console.log(`Bienvenido, ${NU}. Tienes acceso completo al sistema`) : 
    console.log(`Acceso denegado. Credenciales incorrectas.`);
    
// La condición del bucle es false para asegurarnos de que el bucle se ejecute solo una vez
} while (false);


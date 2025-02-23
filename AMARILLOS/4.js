let DE = true; //Dispositivo prendido verdadero
let DA = false; //Dispositivo apagado falso
let DEM = false; //Dispositivo en mantenimiento falso
let DSC = false; //Dispositivo sin conexion falso

if (DE) {

    console.log(`El dispositivo esta encendido`);

} else if (DA) {

    console.log(`El dispositivo esta apagado`);

} else if (DEM) {

    console.log(`El dispositivo esta en mantenimiento`);

} else if (DSC) {

    console.log(`El dispositivo no tiene conexion`);

} else {

    console.log(`Estado del dispositivo desconocido`);

}
let EC = "despejado";

EC === "soleado" ? console.log(`El clima esta ${EC}, es un buen dia para salir.`) :
EC === "lluvioso" ? console.log(`El clima esta ${EC}, es mejor llevar una sombrilla.`) :
EC === "nublado" ? console.log(`El clima esta ${EC}, puede que llueva.`) :
console.log(`El estado del clima ${EC} no es reconocido.`);
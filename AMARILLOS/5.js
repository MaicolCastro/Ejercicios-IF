let E = true;
let NB = 75;

if (E) {

    console.log("El computador esta prendido.");

    if (NB === 100){

        console.log("La bateria esta totalmente cargada.");

    } else if (NB > 20 && NB < 100){
        
        console.log("La bateria esta en buen estado.");

    } else if (NB <= 20) {

        console.log("La bateria esta baja, conectelo a la corriente.");

    } else {

        console.log("Encienda su computador.");
    }

}
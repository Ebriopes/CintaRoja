/*
Destructuring / destructuración

const objeto = {
    a:1,
    b:'hola',
    letra:'valor del letra',
    caballo:'Veloz'
}
const { letra, caballo } = objeto;
*/

class Cine {
    constructor(nombre,sala,tamanio) {
        this.nombre     = nombre;
        this.sala       = sala;
        this.tamanio    = tamanio;
    }

    reproducir(x){
        console.log("Estamos reproduciendo " + x.titulo + " en la sala " + this.sala + ", te mantendras entretenido los " + x.duracion + " minutos")
        return "reproduciendo"
    }
}

module.exports = { 
    Cine,
};
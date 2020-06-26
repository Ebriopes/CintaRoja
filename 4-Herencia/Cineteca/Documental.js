// Agregar 1 método y dos cracterísticas extras diferentes de las de largometraje y pelicula
const { Largometraje } = require("./Largometraje")

class Documental extends Largometraje {
    constructor (titulo, duracion, anio, narrador) {
        super(titulo, duracion);
        this.anio = anio;
        this.narrador = narrador;
    }

    tema(x){
        return "Este documental trata sobre " + x
    }
}

module.exports = {
    Documental,
}


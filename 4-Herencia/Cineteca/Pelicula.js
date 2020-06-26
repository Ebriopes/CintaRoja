// Agregar 1 método y dos cracterísticas extras diferentes de las de largometraje y documental
const { Largometraje } = require("./Largometraje")

class Pelicula extends Largometraje {
    constructor (titulo, duracion, director, genero) {
        super(titulo, duracion);
        this.director = director;
        this.genero = genero;
    }

    trailer(){
        return "Escenas impactantes y grotescas en proceso..."
    }
}

module.exports = {
    Pelicula,
}


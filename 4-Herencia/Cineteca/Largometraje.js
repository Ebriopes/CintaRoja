// Clase padre
class Largometraje {
    constructor(titulo,duracion){
        this.titulo = titulo;
        this.duracion = duracion;
    }

    creditos(x) {
        return "Obra producida por: " + x
    }
}

module.exports = {
    Largometraje,
}
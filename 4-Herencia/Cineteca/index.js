const { Cine } = require('./Cine');
const { Documental } = require('./Documental');
const { Pelicula } = require('./Pelicula');

const sinEstres = new Cine("sinEstres", 11, 50);
const madMax = new Pelicula("Mad Max", 160, "unknow", "accion")
const cosmos = new Documental("Cosmos", 100, 1980, "Tyson")

// reproducir el documental Cosmos
sinEstres.reproducir(cosmos)

// reproducir su película Favorita
sinEstres.reproducir(madMax)
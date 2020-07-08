const request = require("request");
let arreglo = []

request("https://pokeapi.co/api/v2/generation/1/",(error,response,body) => {
    const species = JSON.parse(body).pokemon_species;
    const max = species.length
    let k=0

    request(`https://pokeapi.co/api/v2/pokemon/${species[k].name}`,recursiva = (a,b,bodY) => {
        const temp = JSON.parse(bodY)
        const moves =Object.values(temp.moves).map(x => x.move.name)
        const types =Object.values(temp.types).map(x => x.type.name)
        const obj = {
            name: temp.name,
            moves: moves,
            types: types,
        }
        arreglo.push(obj)
        if (++k !== max) {
            request(`https://pokeapi.co/api/v2/pokemon/${species[k].name}`, recursiva)
        }else {
            console.log(arreglo)
        }
    });
});
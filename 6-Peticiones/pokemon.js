const request = require("request");

createObj = (a,b,c) => {
    const pokimon = JSON.parse(c);
    
    for (const prop of pokimon.moves) {
        obj.moves.push((prop.move.name))
    }
    for (const prop of pokimon.types) {
        obj.types.push((prop.type.name))
    }

    obj.peso = pokimon.weight;
    arreglo.push(obj);
}

request("https://pokeapi.co/api/v2/generation/1/",(error,response,body) => {
    const species = JSON.parse(body).pokemon_species;
    const max = species.length
    const arreglo = []
    
    //for (const i of Object.values (species)) {
    //    const obj = {
    //        name: i.name,
    //        moves: [],
    //        types: [],
    //    }
    //    request("https://pokeapi.co/api/v2/pokemon/" + obj.name, )
    //    console.log(obj)
    //}
});
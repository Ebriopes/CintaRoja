const request = require("request");

request("https://pokeapi.co/api/v2/pokemon/55",(error,response,body) => {
    console.log(JSON.parse(body).name);
});
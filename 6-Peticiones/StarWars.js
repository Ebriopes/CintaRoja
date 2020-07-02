const request = require('request');

residentes = (x,y,body) => {
    const listRes = JSON.parse(body).residents;
    const max = listRes.length
    let k = 0

    request(listRes[k], aaaaah = (a,b,cuerpo) =>{
        console.log(`${k+1}: ${JSON.parse(cuerpo).name}\t\tfrom ${listRes[k]}`)
        
        if(++k < max) {
            request(listRes[k], aaaaah)
        }
    });
};

request("https://swapi.dev/api/planets/2", residentes);
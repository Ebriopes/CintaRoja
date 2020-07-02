const request = require("request");

baseAsteroide = (error,respuesta,body) => {
    const asteroids = JSON.parse(body).near_earth_objects;
    for (const [cuales,data] of Object.entries(asteroids)) {
        console.log(cuales);
        for (const valor of Object.values(data)) {
            console.log(`\t${valor.name}: is dangerus: ${valor.is_potentially_hazardous_asteroid}`)            
        }
    }
}

request("https://api.nasa.gov/neo/rest/v1/feed?start_date=2020-06-21&end_date=2020-06-28&api_key=DEMO_KEY",baseAsteroide);
const request = require("request");

baseAsteroide = (error,respuesta,body) => {
    const dbAsteroids = JSON.parse(body).links //near_earth_objects;
    
    console.log(dbAsteroids);

    //for (let i = 0; i < dbAsteroids.length; i++) {
    //    const element = dbAsteroids[i];
    //}
}

request("https://api.nasa.gov/neo/rest/v1/feed?start_date=2020-06-21&end_date=2020-06-28&api_key=DEMO_KEY",baseAsteroide);
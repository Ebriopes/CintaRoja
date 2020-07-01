const request = require('request');

civilOne = (error,response,body) => {
    console.log(JSON.parse(body).name);
};

request("https://age-of-empires-2-api.herokuapp.com/api/v1/unit/55",civilOne);
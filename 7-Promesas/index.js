const axios = require("axios");

const myObject = {
    name: "Daniel",
    last_name: "Vargas",
    "nacionalidad": "MX",
    "biography": "Me apruebo",
    gender: "M",
    age: 22,
    id: 1
}

sendID = () => {axios.post("https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/",myObject)
    .then(({data,status}) => {
        if(status === 201){
            console.log(`Creaste un nuevo usuario. ID: ${data.id}`);
            myObject.id = data.id
        };
    }).catch((error) => {
        console.log(error);
    })
}

getID = () => {
    axios.get(`https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/${myObject.id}`)
    .then(({data,status}) => console.log(status,data))
    .catch((error) => {
        console.log(error);
    });
}

delID = () => {
    axios.delete(`https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/${myObject.id}`)
    .then(({data,status}) => console.log(status,data))
    .catch((error) => {
        console.log(error);
    });
}
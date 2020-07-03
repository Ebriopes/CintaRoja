const axios = require("axios");

const myObject = {
    name: "Daniel",
    last_name: "Vargas",
    "nacionalidad": "MX",
    "biography": "Me apruebo",
    gender: "M",
    age: 21
}

//axios.post("https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/",myObject)
//    .then(({data,status}) => {
//        if(status === 201){
//            console.log(`Creaste un nuevo usuario. ID: ${data.id}`);
//        };
//    }).catch((error) => {
//        console.log(error);
//    })

crud = () => {
    axios
}
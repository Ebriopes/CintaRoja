const mascotas = [
    { nombre: "Bimbo",    especie: "Hamster", comidasFavoritas: ["Semillas", "Nueces"] },
    { nombre: "Ludovico", especie: "Perro",   comidasFavoritas: ["Huesos", "Jamon"] },
    { nombre: "Pavlov",   especie: "Perro",   comidasFavoritas: ["Croquetas", "Pollo"] },
    { nombre: "Chancla",  especie: "Gato",    comidasFavoritas: ["Atun", "Pescado"] },
    { nombre: "Don Pepe", especie: "Perico",  comidasFavoritas: ["Semillas"] }
];

petNames = (x) =>{
    let i = [];
    for (const [,values] of Object.entries(x)) {
        i.push(values.nombre);
    }
    return i;
};

testeo = (x) =>{
    const test = Object.values(x)

    return test[0]
};

showMessaje = (callbak,x) => {
    callbak(x);
};

/*showMessaje(x =>{
    console.log(x);
}, "Mi mensaje dentro de un callback" ); */

console.log(testeo(mascotas));
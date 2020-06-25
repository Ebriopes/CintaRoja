class Persona {
    constructor(nombre,edad,sexo,altura) {
        this.nombre = nombre;
        this.edad = edad;
        this.rfc = nombre.substr(nombre.lastIndexOf(" ",nombre.lastIndexOf(" ")-1)+1, 2).toUpperCase() + nombre[nombre.lastIndexOf(" ")+1] + nombre[0];
        this.sexo = sexo;
        this.altura = altura;
    }
    calcularIMC() {

    }

    esMayorDeEdad() {

    }
}

const daniel = new Persona ("Daniel Antonio Vargas Rosales", 22, 'masculino', 1.75)

console.log(daniel.rfc)

class Cuenta {
    constructor(titular,cantidad) {
        
    }
}